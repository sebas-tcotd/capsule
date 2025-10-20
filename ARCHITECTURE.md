# Arquitectura del Monorepo Capsule

Este documento explica las decisiones arquitectónicas del monorepo y por qué están estructurados de esta manera.

## 📦 Estructura General

```
capsule/
├── apps/
│   ├── docs/          # Storybook (documentación de componentes)
│   └── web/           # Next.js app (aplicación principal)
├── packages/
│   ├── ui/            # Componentes React
│   ├── tailwind-config/  # Design tokens y configuración de Tailwind
│   ├── typescript-config/  # Configuración compartida de TypeScript
│   └── eslint-config/    # Configuración compartida de ESLint
└── package.json       # Root package con workspaces
```

## 🎯 Decisión: Exportar Código Fuente vs. Código Compilado

### ❌ Por qué NO compilamos a `dist/`

En la mayoría de monorepos **internos** (no publicados a npm), exportar código compilado añade complejidad innecesaria:

#### Problemas con `dist/`:

1. **Build steps requeridos**:

   ```json
   {
     "exports": {
       ".": "./dist/index.js" // ❌ No existe hasta que corras build
     }
   }
   ```

   - Necesitas correr `pnpm build` antes de poder importar
   - Storybook falla si `dist/` no existe
   - Hot reload más lento (tienes que recompilar)

2. **TypeScript compilation**:

   ```json
   {
     "scripts": {
       "build": "tsc" // ❌ Requiere tsconfig con outDir
     }
   }
   ```

   - Necesitas configurar `outDir`, `declaration`, `declarationMap`
   - Los source maps se complican
   - Debugging más difícil (ves archivos compilados, no fuente)

3. **CSS separado**:

   ```json
   {
     "scripts": {
       "build:css": "tailwindcss ...", // ❌ Paso adicional
       "build:components": "tsc ..."
     }
   }
   ```

   - CSS necesita compilarse por separado
   - Gestión de rutas de imports más compleja

4. **Watch mode**:
   ```bash
   # ❌ Necesitas múltiples procesos en watch mode
   pnpm --filter @capsule/ui dev:css &
   pnpm --filter @capsule/ui dev:components &
   pnpm --filter docs dev
   ```

### ✅ Por qué exportamos código fuente

```json
{
  "exports": {
    ".": "./src/index.ts", // ✅ Siempre existe
    "./components/*": "./src/components/*/index.ts"
  }
}
```

#### Ventajas:

1. **Sin build steps**:
   - Las apps que consumen (`docs`, `web`) ya tienen bundlers (Vite, Next.js)
   - Esos bundlers compilan `.tsx` de forma nativa
   - Hot reload instantáneo

2. **Mejor DX (Developer Experience)**:
   - Haces cambios en `packages/ui/src/button.tsx`
   - Storybook recarga automáticamente
   - Sin pasos intermedios

3. **TypeScript directo**:
   - El IDE resuelve tipos directamente desde `.tsx`
   - Go to definition lleva al código fuente, no a `.d.ts`
   - Mejor debugging

4. **CSS integrado**:
   - Tailwind se procesa en la app final
   - Un solo paso de compilación
   - Tree-shaking automático de CSS no usado

## 🔧 Configuración de Tailwind CSS v3

Usamos Tailwind CSS v3 por su estabilidad, excelente soporte para CVA (Class Variance Authority), y ecosistema maduro.

### Arquitectura del sistema

```
packages/tailwind-config/
├── tailwind.config.js    # Configuración compartida (colores, fonts, etc.)
└── base.css              # Estilos base + utilidades personalizadas

apps/docs/ (o cualquier app)
├── tailwind.config.ts    # Extiende configuración base
├── postcss.config.js     # PostCSS + Autoprefixer
└── src/
    └── input.css         # Importa base.css
```

### Configuración en una app

#### 1. Instalar dependencias

```json
{
  "devDependencies": {
    "@capsule/tailwind-config": "workspace:*",
    "tailwindcss": "^3.4.17",
    "postcss": "^8.5.3",
    "autoprefixer": "^10.4.20"
  }
}
```

#### 2. Configuración de Tailwind

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import baseConfig from "@capsule/tailwind-config";

export default {
  ...baseConfig,
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}", // Escanea componentes
  ],
} satisfies Config;
```

#### 3. PostCSS

```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### 4. Importar estilos

```css
/* src/input.css */
@import "@capsule/tailwind-config/base.css";

@theme {
  --color-primary-500: #2c2c2c;
  /* ... más tokens */
}
```

```ts
// apps/docs/tailwind.config.ts (opcional, para content scanning)
export default {
  content: ["./src/**/*.{ts,tsx,mdx}", "../../packages/ui/src/**/*.{ts,tsx}"],
};
```

## 🎨 Flujo de Design Tokens

```
@capsule/tailwind-config
    ↓ (shared-styles.css)
    ↓ @theme { --color-primary-500: #2C2C2C }
    ↓
@capsule/ui
    ↓ (tokens.css re-exporta)
    ↓ @import "@capsule/tailwind-config"
    ↓
apps/docs & apps/web
    ↓ (input.css importa)
    ↓ @import "@capsule/tailwind-config"
    ↓
    ↓ (Vite/Next.js compila)
    ↓
output.css (CSS final con todos los tokens)
```

**Ventajas de este flujo:**

1. **Single Source of Truth**: Tokens solo en `tailwind-config`
2. **DRY**: No duplicamos definiciones
3. **Centralizado**: Cambias un token, se actualiza en todas las apps
4. **Type-safe**: CSS variables consistentes en todo el monorepo

## 📝 Cuándo SÍ compilar a `dist/`

Compila a `dist/` cuando:

1. **Publicas a npm**:

   ```json
   {
     "name": "@your-company/design-system",
     "publishConfig": {
       "access": "public"
     },
     "main": "./dist/index.js"
   }
   ```

   - Usuarios externos no tienen tu setup de monorepo
   - Necesitan archivos listos para usar

2. **Targets antiguos**:

   ```json
   {
     "target": "es5" // Para navegadores legacy
   }
   ```

   - Si necesitas soportar IE11, etc.

3. **Optimización extrema**:
   - Pre-minificación
   - Dead code elimination
   - Pero generalmente el bundler de la app lo hace mejor

## 🚀 Cuándo usar cada enfoque

### Exportar fuente (✅ nuestro caso):

- Monorepo interno
- Apps modernas (Next.js, Vite, Remix)
- Equipos pequeños/medianos
- Desarrollo rápido

### Exportar `dist/` (para otros casos):

- Librería pública en npm
- Necesitas soportar múltiples entornos
- Builds optimizados críticos
- Equipos grandes con CI/CD complejo

## 🔍 Debugging Tips

Si encuentras errores:

1. **"Cannot find module '@capsule/ui'"**:

   ```bash
   # Verifica que el package.json tenga exports correctos
   pnpm --filter docs add @capsule/ui
   ```

2. **"Tailwind classes not working"**:

   ```bash
   # Asegúrate que content escanea los archivos correctos
   # apps/docs/tailwind.config.ts
   content: ['../../packages/ui/src/**/*.{ts,tsx}']
   ```

3. **"Module not found: Can't resolve 'react'"**:
   ```bash
   # Asegúrate que react está en dependencies, no devDependencies
   cd packages/ui
   pnpm add react react-dom
   ```

## 📚 Referencias

- [Turborepo Internal Packages](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/v4-beta)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
