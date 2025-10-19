# Troubleshooting Guide

Guía completa de solución de problemas comunes en el monorepo Capsule.

## 🚨 Problema #1: Storybook no instala o falla (Node 23+)

### Síntomas

```bash
node -v  # v23.x.x

# Al instalar
pnpm install
# ❌ error @storybook/...@9.1.13: The engine "node" is incompatible with this module
# ❌ gyp ERR! build error
# ❌ npm ERR! Failed to compile native addon

# Al ejecutar
pnpm dev
# ❌ Error: Cannot find module '@storybook/core'
```

### Causa

**Storybook 9.1.13 no soporta Node 23+** debido a:

1. **Dependencias nativas** (C++ bindings) no compiladas para Node 23
2. **Breaking changes** en Node 23 (V8 engine, ABI, APIs)
3. **Playwright** y otros addons no actualizados

### Solución Completa

```bash
# 1. Verificar versión de Node
node -v

# 2. Instalar nvm si no lo tienes
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 3. Recargar shell
source ~/.zshrc  # o ~/.bashrc

# 4. Instalar Node 22
nvm install 22.15.0

# 5. Usar Node 22
nvm use 22.15.0

# 6. Verificar
node -v  # Debe mostrar v22.15.0

# 7. Limpiar todo
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm pnpm-lock.yaml

# 8. Reinstalar desde cero
pnpm install

# 9. Probar Storybook
cd apps/docs
pnpm dev
```

### Prevención

El proyecto incluye `.nvmrc`:

```bash
# Al entrar al proyecto, simplemente:
nvm use
```

**Auto-switch (recomendado)**:

Agrega a `~/.zshrc`:

```bash
# Auto-load .nvmrc
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

---

## 🚨 Problema #2: Clases de Tailwind no se aplican

### Síntomas

```tsx
// Componente renderiza, pero sin estilos
<Button variant="primary">Click</Button>
// Aparece texto sin formato, sin background ni estilos
```

### Diagnóstico

```bash
# 1. Verificar que output.css tenga las clases
cd apps/docs
grep "bg-primary-500" src/output.css
# Si no muestra nada → Tailwind no está compilando
```

### Causas Posibles

#### A. Tailwind no está escaneando archivos correctos

```ts
// apps/docs/tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}", // ⚠️ Verifica esta línea
  ],
};
```

**Solución**:

```bash
cd apps/docs
cat tailwind.config.ts
# Asegúrate que content incluya packages/ui/src
```

#### B. CSS no está compilado

```bash
# Verifica que output.css exista y esté actualizado
ls -lh apps/docs/src/output.css
# Si es muy pequeño (<10KB), no está compilado correctamente
```

**Solución**:

```bash
cd apps/docs
pnpm build:css
```

#### C. Preview no está importando CSS

```ts
// apps/docs/.storybook/preview.ts
import "../src/output.css"; // ⚠️ Debe estar presente
```

### Solución Completa

```bash
# 1. Recompilar CSS
cd apps/docs
pnpm build:css

# 2. Verificar que se generaron las clases
grep -c "bg-primary-500" src/output.css
# Debe mostrar 1 o más

# 3. Reiniciar Storybook
pnpm dev

# 4. Hard refresh en el navegador
# Cmd+Shift+R (Mac) o Ctrl+Shift+R (Windows)
```

---

## 🚨 Problema #3: "Cannot find module '@capsule/ui'"

### Síntomas

```bash
# En apps/docs o apps/web
import { Button } from "@capsule/ui";
# ❌ Error: Cannot find module '@capsule/ui' or its corresponding type declarations
```

### Causas Posibles

#### A. Package no está instalado

```bash
cd apps/docs
cat package.json | grep "@capsule/ui"
# Si no aparece, no está instalado
```

**Solución**:

```bash
cd apps/docs
pnpm add @capsule/ui
```

#### B. Exports incorrectos en package.json

```bash
cd packages/ui
cat package.json
```

Debe tener:

```json
{
  "exports": {
    ".": "./src/index.ts",
    "./components/*": "./src/components/*/index.ts",
    "./styles/*": "./src/styles/*"
  }
}
```

**Solución**:

```bash
# Si falta, agrégalo manualmente o restaura desde git
git checkout packages/ui/package.json
```

#### C. Workspace protocol incorrecto

```json
// apps/docs/package.json
{
  "dependencies": {
    "@capsule/ui": "workspace:*" // ✅ Correcto
    // "@capsule/ui": "^0.0.0"    // ❌ Incorrecto
  }
}
```

**Solución**:

```bash
# Reinstalar con workspace protocol
cd apps/docs
pnpm add @capsule/ui@workspace:*
```

---

## 🚨 Problema #4: Token/clase personalizada no se genera

### Síntomas

```tsx
// Agregaste un token nuevo
className = "bg-custom-500"; // ❌ No se aplica el color
```

### Diagnóstico

```bash
cd apps/docs
grep "bg-custom-500" src/output.css
# Si no aparece, Tailwind no lo generó
```

### Causa

El token no está definido en `@capsule/tailwind-config`.

### Solución

```bash
# 1. Agregar el token
cd packages/tailwind-config
nano shared-styles.css
```

```css
@theme {
  /* ... tokens existentes */
  --color-custom-500: #ff0000; /* Agregar aquí */
}
```

```bash
# 2. Recompilar CSS en docs
cd ../../apps/docs
pnpm build:css

