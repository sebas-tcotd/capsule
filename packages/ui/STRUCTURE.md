# Estructura del Package @capsule/ui

Guía de cómo está organizado el paquete de componentes.

## 📁 Estructura de Carpetas

```
packages/ui/
├── src/
│   ├── components/          # Componentes React
│   │   ├── atoms/          # Componentes básicos
│   │   │   └── Button/
│   │   │       ├── Button.tsx
│   │   │       └── index.ts
│   │   ├── molecules/      # Combinaciones de atoms
│   │   └── organisms/      # Secciones complejas de UI
│   │
│   ├── styles/             # Estilos globales
│   │   └── tokens.css      # Re-exporta @capsule/tailwind-config
│   │
│   ├── utils/              # Utilidades
│   │   ├── cn.ts           # Merge de clases de Tailwind
│   │   └── index.ts
│   │
│   ├── tokens/             # TypeScript design tokens (opcional)
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   └── index.ts
│   │
│   └── index.ts            # Export principal
│
├── package.json
├── tsconfig.json
├── README.md
├── CONTRIBUTING.md
└── STRUCTURE.md (este archivo)
```

## 🎯 Convenciones de Nomenclatura

### Archivos

- **Componentes**: PascalCase - `Button.tsx`, `FormField.tsx`
- **Utilities**: camelCase - `cn.ts`, `formatDate.ts`
- **Estilos**: kebab-case - `tokens.css`, `base-styles.css`
- **Tipos**: PascalCase - `Button.types.ts` (si separas tipos)

### Carpetas

- **Componentes**: PascalCase - `Button/`, `FormField/`
- **Categorías**: lowercase - `atoms/`, `molecules/`, `organisms/`
- **Utilidades**: lowercase - `utils/`, `hooks/`

### Exports

```tsx
// ✅ Named exports (preferido)
export const Button = () => { ... };
export type ButtonProps = { ... };

// ❌ Default exports (evitar)
export default Button;
```

**Razón**: Named exports son más fáciles de tree-shake y refactorizar.

## 📝 Anatomía de un Componente

### Componente Básico (Atom)

```tsx
// src/components/atoms/Button/Button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../../utils/cn";

// 1. Definir variantes con CVA
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-accent-500 text-white hover:bg-accent-600",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

// 2. Definir tipos extendiendo props HTML + variantes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

// 3. Componente con forwardRef para acceso al DOM
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading, disabled, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";
```

### Index Export

```ts
// src/components/atoms/Button/index.ts
export { Button, type ButtonProps } from "./Button";
```

### Main Export

```ts
// src/index.ts
export { Button, type ButtonProps } from "./components/atoms/Button";
export { cn } from "./utils/cn";
```

## 🎨 Uso de Design Tokens

### En Componentes

```tsx
// ✅ Usa clases de Tailwind con tokens
className = "bg-primary-500 text-white";

// ❌ No uses valores hardcoded
className = "bg-[#2C2C2C] text-white";
```

### Clases Disponibles

Gracias a `@capsule/tailwind-config`, tienes acceso a:

```tsx
// Colores
bg-primary-{50-950}
bg-accent-{50-950}
bg-neutral-{50-950}
text-primary-{50-950}
border-primary-{50-950}

// Semantic
bg-success-{50,500,600,700}
bg-warning-{50,500,600,700}
bg-error-{50,500,600,700}
bg-info-{50,500,600,700}

// Typography
font-sans
font-mono
text-{xs,sm,base,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl}
leading-{none,tight,snug,normal,relaxed,loose}

// Radius
rounded-{sm,DEFAULT,md,lg,xl,2xl,3xl,full}

// Shadows
shadow-{sm,DEFAULT,md,lg,xl,2xl}

// Utilities personalizadas
text-primary   (text-neutral-900)
text-secondary (text-neutral-600)
text-muted     (text-neutral-400)
bg-background  (bg-neutral-50)
bg-surface     (bg-white)
focus-ring     (focus-visible:ring-2 ring-primary-500)
```

## 🔧 Utilidades

### cn() - Class Name Merge

```tsx
import { cn } from "@capsule/ui";

// Combina y deduplica clases de Tailwind
cn("px-2 py-1", "px-4")
// => "py-1 px-4" (px-4 override px-2)

// En componentes
<button className={cn(baseStyles, props.className)}>
```

**Cuándo usar**:

- Siempre que combines clases de Tailwind
- Al aceptar `className` como prop
- Con CVA para variantes

## 📊 Patrones de Composición

### Compound Components

```tsx
// src/components/molecules/Card/Card.tsx
export const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="p-6 border-b">{children}</div>
);

export const CardBody = ({ children }) => <div className="p-6">{children}</div>;

// src/components/molecules/Card/index.ts
export { Card, CardHeader, CardBody } from "./Card";

// Uso
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
</Card>;
```

### Polymorphic Components

```tsx
type ButtonAsButtonProps = ButtonProps & { as?: "button" };
type ButtonAsLinkProps = Omit<ButtonProps, keyof HTMLAnchorElement> &
  HTMLAnchorElement & { as: "a" };

export type PolymorphicButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

// Uso
<Button>Click</Button>  // button
<Button as="a" href="/about">Link</Button>  // link
```

## 🧪 Testing (Pendiente)

Cuando configuremos tests:

```
Button/
├── Button.tsx
├── Button.test.tsx     # Tests con Vitest
└── index.ts
```

```tsx
// Button.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
```

## 📖 Storybook

Las stories van en `apps/docs/src/stories/`, NO en el package:

```
apps/docs/src/stories/
├── atoms/
│   └── Button.stories.tsx
├── molecules/
└── organisms/
```

**Razón**: Separación de concerns - el package contiene lógica, docs contiene documentación.

## 🚀 Mejores Prácticas

1. **Un componente por archivo**: `Button.tsx` solo exporta `Button`
2. **Props explícitas**: Siempre tipifica props con interface/type
3. **forwardRef para elementos DOM**: Permite acceso a ref en componentes padres
4. **displayName**: Ayuda en debugging de React DevTools
5. **Spreads al final**: `{...props}` siempre al final para permitir overrides
6. **Clases con cn()**: Siempre usa `cn()` para combinar clases
7. **Variantes con CVA**: Para componentes con múltiples variantes
8. **Accesibilidad**: Siempre piensa en a11y (aria-\*, roles, semántica)

## ❌ Anti-patrones

```tsx
// ❌ Default exports
export default Button;

// ❌ Hardcoded colors
<button className="bg-[#2C2C2C]">

// ❌ Inline styles
<button style={{ backgroundColor: '#2C2C2C' }}>

// ❌ Sin tipos
export const Button = (props) => { ... }

// ❌ Lógica de negocio en atoms
export const Button = ({ userId, onSave }) => {
  const user = fetchUser(userId);  // ❌ No en atoms
}
```

## ✅ Checklist para Nuevo Componente

- [ ] Archivo en carpeta correcta (`atoms/`, `molecules/`, `organisms/`)
- [ ] Usa CVA para variantes si aplica
- [ ] Props tipificadas con TypeScript
- [ ] forwardRef si es elemento DOM
- [ ] displayName configurado
- [ ] Usa `cn()` para clases
- [ ] Solo usa tokens de `@capsule/tailwind-config`
- [ ] Exportado en `src/index.ts`
- [ ] Story creada en `apps/docs`
- [ ] (Futuro) Tests escritos
