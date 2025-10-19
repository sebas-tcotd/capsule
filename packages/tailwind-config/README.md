# @capsule/tailwind-config

Configuración compartida de Tailwind CSS v4 para el design system Capsule.

## 📦 Contenido

- **Design Tokens**: Colores, tipografía, espaciado, radius, sombras
- **Base Styles**: Estilos globales para elementos HTML
- **Utility Classes**: Clases de utilidad personalizadas

## 🎨 Design Tokens

### Colores

- **Primary (Charcoal)**: `#2C2C2C` - Profesionalismo y elegancia moderna
- **Accent (Terracotta)**: `#C67A5C` - Calidez y accesibilidad
- **Neutral**: Escala de grises balanceada
- **Semantic**: Success, Warning, Error, Info

### Tipografía

- **Font Family**: Inter (sans), JetBrains Mono (mono)
- **Escala**: Perfect Fourth (1.333 ratio)

### Spacing

- **Base Grid**: 8px
- **Densidad**: Balanced-Spacious

### Radius

- **Default**: 8px (moderately rounded)

## 📖 Uso

### En apps (Next.js, Remix, etc.)

```css
/* app/globals.css */
@import "@capsule/tailwind-config";
```

### En Storybook

```css
/* .storybook/preview.css */
@import "@capsule/tailwind-config";
```

### Con `@capsule/ui`

Los componentes de `@capsule/ui` ya usan estos tokens automáticamente.

## 🔧 Personalización

Si necesitas extender los tokens en una app específica:

```css
@import "@capsule/tailwind-config";

@theme {
  /* Tus tokens adicionales */
  --color-brand: #custom;
}
```
