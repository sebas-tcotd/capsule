# @capsule/tailwind-config

Configuración compartida de Tailwind CSS v3 para el design system Capsule.

## 📦 Contenido

- **Design Tokens**: Colores, tipografía, espaciado, radius, sombras
- **Base Styles**: Estilos globales para elementos HTML (base.css)
- **Utility Classes**: Clases de utilidad personalizadas
- **Tailwind Config**: Configuración extendible (tailwind.config.js)

## 🎨 Design Tokens

### Colores

- **Primary (Charcoal)**: `#2C2C2C` - Profesionalismo y elegancia moderna
- **Accent (Terracotta)**: `#C67A5C` - Calidez y accesibilidad
- **Neutral**: Escala de grises balanceada
- **Semantic**: Success, Warning, Error, Info

### Tipografía

- **Font Family**: Inter (sans), JetBrains Mono (mono)
- **Font Sizes**: xs, sm, base, lg, xl, 2xl-7xl con line heights optimizados

### Spacing

- **Base Grid**: 8px (usando valores por defecto de Tailwind)
- **Densidad**: Balanced-Spacious

### Radius

- **Escala**: sm (0.375rem), DEFAULT (0.5rem), md, lg, xl, 2xl, 3xl, full

### Shadows

- **Escala**: sm, DEFAULT, md, lg, xl, 2xl con opacidades sutiles

## 📖 Uso

### Configuración en apps

#### 1. Instalar el package

```json
{
  "dependencies": {
    "@capsule/tailwind-config": "workspace:*"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.17",
    "postcss": "^8.5.3",
    "autoprefixer": "^10.4.20"
  }
}
```

#### 2. Extender la configuración

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";
import baseConfig from "@capsule/tailwind-config";

export default {
  ...baseConfig,
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}", // Si usas @capsule/ui
  ],
} satisfies Config;
```

#### 3. Importar estilos base

```css
/* app/globals.css o src/input.css */
@import "@capsule/tailwind-config/base.css";
```

#### 4. Configurar PostCSS

```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Con `@capsule/ui`

Los componentes de `@capsule/ui` ya usan estos tokens automáticamente a través de las clases de Tailwind. Solo necesitas:

1. Extender la configuración de Tailwind (paso 2)
2. Importar los estilos base (paso 3)
3. Asegurarte de que el `content` incluya `packages/ui/src/**/*.{ts,tsx}`

## 🔧 Personalización

### Extender colores

```typescript
// tailwind.config.ts
import baseConfig from "@capsule/tailwind-config";

export default {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      colors: {
        ...baseConfig.theme?.extend?.colors,
        brand: {
          500: "#your-color",
        },
      },
    },
  },
};
```

### Agregar utilidades personalizadas

```css
/* tus-estilos.css */
@import "@capsule/tailwind-config/base.css";

@layer utilities {
  .your-custom-utility {
    /* ... */
  }
}
```
