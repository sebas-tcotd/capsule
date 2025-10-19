# Preguntas Frecuentes (FAQ)

## ❓ ¿Por qué exportar desde `dist/` me daba errores?

### Problema

Cuando configuraste:

```json
{
  "exports": {
    "./*": "./dist/*.js",
    "./styles.css": "./dist/index.css"
  }
}
```

Obtenías errores como:

```
SyntaxError: The requested module '/packages/ui/dist/button.js' does not provide an export named 'Button'
```

### Razones

#### 1. **Archivos no existían**

```bash
packages/ui/dist/  # ❌ Carpeta vacía hasta que corras build
```

Storybook intentaba importar `dist/button.js` pero el archivo no existía porque nunca corriste el build.

#### 2. **TypeScript no estaba configurado para compilar a dist/**

Tu `tsconfig.json` necesitaría:

```json
{
  "compilerOptions": {
    "outDir": "./dist", // ❌ No estaba configurado
    "declaration": true, // ❌ Genera .d.ts
    "declarationMap": true, // ❌ Para debugging
    "rootDir": "./src"
  }
}
```

Sin esto, TypeScript no sabe dónde compilar.

#### 3. **CSS separado del JS**

Con `dist/`, el CSS se compila por separado:

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/styles.css -o ./dist/index.css",
    "build:js": "tsc"
  }
}
```

Dos builds diferentes = más complejidad.

#### 4. **Module resolution**

```js
// En button.tsx (fuente)
export const Button = () => { ... };

// Compilado a button.js
exports.Button = () => { ... };  // CommonJS
// O
export const Button = () => { ... };  // ESM
```

Dependiendo de tu `tsconfig.json` → `module`, podía generar CommonJS o ESM. Si generaba CommonJS pero tu package.json tenía `"type": "module"`, fallaba.

### Solución Correcta (actual)

```json
{
  "exports": {
    ".": "./src/index.ts" // ✅ Siempre existe, no requiere build
  }
}
```

**Ventajas**:

- ✅ No necesitas build step
- ✅ Las apps que consumen (Storybook, Next.js) compilan el `.tsx` directamente
- ✅ Hot reload instantáneo
- ✅ Debugging más fácil (ves código fuente, no compilado)

---

## ❓ ¿Cómo estructurar bien `@capsule/ui` y `@capsule/tailwind-config`?

### Estructura Recomendada

#### `@capsule/tailwind-config` (Fuente de Verdad)

```
packages/tailwind-config/
├── shared-styles.css       # ⭐ Todos los tokens aquí
│   @import "tailwindcss";
│   @theme {
│     --color-primary-500: #2C2C2C;
│     --color-accent-500: #C67A5C;
│     /* ... más tokens */
│   }
│
├── package.json
│   "exports": {
│     ".": "./shared-styles.css"
│   }
│
└── README.md              # Documentación de tokens
```

**Responsabilidades**:

- ✅ Define TODOS los design tokens
- ✅ No contiene componentes React
- ✅ No depende de `@capsule/ui`
- ✅ Puede ser consumido por cualquier app (web, docs, mobile)

#### `@capsule/ui` (Componentes)

```
packages/ui/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   └── Button/
│   │   │       ├── Button.tsx     # Componente
│   │   │       └── index.ts
│   │   ├── molecules/
│   │   └── organisms/
│   │
│   ├── styles/
│   │   └── tokens.css             # ⭐ Re-exporta tailwind-config
│   │       @import "@capsule/tailwind-config";
│   │
│   ├── utils/
│   │   └── cn.ts
│   │
│   └── index.ts                   # Export principal
│
├── package.json
│   "exports": {
│     ".": "./src/index.ts",
│     "./styles/*": "./src/styles/*"
│   }
│   "dependencies": {
│     "@capsule/tailwind-config": "workspace:*"  # ⭐ Depende de tokens
│   }
│
├── README.md
├── CONTRIBUTING.md
└── STRUCTURE.md
```

**Responsabilidades**:

- ✅ Contiene componentes React
- ✅ Consume tokens de `@capsule/tailwind-config`
- ✅ Exporta código fuente (`.tsx`)
- ✅ No define tokens propios (usa los compartidos)

### Flujo de Dependencias

```
@capsule/tailwind-config (tokens)
         ↓ (depende)
