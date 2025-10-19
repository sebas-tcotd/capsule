# Setup Actual del Monorepo Capsule

Este documento resume el estado actual de la configuración y cómo todo está conectado.

## ⚙️ Requisitos del Sistema

- **Node.js**: v22.15.0 (LTS) ⚠️ **IMPORTANTE: Storybook no funciona con Node 23+**
- **pnpm**: v8 o superior
- **Git**: Para control de versiones

### Configurar Node v22 con nvm

```bash
# Instalar nvm si no lo tienes
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar Node 22
nvm install 22.15.0

# Usar Node 22 para este proyecto
nvm use 22.15.0

# Opcional: Crear .nvmrc para auto-selección
echo "22.15.0" > .nvmrc
```

Con `.nvmrc`, cada vez que entres al proyecto, ejecuta `nvm use` y seleccionará automáticamente Node 22.

## ✅ Estado Actual (Funcionando)

### Packages

#### 1. `@capsule/tailwind-config`

**Propósito**: Almacena todos los design tokens y foundations del design system.

**Archivos clave**:

```
packages/tailwind-config/
├── shared-styles.css  # ⭐ FUENTE DE VERDAD para tokens
├── package.json
└── README.md
```

**Exports**:

```json
{
  "exports": {
    ".": "./shared-styles.css"
  }
}
```

**Tokens incluidos**:

- ✅ Primary (Charcoal) - 11 shades (50-950)
- ✅ Accent (Terracotta) - 11 shades
- ✅ Neutral - 11 shades
- ✅ Semantic (Success, Warning, Error, Info) - 4 shades cada uno
- ✅ Typography (Inter, JetBrains Mono, escala Perfect Fourth)
- ✅ Spacing (8px base grid)
- ✅ Radius (moderately rounded, 8px default)
- ✅ Shadows (6 niveles)
- ✅ Base styles (body, headings)
- ✅ Utility classes (text-primary, bg-surface, focus-ring)

**Consumido por**:

- `@capsule/ui` (via `@import "@capsule/tailwind-config"`)
- `apps/docs` (via `@import "@capsule/tailwind-config"`)
- `apps/web` (puede importarlo cuando lo necesites)

---

#### 2. `@capsule/ui`

**Propósito**: Biblioteca de componentes React usando Atomic Design.

**Archivos clave**:

```
packages/ui/src/
├── components/
│   └── atoms/
│       └── Button/
│           ├── Button.tsx      # Componente con CVA
│           └── index.ts
├── styles/
│   └── tokens.css             # Re-exporta @capsule/tailwind-config
├── utils/
│   ├── cn.ts                  # Merge de clases Tailwind
│   └── index.ts
└── index.ts                   # Export principal
```

**Exports**:

```json
{
  "exports": {
    ".": "./src/index.ts", // import { Button } from '@capsule/ui'
    "./components/*": "./src/components/*/index.ts",
    "./styles/*": "./src/styles/*" // import '@capsule/ui/styles/tokens.css'
  }
}
```

**Componentes disponibles**:

- ✅ **Button**: 5 variantes, 3 tamaños, loading state, fully typed

**Características**:

- ✅ TypeScript strict mode
- ✅ Class Variance Authority (CVA) para variantes
- ✅ forwardRef en todos los componentes DOM
- ✅ Utility `cn()` para merge de clases
- ✅ Exporta código fuente (`.tsx`), NO compilado

---

#### 3. `apps/docs` (Storybook)

**Propósito**: Documentación interactiva de componentes.

**Archivos clave**:

```
apps/docs/
├── .storybook/
│   ├── main.ts           # Config de Storybook
│   └── preview.ts        # Importa output.css
├── src/
│   ├── input.css         # Importa @capsule/tailwind-config
│   ├── output.css        # CSS compilado (generado)
│   └── stories/
│       └── Button.stories.tsx  # 14 stories del Button
├── tailwind.config.ts    # Escanea packages/ui/src/**/*.{ts,tsx}
└── package.json
```

**Scripts**:

