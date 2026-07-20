# Arquitectura del Monorepo Capsule

Este documento explica las decisiones arquitectónicas del monorepo y por qué están estructurados de esta manera.

> Para la decisión de tokens/Tailwind (v3 vs. el enfoque CSS-first v4 que se probó y se revirtió), ver [`docs/decisions/0001-tailwind-v3-vs-v4-tokens.md`](./docs/decisions/0001-tailwind-v3-vs-v4-tokens.md). Este documento cubre únicamente la decisión de exportar código fuente vs. compilado, que sigue vigente.

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

Para errores comunes ("Cannot find module '@capsule/ui'", clases de Tailwind que no aplican, etc.), ver [`TROUBLESHOOTING.md`](./TROUBLESHOOTING.md).

## 📚 Referencias

- [Turborepo Internal Packages](https://turbo.build/repo/docs/handbook/sharing-code/internal-packages)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