@capsule/ui (componentes)
         ↓ (depende)
apps/docs (Storybook)
apps/web (Next.js app)
```

**Reglas**:

1. `tailwind-config` NO depende de nadie (es la base)
2. `ui` depende de `tailwind-config`
3. Apps dependen de ambos (o solo de `ui` que re-exporta)

---

## ❓ ¿Debo usar safelist o content scanning?

### Content Scanning (Preferido)

```ts
// apps/docs/tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}", // ⭐ Escanea package ui
  ],
};
```

**Ventajas**:

- ✅ Automático - Tailwind encuentra las clases por ti
- ✅ Tree-shaking - Solo genera clases que usas
- ✅ Sin mantenimiento - Agregas componentes, funciona

**Cuándo usar**:

- Producción ✅
- Cuando content scanning funciona correctamente ✅

### Safelist (Temporal)

```ts
// apps/docs/tailwind.config.ts
export default {
  content: [...],
  safelist: [
    'bg-primary-500',
    'bg-accent-500',
    // ... todas las clases
  ]
}
```

**Ventajas**:

- ✅ Garantiza que la clase se genere siempre
- ✅ Útil para debugging

**Desventajas**:

- ❌ Genera CSS innecesario (clases que no usas)
- ❌ Requiere mantenimiento manual
- ❌ No escala bien

**Cuándo usar**:

- Debugging (cuando content scanning falla) 🔍
- Clases dinámicas: `className={`bg-${color}-500`}` (NO recomendado)
- Temporalmente mientras arreglas content scanning ⏰

### Nuestra Recomendación

```ts
// ✅ Fase final (una vez que todo funciona)
export default {
  content: ["./src/**/*.{ts,tsx,mdx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  // Sin safelist
};
```

Ya hiciste esto y funciona correctamente ✅

---

## ❓ ¿Por qué Tailwind v4 se siente tan diferente?

### Cambio de Paradigma

#### Tailwind v3: JavaScript-first

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
};
```

Todo está en JavaScript. El CSS se genera a partir del objeto JS.

#### Tailwind v4: CSS-first

```css
/* tokens.css */
@import "tailwindcss";

@theme {
  --color-primary-500: #2c2c2c;
}
```

Los tokens están en CSS. Más cercano a CSS nativo.

### Principales Diferencias

| Aspecto           | v3                         | v4                                 |
| ----------------- | -------------------------- | ---------------------------------- |
| **Configuración** | JS obligatorio             | CSS-first (JS opcional)            |
| **Tokens**        | `theme: { colors: {...} }` | `@theme { --color-*: ... }`        |
| **Imports**       | `@tailwind base;`          | `@import "tailwindcss";`           |
| **Plugin**        | PostCSS: `tailwindcss`     | Vite: `@tailwindcss/vite`          |
| **Scanning**      | `content: []` en JS        | `@source` en CSS o `content` en TS |
| **CSS Variables** | Generadas automáticamente  | Defines tú directamente            |

### ¿Por qué el cambio?

1. **Performance**: CSS nativo es más rápido
2. **Estándares**: Usa CSS custom properties nativas
3. **Simplicidad**: Menos abstracción JS
4. **Flexibilidad**: Puedes mezclar con CSS puro fácilmente

### ¿Es mejor v4?

**Para proyectos nuevos**: Sí ✅

- Más rápido
- Más estándar
- Mejor integración con Vite

**Para proyectos existentes v3**: Migración gradual

- v3 seguirá soportado
- Migra cuando estés listo

### En Monorepos

**v3**: Config más complejo

```js
// Necesitas extends, preset, etc.
module.exports = {
  presets: [require('@acme/tailwind-config')],
  content: [...]
}
```

**v4**: Más simple

```css
@import "@acme/tailwind-config"; /* Done */
```

---

## ❓ ¿Cuándo debería compilar a `dist/`?

### Casos donde SÍ compilar

#### 1. **Publicar a npm**

```json
{
  "name": "@mi-empresa/design-system",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

Usuarios externos necesitan archivos compilados.

#### 2. **Biblioteca pública open-source**

```bash
npm install @shadcn/ui  # Reciben archivos compilados
```

No puedes asumir que tienen tu setup de monorepo.

#### 3. **Targets antiguos (IE11, etc.)**

```json
{
  "compilerOptions": {
    "target": "ES5"
  }
}
```

Necesitas transpilar sintaxis moderna.

#### 4. **Optimización extrema**

```json
{
  "scripts": {
    "build": "tsc && esbuild --minify"
  }
}
```

Pre-minificación, tree-shaking agresivo.

### Casos donde NO compilar (tu caso)

#### 1. **Monorepo interno**

```
packages/ui/  # ❌ No publicas a npm
```

Solo tú y tu equipo lo usan.

#### 2. **Apps modernas**

```
apps/docs/    # Vite compila .tsx directamente
apps/web/     # Next.js compila .tsx directamente
```

Los bundlers ya saben cómo procesar TypeScript.

#### 3. **Desarrollo rápido**

```bash
# ✅ Sin build
Cambias Button.tsx → Hot reload instantáneo

# ❌ Con build
Cambias Button.tsx → Build → Hot reload (más lento)
```

#### 4. **Equipos pequeños**

```
1-5 personas = setup simple
```

No necesitas complejidad enterprise.

### Nuestra Decisión

```json
{
  "exports": {
    ".": "./src/index.ts" // ✅ Fuente directa
  }
}
```

**Razones**:

1. Monorepo interno ✅
2. Apps con Vite/Next.js ✅
3. Equipo pequeño ✅
4. Desarrollo rápido ✅

---

## ❓ ¿Cómo consumir los tokens en nuevas apps?

### En Next.js (apps/web)

```css
/* app/globals.css */
@import "@capsule/tailwind-config";
```

```ts
// tailwind.config.ts (si necesitas escanear más archivos)
export default {
  content: ["./app/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
};
```

```tsx
// app/page.tsx
import { Button } from "@capsule/ui";

export default function Home() {
  return <Button variant="primary">Click</Button>;
}
```

### En otra app (Remix, Vite, etc.)

```css
/* app/root.css (Remix) o src/index.css (Vite) */
@import "@capsule/tailwind-config";
```

```json
// package.json
{
  "dependencies": {
    "@capsule/ui": "workspace:*",
    "@capsule/tailwind-config": "workspace:*"
  }
}
```

```tsx
import { Button } from "@capsule/ui";
```

### Directamente (sin @capsule/ui)

```css
@import "@capsule/tailwind-config";
```

```tsx
// Usa las clases directamente
<button className="bg-primary-500 text-white px-6 py-3 rounded-lg">
  Custom Button
</button>
```

---

## ❓ ¿Debo crear componentes en `packages/ui` o en `apps/web`?

### En `packages/ui` ✅

**Cuándo**: Componentes reutilizables en múltiples apps

Ejemplos:

- ✅ Button, Input, Badge (UI primitivos)
- ✅ FormField, Card, Modal (patrones comunes)
- ✅ Header, Footer (si se comparten entre apps)

**Razón**: Design system = componentes compartidos

### En `apps/web` ✅

**Cuándo**: Componentes específicos de esa app

Ejemplos:

- ✅ DashboardLayout (solo en web)
- ✅ LoginForm (lógica de negocio específica)
- ✅ UserProfile (features específicos)

**Razón**: No contaminar el design system con lógica de negocio

### Regla de Oro

```
Si >1 app lo usa → packages/ui
Si solo 1 app lo usa → esa app
```

---

## ❓ ¿Por qué Storybook no funciona con Node 23+?

### El Problema

**Síntoma**: Storybook 9.1.13 falla al instalar o ejecutarse con Node v23 o superior.

```bash
node -v  # v23.x.x
pnpm install  # ❌ Falla con errores de compilación

# Errores típicos:
error @storybook/...@9.1.13: The engine "node" is incompatible
gyp ERR! build error
npm ERR! Failed to compile native addon
```

### Por Qué Ocurre

#### 1. **Versión muy reciente de Node**

Node 23 fue lanzado en **octubre 2024**. Es tan reciente que muchas herramientas aún no tienen soporte:

- Storybook 9.1.13 (diciembre 2024) fue probado hasta Node 22
- Las dependencias nativas de Storybook necesitan actualizarse
- Playwright y otros addons no están compilados para Node 23

#### 2. **Breaking Changes en Node 23**

Node 23 introdujo cambios en:

- **V8 engine**: Nueva versión con APIs modificadas
- **Native modules**: ABI (Application Binary Interface) cambió
- **File system**: Cambios en APIs de fs que afectan bundlers

#### 3. **Dependencias Nativas**

Storybook depende de paquetes con código nativo en C++:

```
@storybook/core
  └── @swc/core (compilador rápido)
      └── Bindings nativos para cada versión de Node
  └── @playwright/browser (navegadores headless)
      └── Binarios compilados específicos
```

Estos binarios necesitan **recompilarse** para cada versión major de Node.

#### 4. **Ciclo de Releases**

```
Node 23 lanzado → octubre 2024
Storybook 9.1   → diciembre 2024 (testeado con Node 18-22)
Storybook 9.2   → TBD (probablemente soporte Node 23)
```

Hay un **delay natural** entre el lanzamiento de Node y el soporte en herramientas.

### Solución: Usar Node 22 LTS

**Node 22** es la versión LTS (Long Term Support) actual y es totalmente compatible:

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar Node 22
nvm install 22.15.0

# Usar en el proyecto
nvm use 22.15.0

# Verificar
node -v  # v22.15.0 ✅
```

### Automatización con .nvmrc

Ya creamos el archivo `.nvmrc` en la raíz del proyecto:

```bash
# .nvmrc
22.15.0
```

**Uso**:

```bash
cd /path/to/capsule
nvm use  # Lee .nvmrc automáticamente
```

**Auto-switch (opcional)**:

Agrega esto a tu `~/.zshrc` o `~/.bashrc`:

```bash
# Auto-switch Node version con nvm
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

Ahora al entrar a la carpeta del proyecto, nvm cambiará automáticamente a Node 22.

### Alternativas a nvm

#### **fnm** (Fast Node Manager - Rust)

```bash
# Instalar fnm (más rápido que nvm)
curl -fsSL https://fnm.vercel.app/install | bash

# Usar
fnm install 22.15.0
fnm use 22.15.0

# Auto-switch con .nvmrc
eval "$(fnm env --use-on-cd)"
```

#### **volta** (Otra alternativa rápida)

```bash
# Instalar volta
curl https://get.volta.sh | bash

# Fijar versión para el proyecto
volta pin node@22.15.0
```

### ¿Cuándo podrás usar Node 23+?

Espera a que:

1. **Storybook 9.2+** lance soporte oficial
2. **Todas las dependencias** actualicen sus binarios nativos
3. **La comunidad** reporte que es estable

**Estimado**: Q2 2025 (abril-junio)

Por ahora, **Node 22 LTS es la opción segura y recomendada** ✅

---

## ❓ Más preguntas

Si tienes más preguntas, puedes:

1. **Revisar la documentación**:
   - `ARCHITECTURE.md` - Decisiones arquitectónicas
   - `SETUP.md` - Estado actual
   - `packages/ui/STRUCTURE.md` - Estructura de componentes

2. **Consultar ejemplos**:
   - Mira `Button.tsx` como referencia
   - Sigue el patrón para nuevos componentes

3. **Experimentar**:
   - Crea un componente pequeño (Badge, Avatar)
   - Sigue el checklist en `STRUCTURE.md`

¡Buena suerte! 🚀
