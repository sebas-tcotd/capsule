# Package Exports Guide

Este documento explica cómo importar componentes y utilidades del paquete `@capsule/ui`.

## 📦 Estrategia de Exports

El paquete está configurado con **múltiples puntos de entrada** para optimizar tree-shaking y performance:

```json
{
  "exports": {
    ".": "./src/index.ts", // Barrel file (conveniencia)
    "./atoms/*": "./src/components/atoms/*/index.ts", // Imports directos de atoms
    "./molecules/*": "./src/components/molecules/*/index.ts",
    "./organisms/*": "./src/components/organisms/*/index.ts",
    "./utils": "./src/utils/index.ts", // Utilidades
    "./styles/*": "./src/styles/*" // Estilos
  }
}
```

## 🎯 Formas de Importar

### Opción 1: Import desde Barrel File (Conveniencia)

**Ventajas**: Fácil y rápido para prototipar
**Desventajas**: Puede afectar tree-shaking si el bundler no está bien configurado

```tsx
import { Button, Input, cn } from "@capsule/ui";

function MyComponent() {
  return (
    <div className={cn("container", "mx-auto")}>
      <Input placeholder="Email" />
      <Button>Submit</Button>
    </div>
  );
}
```

### Opción 2: Import Directo por Nivel Atómico (Recomendado) ⭐

**Ventajas**: Mejor tree-shaking, imports más explícitos, carga solo lo necesario
**Desventajas**: Imports ligeramente más largos

```tsx
import { Button } from "@capsule/ui/atoms/Button";
import { Input } from "@capsule/ui/atoms/Input";
import { cn } from "@capsule/ui/utils";

function MyComponent() {
  return (
    <div className={cn("container", "mx-auto")}>
      <Input placeholder="Email" />
      <Button>Submit</Button>
    </div>
  );
}
```

### Opción 3: Import de Tipos

Ambas opciones soportan importar tipos:

```tsx
// Desde barrel file
import type { ButtonProps, InputProps } from "@capsule/ui";

// Desde exports directos
import type { ButtonProps } from "@capsule/ui/atoms/Button";
import type { InputProps } from "@capsule/ui/atoms/Input";
```

## 📋 Ejemplos por Categoría

### Atoms

```tsx
// Button
import { Button } from "@capsule/ui/atoms/Button";
// o
import { Button } from "@capsule/ui";

// Input
import { Input } from "@capsule/ui/atoms/Input";
// o
import { Input } from "@capsule/ui";
```

### Molecules (Futuro)

```tsx
// Card
import { Card } from "@capsule/ui/molecules/Card";

// FormField
import { FormField } from "@capsule/ui/molecules/FormField";
```

### Organisms (Futuro)

```tsx
// Header
import { Header } from "@capsule/ui/organisms/Header";

// Navbar
import { Navbar } from "@capsule/ui/organisms/Navbar";
```

### Utilidades

```tsx
// Todas las utils
import { cn, createDisplayName } from "@capsule/ui/utils";

// Solo una util específica
import { cn } from "@capsule/ui/utils";
```

### Estilos

```tsx
// Base styles (si se necesitan en una app)
import "@capsule/ui/styles/base.css";
```

## 🚀 Mejores Prácticas

### 1. Usa Imports Directos en Producción

Para aplicaciones en producción, prefiere imports directos:

```tsx
// ✅ Mejor para producción
import { Button } from "@capsule/ui/atoms/Button";
import { Input } from "@capsule/ui/atoms/Input";
```

### 2. Usa Barrel File para Prototipos

Para prototipado rápido o demos, el barrel file es más conveniente:

```tsx
// ✅ Mejor para prototipos
import { Button, Input } from "@capsule/ui";
```

### 3. Importa Tipos Separadamente

Usa `import type` para mejor tree-shaking:

```tsx
// ✅ Bueno
import { Button } from "@capsule/ui/atoms/Button";
import type { ButtonProps } from "@capsule/ui/atoms/Button";

// ⚠️ También funciona, pero menos explícito
import { Button, type ButtonProps } from "@capsule/ui/atoms/Button";
```

### 4. No Mezcles Estrategias en el Mismo Archivo

Mantén consistencia dentro de cada archivo:

```tsx
// ❌ Evitar mezclar
import { Button } from "@capsule/ui";
import { Input } from "@capsule/ui/atoms/Input";

// ✅ Mejor - consistente
import { Button } from "@capsule/ui/atoms/Button";
import { Input } from "@capsule/ui/atoms/Input";
```

## 📊 Comparación de Performance

| Método                                      | Bundle Size                       | Tree-shaking        | DX         | Recomendado para         |
| ------------------------------------------- | --------------------------------- | ------------------- | ---------- | ------------------------ |
| Barrel file (`@capsule/ui`)                 | Más grande si bundler no optimiza | Depende del bundler | ⭐⭐⭐⭐⭐ | Prototipos, demos        |
| Direct imports (`@capsule/ui/atoms/Button`) | Más pequeño                       | ⭐⭐⭐⭐⭐          | ⭐⭐⭐⭐   | Producción, apps grandes |

## 🔧 Configuración de TypeScript

Tu `tsconfig.json` debe tener configurado `moduleResolution: "bundler"` o `"node16"` para soportar los exports condicionales:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "resolveJsonModule": true
  }
}
```

## 📝 Ejemplos Reales

### Ejemplo 1: Formulario de Login

```tsx
import { Button } from "@capsule/ui/atoms/Button";
import { Input } from "@capsule/ui/atoms/Input";
import { cn } from "@capsule/ui/utils";
import type { FormEvent } from "react";

export function LoginForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // ...
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", "max-w-md")}>
      <Input type="email" placeholder="Email" fullWidth />
      <Input type="password" placeholder="Password" fullWidth />
      <Button type="submit" fullWidth>
        Login
      </Button>
    </form>
  );
}
```

### Ejemplo 2: Página de Prototipo

```tsx
// Para prototipos rápidos, usa el barrel file
import { Button, Input, cn } from "@capsule/ui";

export function PrototypePage() {
  return (
    <div className={cn("container", "mx-auto", "p-4")}>
      <Input placeholder="Quick prototype" />
      <Button>Test</Button>
    </div>
  );
}
```

## 🎯 Migración Futura

Cuando el paquete crezca, considera:

1. **Deprecar el barrel file** si el bundle size se vuelve un problema
2. **Agregar exports por categoría** (ej: `@capsule/ui/forms`, `@capsule/ui/navigation`)
3. **Proveer scripts de migración** para actualizar imports automáticamente

## 📚 Referencias

- [Node.js Package Exports](https://nodejs.org/api/packages.html#exports)
- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [Tree Shaking Best Practices](https://webpack.js.org/guides/tree-shaking/)
