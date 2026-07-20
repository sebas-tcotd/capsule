# Capsule - Documentación del Proyecto

**Generado:** 2026-01-17
**Versión:** 1.0.0
**Tipo:** Monorepo (TurboRepo + pnpm workspaces)

---

## 📋 Índice de Documentación

Este es el punto de entrada principal para toda la documentación del proyecto Capsule. Aquí encontrarás enlaces organizados a todos los documentos generados automáticamente y documentación existente.

---

## 🎯 Quick Start - Documentos Esenciales

Para nuevos desarrolladores o para refrescar el conocimiento del proyecto:

1. **[Project Overview](./project-overview.md)** - Resumen ejecutivo del proyecto
2. **[Technology Stack](./technology-stack.md)** - Stack tecnológico completo por parte
3. **[UI Component Inventory](./ui-component-inventory.md)** - 13 componentes del design system

---

## 📁 Estructura del Proyecto

### Tipo de Repositorio

**Monorepo** con 7 partes (2 apps, 5 packages)

### Quick Reference

| Aspecto             | Valor                                 |
| ------------------- | ------------------------------------- |
| **Tipo**            | Monorepo                              |
| **Lenguaje**        | TypeScript 5.9.2                      |
| **Framework**       | Next.js 15.5.6 + React 19.1.1         |
| **Monorepo Tool**   | TurboRepo 2.5.8                       |
| **Package Manager** | pnpm 9.0.0                            |
| **Design Pattern**  | Atomic Design (UI) + DDD (Domain)     |
| **Testing**         | Vitest + Playwright + Testing Library |

### Partes del Proyecto

#### Apps (2)

1. **apps/web** - Next.js 15 App Router, aplicación principal
2. **apps/docs** - Storybook 9 para documentación de componentes

#### Packages (5)

3. **packages/ui** - 13 componentes atómicos (Atomic Design)
4. **packages/domain** - Lógica de dominio DDD (placeholder)
5. **packages/eslint-config** - Configuración de linting compartida
6. **packages/tailwind-config** - Configuración de estilos compartida
7. **packages/typescript-config** - Configuración de TypeScript compartida

---

## 📖 Documentación Generada

### Análisis del Proyecto

- **[Project Overview](./project-overview.md)**
  Resumen ejecutivo, estructura del repositorio, estado de implementación, y roadmap

- **[Technology Stack](./technology-stack.md)**
  Stack tecnológico completo con análisis por parte, versiones, patrones arquitectónicos, y recomendaciones

- **[UI Component Inventory](./ui-component-inventory.md)**
  Documentación exhaustiva de los 13 componentes atómicos del design system con props, variantes, ejemplos, y mejores prácticas

- **[Project Scan Report](./project-scan-report.json)**
  Estado del workflow de documentación (metadatos técnicos)

---

## 📚 Documentación Existente

### Nivel Raíz del Proyecto

- **[README.md](../README.md)** - Introducción general al proyecto
- **[ARCHITECTURE.md](../ARCHITECTURE.md)** - Arquitectura del proyecto
- **[SETUP.md](archive/SETUP.md)** - Instrucciones de configuración
- **[FAQ.md](archive/FAQ.md)** - Preguntas frecuentes
- **[TROUBLESHOOTING.md](../TROUBLESHOOTING.md)** - Solución de problemas comunes

### Por Aplicación

- **[apps/web/README.md](../apps/web/README.md)** - Documentación de la app web Next.js
- **[apps/docs/README.md](../apps/docs/README.md)** - Documentación de Storybook

### Por Package

#### packages/ui

- **[packages/ui/README.md](../packages/ui/README.md)** - Introducción al design system
- **[packages/ui/STRUCTURE.md](../packages/ui/STRUCTURE.md)** - Estructura de componentes
- **[packages/ui/EXPORTS.md](../packages/ui/EXPORTS.md)** - Sistema de exports
- **[packages/ui/TESTING.md](../packages/ui/TESTING.md)** - Guía de testing
- **[packages/ui/CONTRIBUTING.md](../packages/ui/CONTRIBUTING.md)** - Guía para contribuir

#### Otras configuraciones

- **[packages/eslint-config/README.md](../packages/eslint-config/README.md)**
- **[packages/tailwind-config/README.md](../packages/tailwind-config/README.md)**

### Docker & DevOps

- **[docker/README.md](../docker/README.md)** - Configuración de Docker

---

## 🚀 Getting Started

### Para Nuevos Desarrolladores

**1. Entender el Proyecto**

- Lee [Project Overview](./project-overview.md) para contexto general
- Revisa [Technology Stack](./technology-stack.md) para comprender el stack
- Explora [UI Component Inventory](./ui-component-inventory.md) para conocer componentes disponibles

**2. Setup Local**

- Sigue las instrucciones en [SETUP.md](archive/SETUP.md)
- Revisa [TROUBLESHOOTING.md](../TROUBLESHOOTING.md) si encuentras problemas

**3. Desarrollo**

