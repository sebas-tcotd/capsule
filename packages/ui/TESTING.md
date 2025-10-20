# Testing Guide

Este documento describe cómo escribir y ejecutar tests en el paquete UI del sistema de diseño Capsule.

## Stack de Testing

- **Vitest** - Framework de testing rápido y moderno
- **@testing-library/react** - Utilidades para testing de React
- **@testing-library/user-event** - Simulación de interacciones de usuario
- **@testing-library/jest-dom** - Matchers personalizados para assertions
- **jsdom** - Entorno DOM simulado

## Comandos Disponibles

```bash
# Modo watch (desarrollo)
pnpm test

# Interfaz visual
pnpm test:ui

# Ejecutar una vez
pnpm test:run

# Con coverage
pnpm test:coverage
```

## Estructura de Tests

Los tests deben ubicarse junto al componente que están probando:

```
src/components/atoms/Button/
├── Button.tsx
├── Button.test.tsx  ← Aquí van los tests
├── index.ts
```

## Patrón de Testing

### Importaciones Básicas

```tsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentName } from "./ComponentName";
```

### Estructura de Describe Blocks

Organiza tus tests en bloques lógicos:

```tsx
describe("ComponentName", () => {
  describe("Rendering", () => {
    // Tests de renderizado básico
  });

  describe("Variants", () => {
    // Tests de variantes (si aplica)
  });

  describe("Sizes", () => {
    // Tests de tamaños (si aplica)
  });

  describe("User Interactions", () => {
    // Tests de eventos y clicks
  });

  describe("Disabled State", () => {
    // Tests de estado disabled
  });

  describe("Ref Forwarding", () => {
    // Tests de refs (si usa forwardRef)
  });

  describe("Accessibility", () => {
    // Tests de accesibilidad
  });
});
```

### Ejemplo Completo

```tsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole("button", { name: "Click me" }),
      ).toBeInTheDocument();
    });

    it("renders with primary variant by default", () => {
      render(<Button data-testid="button">Primary</Button>);
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-primary-500");
    });
  });

  describe("User Interactions", () => {
    it("handles click events", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole("button", { name: "Click me" });
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });
});
```

## Best Practices

### 1. Usa Queries Semánticas

Prefiere queries por rol/texto sobre `data-testid`:

```tsx
// ✅ Bueno
screen.getByRole("button", { name: "Submit" });
screen.getByText("Loading...");
screen.getByLabelText("Email");

// ⚠️ Usar solo cuando sea necesario
screen.getByTestId("complex-component");
```

### 2. Simula Eventos de Usuario

Usa `userEvent` en lugar de `fireEvent`:

```tsx
// ✅ Bueno
const user = userEvent.setup();
await user.click(button);
await user.type(input, "Hello");

// ❌ Evitar
fireEvent.click(button);
```

### 3. Assertions Específicas

```tsx
// ✅ Bueno
expect(button).toBeDisabled();
expect(button).toHaveClass("bg-primary-500");
expect(button).toHaveAttribute("type", "submit");

// ❌ Evitar
expect(button.disabled).toBe(true);
```

### 4. Test de Accesibilidad

Siempre verifica roles y atributos ARIA:

```tsx
it("has correct role", () => {
  render(<Button>Accessible</Button>);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("supports aria-label", () => {
  render(<Button aria-label="Close">X</Button>);
  expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
});
```

### 5. Test de Variantes

Para componentes con CVA, test todas las variantes:

```tsx
describe("Variants", () => {
  it("renders primary variant", () => {
    render(
      <Button variant="primary" data-testid="button">
        Primary
      </Button>,
    );
    expect(screen.getByTestId("button")).toHaveClass("bg-primary-500");
  });

  it("renders secondary variant", () => {
    render(
      <Button variant="secondary" data-testid="button">
        Secondary
      </Button>,
    );
    expect(screen.getByTestId("button")).toHaveClass("bg-accent-500");
  });
});
```

## Configuración de ESLint

Los archivos de test tienen reglas de ESLint relajadas automáticamente:

- `@typescript-eslint/no-unsafe-*` - Desactivado
- `@typescript-eslint/explicit-function-return-type` - Desactivado
- `@typescript-eslint/no-unnecessary-type-assertion` - Desactivado

Esto permite escribir tests sin warnings innecesarios.

## VSCode Integration

La extensión de Vitest para VSCode está configurada automáticamente.

### Extensión Recomendada

Instala la extensión **Vitest** (`vitest.explorer`) para:

- Ver tests en la sidebar
- Ejecutar tests individuales
- Ver resultados en tiempo real
- Debug de tests

### Configuración

La configuración de Vitest en VSCode está en `.vscode/settings.json`:

```json
{
  "vitest.configSearchPatternInclude": "**/*{vite,vitest}*.config*.{ts,js,mjs,cjs,cts,mts}",
  "vitest.shellType": "child_process",
  "vitest.applyDiagnostic": true,
  "vitest.experimentalStaticAstCollect": true
}
```

## Coverage

Para generar un reporte de coverage:

```bash
pnpm test:coverage
```

El reporte se generará en:

- **Terminal**: Resumen de coverage con tabla de estadísticas
- **HTML**: `coverage/index.html` - Reporte visual interactivo completo
- **JSON**: `coverage/coverage-final.json` - Datos en formato JSON para herramientas CI/CD

### Ver el reporte HTML

Después de ejecutar `pnpm test:coverage`, abre el archivo HTML en tu navegador:

```bash
# macOS
open coverage/index.html

# Linux
xdg-open coverage/index.html

# Windows
start coverage/index.html
```

### Metas de Coverage

- **Componentes Atoms**: >90%
- **Componentes Molecules**: >85%
- **Componentes Organisms**: >80%

### Coverage actual

Ejecuta `pnpm test:coverage` para ver el estado actual. Ejemplo de output:

```
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |   40.92 |    89.28 |     100 |   40.92 |
 ...s/atoms/Button |     100 |      100 |     100 |     100 |
  Button.tsx       |     100 |      100 |     100 |     100 |
 ...ts/atoms/Input |     100 |     92.3 |     100 |     100 |
  Input.tsx        |     100 |     92.3 |     100 |     100 | 140
-------------------|---------|----------|---------|---------|-------------------
```

Los componentes **Button** e **Input** tienen excelente coverage (100% statements, functions y lines).

## Troubleshooting

### Tests Fallan en CI pero Pasan Local

Asegúrate de limpiar mocks entre tests:

```tsx
import { afterEach } from "vitest";

afterEach(() => {
  vi.clearAllMocks();
});
```

### Warnings de ESLint en Tests

Verifica que el archivo tenga extensión `.test.tsx` o `.spec.tsx`.

### Vitest No Detecta Cambios

Reinicia el proceso de Vitest:

1. Cierra Vitest
2. Ejecuta `pnpm test` de nuevo

## Referencias

- [Vitest Docs](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [User Event Docs](https://testing-library.com/docs/user-event/intro)
- [jest-dom Matchers](https://github.com/testing-library/jest-dom)