```json
{
  "scripts": {
    "dev": "tailwindcss -i ./src/input.css -o ./src/output.css --watch & storybook dev -p 6006",
    "build": "tailwindcss -i ./src/input.css -o ./src/output.css && storybook build",
    "build:css": "tailwindcss -i ./src/input.css -o ./src/output.css"
  }
}
```

**Flujo**:

1. `input.css` importa `@capsule/tailwind-config`
2. Tailwind compila `input.css` → `output.css`
3. `tailwind.config.ts` escanea `packages/ui/src/**/*.{ts,tsx}` para clases
4. Storybook carga `output.css` en `preview.ts`
5. Stories renderizan componentes con estilos ✅

**Stories disponibles**:

- ✅ Button: Primary, Secondary, Outline, Ghost, Danger, Small, Medium, Large, Loading, Disabled, Full Width, All Variants, All Sizes, Interactive

---

## 🔗 Flujo de Datos

```
┌─────────────────────────────────┐
│ @capsule/tailwind-config        │
│ shared-styles.css                │
│ ┌─────────────────────────────┐ │
│ │ @theme {                    │ │
│ │   --color-primary-500: #2C2C2C │
│ │   --color-accent-500: #C67A5C  │
│ │ }                           │ │
│ └─────────────────────────────┘ │
└────────────┬────────────────────┘
             │
             ├─────────────────────────────────┐
             │                                 │
             ▼                                 ▼
┌─────────────────────┐           ┌──────────────────────┐
│ @capsule/ui         │           │ apps/docs            │
│ tokens.css          │           │ input.css            │
│ @import "@capsule/  │           │ @import "@capsule/   │
│  tailwind-config"   │           │  tailwind-config"    │
│                     │           │                      │
│ Button.tsx          │           │ tailwind.config.ts   │
│ className=          │           │ content: [           │
│  "bg-primary-500"   │           │   "../../packages/ui │
│                     │           │      /src/**/*.tsx"  │
│                     │           │ ]                    │
└──────────┬──────────┘           │                      │
           │                      │ ↓ compila            │
           │                      │                      │
           │                      │ output.css           │
           │                      │ .bg-primary-500 {    │
           │                      │   background-color:  │
           │                      │     #2C2C2C;         │
           │                      │ }                    │
           │                      └──────────┬───────────┘
           │                                 │
           └─────────────────────────────────┤
                                             ▼
                                   ┌─────────────────────┐
                                   │ Storybook UI        │
                                   │ Button renderizado  │
                                   │ con estilos ✅      │
                                   └─────────────────────┘
```

## 🎯 Diferencias vs. Tailwind v3

| Aspecto         | Tailwind v3                                       | Tailwind v4 (actual)                           |
| --------------- | ------------------------------------------------- | ---------------------------------------------- |
| **Config file** | `tailwind.config.js` (requerido)                  | Opcional (usamos CSS)                          |
| **Tokens**      | JS object: `theme: { extend: { colors: {...} } }` | CSS: `@theme { --color-primary-500: #2C2C2C }` |
| **Import**      | `@tailwind base; @tailwind components;`           | `@import "tailwindcss";`                       |
| **Scan**        | `content: []` en JS                               | `content: []` en TS o `@source` en CSS         |
| **Plugin**      | PostCSS: `require('tailwindcss')`                 | Vite: `@tailwindcss/vite`                      |

**En nuestro setup**:

- ✅ Usamos `@theme` en CSS para tokens (v4 style)
- ✅ Usamos `tailwind.config.ts` para scanning (hybrid approach)
- ✅ Importamos con `@import "tailwindcss"` (v4 style)

## 📝 Comandos Útiles

### Development

```bash
# Storybook
cd apps/docs
pnpm dev              # Compila CSS + inicia Storybook en :6006

# Type checking
cd packages/ui
pnpm check-types

# Linting
pnpm lint
```

### Crear Nuevo Componente