- Lee [CONTRIBUTING.md](../packages/ui/CONTRIBUTING.md) para guías de contribución
- Explora [Storybook](../apps/docs) para ver componentes interactivos
- Ejecuta tests con las guías en [TESTING.md](../packages/ui/TESTING.md)

### Comandos Rápidos

```bash
# Instalación
pnpm install

# Development (todas las apps)
pnpm dev

# Solo web app
pnpm --filter web dev

# Solo Storybook
pnpm --filter docs dev

# Build
pnpm build

# Testing
pnpm --filter ui test

# Linting
pnpm lint

# Formatting
pnpm format
```

---

## 🏗️ Arquitectura del Proyecto

### Patrón Principal: Clean Architecture + DDD

```
apps/web (Next.js)
    ↓
packages/domain (DDD)
    ↓
Infrastructure Layer (TBD)
```

**Estado Actual:**

- ✅ apps/web: Boilerplate configurado
- ⚠️ packages/domain: Estructura preparada, sin implementación
- ❌ Infrastructure: Pendiente

### Design System: Atomic Design

```
packages/ui
├── atoms/          ✅ 13 componentes
├── molecules/      ⚠️ Pendiente
└── organisms/      ⚠️ Pendiente
```

**Componentes Disponibles:**
Avatar, Badge, Button, Checkbox, Divider, IconButton, Input, Link, Radio, Skeleton, Spinner, Switch, Tag

---

## 📊 Estado del Proyecto

### ✅ Implementado (Alta Prioridad)

| Área                  | Estado  | Descripción                                |
| --------------------- | ------- | ------------------------------------------ |
| Monorepo Setup        | ✅ 100% | TurboRepo configurado y funcional          |
| TypeScript            | ✅ 100% | Configuración estricta en toda la codebase |
| Design System - Atoms | ✅ 100% | 13 componentes atómicos completos          |
| Testing Setup         | ✅ 100% | Vitest + Playwright + Testing Library      |
| Storybook             | ✅ 100% | Documentación interactiva configurada      |
| Linting & Formatting  | ✅ 100% | ESLint + Prettier + Husky hooks            |
| Next.js Setup         | ✅ 100% | App Router configurado                     |

### 🚧 En Progreso

| Área                      | Estado | Descripción                       |
| ------------------------- | ------ | --------------------------------- |
| Design System - Molecules | 🚧 0%  | Por implementar componiendo atoms |
| Design System - Organisms | 🚧 0%  | Por implementar                   |
| Domain Logic              | 🚧 0%  | Estructura lista, sin entities    |

### ❌ Pendiente (Próximos Pasos)

| Área             | Prioridad | Descripción                            |
| ---------------- | --------- | -------------------------------------- |
| Backend/API      | 🔴 Alta   | Next.js API Routes o servidor separado |
| Database         | 🔴 Alta   | Schema design + ORM (Prisma/Drizzle)   |
| Authentication   | 🔴 Alta   | Next-Auth o similar                    |
| Core Features    | 🔴 Alta   | Guardarropa, Outfits, Sugerencias      |
| IA Integration   | 🟡 Media  | Reconocimiento de prendas              |
| State Management | 🟡 Media  | Zustand/Jotai si es necesario          |
| PWA              | 🟢 Baja   | Progressive Web App                    |
| i18n             | 🟢 Baja   | Internacionalización                   |

---

## 🎨 Design System

### 13 Componentes Atómicos Disponibles

**Input & Forms (5):**

- Button, Input, Checkbox, Radio, Switch

**Display & Feedback (4):**

- Avatar, Badge, Tag, Skeleton

**Navigation (1):**

- Link

**Layout (1):**

- Divider

**Loading (1):**

- Spinner

**Utility (1):**

- IconButton

**Documentación Completa:** Ver [UI Component Inventory](./ui-component-inventory.md)

### Uso del Design System

```tsx
// Import desde index general
import { Button, Input, Avatar } from "@capsule/ui";

// Import de atom específico
import { Button } from "@capsule/ui/atoms/Button";

// Import de utilities
import { cn } from "@capsule/ui/utils";
```

**Storybook:** `pnpm --filter docs dev` → http://localhost:6006

---

## 🧪 Testing

### Setup Completo

- **Unit Testing:** Vitest 3.2.4
- **E2E Testing:** Playwright 1.56.1
- **Test Utils:** Testing Library 16.3.0
- **Accessibility:** axe-core (Storybook addon)

### Ejecutar Tests

```bash
# Unit tests
pnpm --filter ui test

# Con UI
pnpm --filter ui test:ui

# Con coverage
pnpm --filter ui test:coverage

# Storybook tests
pnpm --filter docs test
```

**Documentación:** Ver [TESTING.md](../packages/ui/TESTING.md)

---

## 🔧 Tecnologías Clave

### Frontend Stack

| Tecnología               | Versión      | Uso                |
| ------------------------ | ------------ | ------------------ |
| Next.js                  | 15.5.6       | App framework      |
| React                    | 19.1.1       | UI library         |
| TypeScript               | 5.9.2        | Type safety        |
| Tailwind CSS             | 4.x / 3.4.17 | Styling            |
| class-variance-authority | 0.7.1        | Component variants |

