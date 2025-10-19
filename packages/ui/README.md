# @capsule/ui

Biblioteca de componentes React para el design system Capsule.

## 🎨 Filosofía

Capsule combina sofisticación profesional con diseño centrado en el ser humano:

- **Charcoal (#2C2C2C)** - Color primario que representa profesionalismo y elegancia moderna
- **Terracotta (#C67A5C)** - Color de acento que aporta calidez y accesibilidad
- **Espaciado Balanceado** - Padding generoso para interfaces cómodas y espaciosas
- **Tipografía Inter** - Fuente limpia y altamente legible para óptima legibilidad

## 🏗️ Arquitectura

Seguimos **Atomic Design** para una arquitectura escalable de componentes:

### Atoms (Átomos)

Bloques de construcción básicos: botones, inputs, badges, iconos. Primitivos de UI puros sin lógica de negocio.

### Molecules (Moléculas)

Combinaciones de átomos trabajando juntos: campos de formulario (label + input + error), cards, search bars.

### Organisms (Organismos)

Secciones complejas de UI: headers, tablas de datos, menús de navegación.

## 📦 Instalación

Este es un paquete interno del monorepo. Las apps lo consumen vía workspace protocol:

```json
{
  "dependencies": {
    "@capsule/ui": "workspace:*"
  }
}
```

## 🚀 Uso

### Importar componentes

**Átomos (componentes simples):**

```tsx
import { Button, Badge } from "@capsule/ui";

function App() {
  return (
    <>
      <Button variant="primary" size="md">
        Click me
      </Button>
      <Badge>New</Badge>
    </>
  );
}
```

**Moléculas/Organismos (compound components):**

```tsx
import { Card } from "@capsule/ui";

function App() {
  return (
    <Card>
      <Card.Header>
        <h2>Title</h2>
      </Card.Header>
      <Card.Content>
        <p>Card content goes here</p>
      </Card.Content>
      <Card.Footer>
        <Button>Action</Button>
      </Card.Footer>
    </Card>
  );
}
```

### Importar estilos

En tu CSS principal (Next.js, Remix, etc.):

```css
/* app/globals.css */
@import "@capsule/ui/styles/tokens.css";
```

Esto importará automáticamente los tokens de `@capsule/tailwind-config`.

## 🎯 Componentes Disponibles

### Atoms

Componentes básicos e independientes:

- **Button** - 5 variantes (primary, secondary, outline, ghost, danger), 3 tamaños, loading state
- _Badge, Icon, Input, Avatar - próximamente..._

### Molecules

Compound components con API namespace:

- _Card, FormField, SearchBar - próximamente..._

**Nota:** Los componentes de moléculas y organismos siguen el patrón de compound components usando `Object.assign` para proveer una API con namespace (ej: `<Card.Header />`). Ver `CONTRIBUTING.md` para más detalles.

## 🛠️ Desarrollo

### Estructura de carpetas

```
src/
├── components/
│   ├── atoms/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.stories.tsx (en apps/docs)
│   │       └── Button.test.tsx
│   ├── molecules/
│   └── organisms/
├── styles/
│   └── tokens.css (re-exporta @capsule/tailwind-config)
├── utils/
│   └── cn.ts
└── index.ts
```

### Crear un nuevo componente

1. Usa la estructura recomendada en `CONTRIBUTING.md`
2. Crea el componente en la carpeta correspondiente (atoms/molecules/organisms)
3. Usa `cn()` para merge de clases de Tailwind
4. Usa CVA para variantes si es necesario
5. Exporta desde `src/index.ts`
6. Crea stories en `apps/docs/src/stories/`

### Scripts

```bash
# Type checking
pnpm check-types

# Linting
pnpm lint
```

## 📖 Documentación

La documentación completa está disponible en Storybook:

```bash
cd apps/docs
pnpm dev
```

## 🔗 Dependencias

- **React 19** - Últimas características de React
- **Class Variance Authority** - Gestión de variantes basada en clases
- **clsx + tailwind-merge** - Merge óptimo de clases de Tailwind
- **Lucide React** - Iconos
- **@capsule/tailwind-config** - Design tokens compartidos

## 🧪 Testing

Este paquete usa Vitest + React Testing Library (configuración pendiente).

## 📝 Notas

- Este paquete **exporta código fuente** (`.tsx`), no código compilado
- Tailwind CSS se procesa en las apps que lo consumen
- Los componentes son tree-shakeable por defecto