```bash
# 1. Crear archivo
packages/ui/src/components/atoms/Input/Input.tsx

# 2. Crear index
packages/ui/src/components/atoms/Input/index.ts

# 3. Exportar en main index
packages/ui/src/index.ts

# 4. Crear story
apps/docs/src/stories/Input.stories.tsx

# 5. (Futuro) Crear test
packages/ui/src/components/atoms/Input/Input.test.tsx
```

### Agregar Nuevo Token

```bash
# 1. Editar
packages/tailwind-config/shared-styles.css

# 2. Agregar a @theme
@theme {
  --color-custom-500: #FF0000;
}

# 3. Usar en componentes
className="bg-custom-500"

# 4. Recompilar CSS en docs (automático con watch)
cd apps/docs
pnpm build:css  # Si no está en watch mode
```

## ⚠️ Problemas Comunes y Soluciones

### 0. "Storybook no instala o falla al iniciar" (Node 23+)

**Síntoma**: Errores durante `pnpm install` o al ejecutar `pnpm dev` en Storybook.

```bash
# Ejemplos de errores:
error: Failed to compile ...
error @storybook/...@9.1.13: The engine "node" is incompatible
gyp ERR! build error
```

**Causa**: Node 23+ no es compatible con Storybook 9.1.13.

**Solución**:

```bash
# 1. Verifica tu versión de Node
node -v  # Si muestra v23.x.x, necesitas cambiar

# 2. Instala nvm si no lo tienes
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 3. Instala Node 22
nvm install 22.15.0

# 4. Úsalo
nvm use 22.15.0

# 5. Verifica
node -v  # Debe mostrar v22.15.0

# 6. Limpia y reinstala
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 7. Crea .nvmrc para auto-selección
echo "22.15.0" > .nvmrc
```

### 1. "Clases de Tailwind no se aplican"

**Síntoma**: El componente renderiza pero sin estilos.

**Solución**:

```bash
# 1. Verifica que tailwind.config.ts escanee los archivos correctos
cd apps/docs
cat tailwind.config.ts  # Debe incluir "../../packages/ui/src/**/*.{ts,tsx}"

# 2. Recompila CSS
pnpm build:css

# 3. Reinicia Storybook
pnpm dev
```

### 2. "Cannot find module '@capsule/ui'"

**Síntoma**: Import falla.

**Solución**:

```bash
# 1. Verifica que el package esté instalado
cd apps/docs
pnpm add @capsule/ui  # Debería usar workspace:*

# 2. Verifica package.json exports
cd packages/ui
cat package.json  # Debe tener "exports": { ".": "./src/index.ts" }
```

### 3. "Token no existe (ej: bg-custom-500)"

**Síntoma**: Clase no se genera.

**Solución**:

```bash
# 1. Agrega a @theme en tailwind-config
cd packages/tailwind-config
nano shared-styles.css

# 2. Opcionalmente, agrega a safelist temporal
cd apps/docs
nano tailwind.config.ts
# safelist: ["bg-custom-500"]

# 3. Recompila
pnpm build:css
```

## 🚀 Próximos Pasos

### Componentes Pendientes (Phase 1)

- [ ] **Input** (text, email, password, variants, sizes)
- [ ] **Badge** (variants, sizes)
- [ ] **Avatar** (sizes, fallback, image)
- [ ] **IconButton** (usando lucide-react)

### Testing (Pendiente)

- [ ] Configurar Vitest en `@capsule/ui`
- [ ] Escribir tests para Button
- [ ] Setup de coverage

### Optimizaciones

- [ ] Eliminar safelist cuando scanning funcione 100%
- [ ] Agregar pre-commit hook para lint + type-check
- [ ] CI/CD para Storybook deployment

## 📚 Documentación

- `ARCHITECTURE.md` - Decisiones arquitectónicas
- `packages/ui/STRUCTURE.md` - Estructura de componentes
- `packages/ui/CONTRIBUTING.md` - Guía de contribución
- `packages/ui/README.md` - Overview del package
- `packages/tailwind-config/README.md` - Tokens y uso

---

**Última actualización**: 2025-01-19
**Estado**: ✅ Funcionando correctamente