### Development Tools

| Tecnología | Versión | Uso                    |
| ---------- | ------- | ---------------------- |
| TurboRepo  | 2.5.8   | Monorepo orchestration |
| pnpm       | 9.0.0   | Package management     |
| Vite       | 7.1.7   | Build tool (Storybook) |
| Turbopack  | -       | Build tool (Next.js)   |

### Quality & Testing

| Tecnología | Versión | Uso             |
| ---------- | ------- | --------------- |
| Vitest     | 3.2.4   | Unit testing    |
| Playwright | 1.56.1  | E2E testing     |
| ESLint     | 9.x     | Linting         |
| Prettier   | 3.6.2   | Code formatting |
| Husky      | 9.1.7   | Git hooks       |

**Stack Completo:** Ver [Technology Stack](./technology-stack.md)

---

## 🗺️ Roadmap Recomendado

### Fase 1: Foundations (Actual - Sprint 1-2)

- ✅ Setup de monorepo
- ✅ Design system atoms
- 🚧 Molecules y Organisms
- 🚧 Domain entities (User, Garment, Outfit)

### Fase 2: Core Infrastructure (Sprint 3-5)

- ❌ Backend/API setup
- ❌ Database schema + migrations
- ❌ Authentication
- ❌ State management

### Fase 3: Core Features (Sprint 6-10)

- ❌ User onboarding
- ❌ Wardrobe management (CRUD)
- ❌ Outfit creation
- ❌ Basic recommendations

### Fase 4: AI Integration (Sprint 11-15)

- ❌ Image upload + processing
- ❌ Garment recognition
- ❌ AI-powered suggestions

### Fase 5: Polish & Scale (Sprint 16+)

- ❌ PWA capabilities
- ❌ Performance optimization
- ❌ Analytics
- ❌ i18n

---

## 📝 Convenciones del Proyecto

### Commits

- Formato: Conventional Commits
- Linting: commitlint configurado
- Hook: pre-commit con lint-staged

### Code Style

- Linting: ESLint 9.x
- Formatting: Prettier 3.6.2
- Pre-commit: Automático con Husky

### TypeScript

- Modo strict habilitado
- No implicit any
- Type checking en CI

### Testing

- Cobertura mínima: TBD
- Tests obligatorios para componentes UI
- E2E para flujos críticos

---

## 🤝 Contribución

Para contribuir al proyecto:

1. Lee [CONTRIBUTING.md](../packages/ui/CONTRIBUTING.md)
2. Revisa [UI Component Inventory](./ui-component-inventory.md) para patrones
3. Sigue las convenciones de código
4. Escribe tests
5. Documenta en Storybook

---

## 📞 Soporte

### Documentación

| Tema                 | Documento                                   |
| -------------------- | ------------------------------------------- |
| Problemas comunes    | [TROUBLESHOOTING.md](../TROUBLESHOOTING.md) |
| Preguntas frecuentes | [FAQ.md](archive/FAQ.md)                    |
| Setup inicial        | [SETUP.md](archive/SETUP.md)                |
| Arquitectura         | [ARCHITECTURE.md](../ARCHITECTURE.md)       |

### Recursos

- **Storybook:** http://localhost:6006 (después de `pnpm --filter docs dev`)
- **App Web:** http://localhost:3000 (después de `pnpm --filter web dev`)

---

## 📈 Métricas del Proyecto

**Código:**

- Lenguajes: TypeScript (100%)
- Total de Componentes UI: 13 atoms
- Cobertura de Tests: TBD

**Estado:**

- Fase: Inicial/Temprana
- Features Implementadas: 0%
- Infraestructura: 80%

---

## 🔍 Navegación Rápida

### Por Rol

**Frontend Developer:**

1. [UI Component Inventory](./ui-component-inventory.md)
2. [packages/ui/STRUCTURE.md](../packages/ui/STRUCTURE.md)
3. Storybook (local)

**Backend Developer:**

1. [ARCHITECTURE.md](../ARCHITECTURE.md)
2. [Project Overview](./project-overview.md) (sección Domain)
3. [docker/README.md](../docker/README.md)

**Full Stack Developer:**

1. [Technology Stack](./technology-stack.md)
2. [Project Overview](./project-overview.md)
3. [SETUP.md](archive/SETUP.md)

**Product/PM:**

1. [Project Overview](./project-overview.md)
2. [README.md](../README.md)
3. [FAQ.md](archive/FAQ.md)

---

## ✨ Conclusión

Capsule está en **fase inicial** con una **base técnica robusta** lista para desarrollo activo de features. El design system está completado a nivel de atoms, y la infraestructura de testing, linting, y desarrollo está configurada y funcional.

**Próximo paso crítico:** Implementar la lógica de dominio y comenzar con las features core del producto.

---

**Última Actualización:** 2026-01-17
**Generado por:** BMAD Document Project Workflow
**Versión:** 1.0.0