# 3. Verificar
grep "bg-custom-500" src/output.css

# 4. Reiniciar Storybook
pnpm dev
```

---

## 🚨 Problema #5: Hot Reload no funciona

### Síntomas

Cambias código en `packages/ui/src/button.tsx` pero Storybook no actualiza.

### Solución

```bash
# 1. Asegúrate que Tailwind watch esté corriendo
cd apps/docs
pnpm dev  # Debe incluir "tailwindcss ... --watch"

# 2. Verifica que no haya errores en consola
# Cmd+Option+I (Mac) para abrir DevTools

# 3. Si persiste, reinicia Storybook
# Ctrl+C y luego pnpm dev
```

---

## 🚨 Problema #6: TypeScript no encuentra tipos

### Síntomas

```tsx
import { Button } from "@capsule/ui";
// ❌ Could not find a declaration file for module '@capsule/ui'
```

### Solución

```bash
# 1. Verificar que tsconfig.json tenga paths correctos
cd apps/docs
cat tsconfig.json

# 2. Reinstalar types
pnpm install

# 3. Reiniciar TypeScript server en tu editor
# VSCode: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

---

## 🚨 Problema #7: Git hooks no funcionan

### Síntomas

```bash
git commit -m "test"
# No ejecuta lint-staged ni commitlint
```

### Solución

```bash
# 1. Verificar que Husky esté instalado
ls -la .husky

# 2. Reinstalar Husky
pnpm prepare

# 3. Hacer los hooks ejecutables
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# 4. Probar
git add .
git commit -m "test: verify hooks work"
```

---

## 🚨 Problema #8: Docker no inicia

### Síntomas

```bash
make dev
# ❌ Error response from daemon: driver failed programming external connectivity
```

### Causas Posibles

#### A. Puerto 5432 en uso

```bash
# Verificar
lsof -i :5432
# Si muestra algo, otro PostgreSQL está corriendo
```

**Solución**:

```bash
# Detener PostgreSQL local
brew services stop postgresql@14  # Mac
sudo systemctl stop postgresql    # Linux

# O cambiar puerto en docker-compose.yml
```

#### B. Docker no está corriendo

```bash
# Verificar
docker ps
# Si falla, Docker Desktop no está activo
```

**Solución**:

```bash
# Iniciar Docker Desktop
open -a Docker  # Mac
```

---

## 📋 Checklist General de Troubleshooting

Cuando algo falla, ejecuta este checklist:

```bash
# 1. Verificar versión de Node
node -v  # Debe ser v22.15.0

# 2. Limpiar y reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 3. Verificar que builds funcionen
pnpm build

# 4. Type checking
pnpm check-types

# 5. Linting
pnpm lint

# 6. Si usa Docker
docker compose down
docker compose up -d

# 7. Reiniciar dev server
pnpm dev
```

---

## 🆘 Último Recurso

Si nada funciona:

```bash
# 1. Hacer stash de cambios
git stash

# 2. Limpiar TODO
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm pnpm-lock.yaml
rm -rf .turbo
rm -rf apps/*/.next
rm -rf apps/*/dist

# 3. Verificar Node version
nvm use 22.15.0

# 4. Reinstalar desde cero
pnpm install

# 5. Build
pnpm build

# 6. Dev
pnpm dev

# 7. Recuperar cambios
git stash pop
```

---

## 📚 Recursos Adicionales

- **FAQ.md**: Preguntas frecuentes con explicaciones detalladas
- **SETUP.md**: Estado actual y configuración completa
- **ARCHITECTURE.md**: Decisiones técnicas y por qué
- **GitHub Issues**: https://github.com/tu-repo/issues

---

## 💬 ¿Nada de esto funciona?

1. Verifica que seguiste todos los pasos exactamente
2. Lee `FAQ.md` para entender el "por qué"
3. Busca el error exacto en Google/StackOverflow
4. Crea un issue en GitHub con:
   - Node version (`node -v`)
   - pnpm version (`pnpm -v`)
   - OS version
   - Error completo (con stack trace)
   - Pasos para reproducir
