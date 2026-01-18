# Capsule - Project Overview

**Generado:** 2026-01-17
**Tipo:** Monorepo (TurboRepo + pnpm workspaces)
**Estado:** 🟡 Fase Inicial - Infraestructura Robusta, Features Pendientes

---

## Resumen Ejecutivo

**Capsule** es una aplicación web de gestión de guardarropa con IA que permite a los usuarios:

- Registrar su guardarropa físico
- Reconocimiento automático de prendas mediante IA
- Sugerencias de qué prendas/accesorios adquirir
- Recomendaciones de combinaciones según preferencias

**Stack Principal:** Next.js 15 + React 19 + TypeScript + TurboRepo
**Patrón Arquitectónico:** Clean Architecture + Domain-Driven Design
**Design System:** Atomic Design con 13 componentes base

---

## Información del Proyecto

| Aspecto                     | Detalle                                   |
| --------------------------- | ----------------------------------------- |
| **Nombre**                  | Capsule                                   |
| **Propósito**               | Gestión inteligente de guardarropa con IA |
| **Tipo de Repositorio**     | Monorepo                                  |
| **Herramienta de Monorepo** | TurboRepo 2.5.8                           |
| **Package Manager**         | pnpm 9.0.0                                |
| **Lenguaje Principal**      | TypeScript 5.9.2                          |
| **Runtime**                 | Node.js >= 18                             |
| **Framework Frontend**      | Next.js 15.5.6 (App Router)               |
| **UI Library**              | React 19.1.1                              |
| **Styling**                 | Tailwind CSS 4.x                          |
| **Testing**                 | Vitest 3.2.4 + Playwright 1.56.1          |
| **Design System Docs**      | Storybook 9.1.13                          |

---

## Estructura del Repositorio

```
capsule/
├── apps/
│   ├── web/                    # Aplicación Next.js principal
│   └── docs/                   # Storybook del design system
├── packages/
│   ├── ui/                     # Biblioteca de componentes (Atomic Design)
│   ├── domain/                 # Lógica de dominio DDD (placeholder)
│   ├── eslint-config/          # Configuración compartida de ESLint
│   ├── tailwind-config/        # Configuración compartida de Tailwind
│   └── typescript-config/      # Configuración compartida de TypeScript
├── docker/                     # Configuración de Docker (Postgres)
├── docs/                       # Documentación del proyecto generada
├── .husky/                     # Git hooks
└── turbo.json                  # Configuración de TurboRepo
```

---

## Partes del Proyecto

### 1. apps/web - Aplicación Web Principal

**Framework:** Next.js 15.5.6 con App Router
**Estado:** 🔴 Boilerplate - Sin features implementadas

**Tecnologías:**

- React 19.1.1
- Tailwind CSS 4.x
- TypeScript 5.9.2
- Turbopack (bundler)

**Punto de Entrada:** `src/app`

**Descripción:**
Aplicación web principal donde los usuarios gestionarán su guardarropa. Actualmente solo contiene el boilerplate de Next.js sin ninguna funcionalidad personalizada implementada.

---

### 2. apps/docs - Documentación del Design System

**Framework:** Storybook 9.1.13
**Estado:** 🟢 Configurado y funcional

**Tecnologías:**

- Vite 7.1.7 (build tool)
- Vitest 3.2.4 (testing)
- Playwright 1.56.1 (E2E testing)
- Testing Library 16.3.0
- axe-core (accessibility testing)

**Punto de Entrada:** `.storybook/`

**Descripción:**
Documentación interactiva de todos los componentes del design system con testing integrado y pruebas de accesibilidad.

---

### 3. packages/ui - Biblioteca de Componentes UI

**Patrón:** Atomic Design
**Estado:** 🟢 13 Atoms completados

**Componentes Atómicos:**

1. Avatar
2. Badge
3. Button
4. Checkbox
5. Divider
6. IconButton
7. Input
8. Link
9. Radio
10. Skeleton
11. Spinner
12. Switch
13. Tag

**Tecnologías:**

- class-variance-authority (CVA) para variantes
- clsx + tailwind-merge para class merging
- lucide-react para íconos
- React 19 con forwardRef

**Exports:**

- `@capsule/ui` - Export general
- `@capsule/ui/atoms/*` - Atoms individuales
- `@capsule/ui/utils` - Utilidades (cn, createDisplayName)

**Descripción:**
Design system completo en Atomic Design con 13 componentes base totalmente testeados y documentados. Listos para composición en Molecules y Organisms.

---

### 4. packages/domain - Lógica de Dominio

**Patrón:** Domain-Driven Design (DDD)
**Estado:** 🔴 Placeholder vacío

**Descripción:**
Preparado para contener la lógica de negocio del dominio (Entities, Value Objects, Domain Services, Repositories). Actualmente sin implementación.

---

### 5-7. Configuraciones Compartidas

**packages/eslint-config**

- Configuración de linting centralizada
- Usado por todas las apps y packages

**packages/tailwind-config**

- Tema y configuración de Tailwind compartida
- Tokens de diseño centralizados

**packages/typescript-config**

- TSConfig base para diferentes contextos
- Configuración estricta de TypeScript

---

## Quick Reference - Tech Stack

### Frontend

| Categoría  | Tecnología   | Versión |
| ---------- | ------------ | ------- |
| Framework  | Next.js      | 15.5.6  |
| UI Library | React        | 19.1.1  |
| Styling    | Tailwind CSS | 4.x     |
| Language   | TypeScript   | 5.9.2   |

### Development

| Categoría         | Tecnología | Versión |
| ----------------- | ---------- | ------- |
| Build (Next)      | Turbopack  | -       |
| Build (Storybook) | Vite       | 7.1.7   |
| Monorepo          | TurboRepo  | 2.5.8   |
| Package Manager   | pnpm       | 9.0.0   |

### Testing & Quality

| Categoría     | Tecnología      | Versión |
| ------------- | --------------- | ------- |
| Unit Testing  | Vitest          | 3.2.4   |
| E2E Testing   | Playwright      | 1.56.1  |
| Test Utils    | Testing Library | 16.3.0  |
| Accessibility | axe-core        | 4.11.0  |
| Linting       | ESLint          | 9.x     |
| Formatting    | Prettier        | 3.6.2   |

---

## Patrones Arquitectónicos

### Next.js App Router

```
src/app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles
```

**Características:**

- File-based routing
- Server Components por defecto
- Fonts: Inter (sans) + JetBrains Mono (mono)
- Lang: español (es)

### Atomic Design (packages/ui)

```
components/
└── atoms/
    ├── Button/
    │   ├── Button.tsx
    │   ├── Button.stories.tsx
    │   └── Button.test.tsx
    └── [12 more atoms]
```

**Características:**

- CVA para variantes
- forwardRef para acceso DOM
- TypeScript completo
- Testing + Storybook

### Domain-Driven Design (packages/domain)

```
domain/
├── entities/           # (Pending)
├── value-objects/      # (Pending)
├── services/           # (Pending)
└── repositories/       # (Pending)
```

**Estado:** Estructura preparada, sin implementación

---

## Documentación Generada

1. **technology-stack.md** - Stack tecnológico completo por parte
2. **ui-component-inventory.md** - Inventario exhaustivo de 13 componentes UI
3. **project-overview.md** - Este documento (visión general)

---

## Getting Started

### Prerequisitos

- Node.js >= 18
- pnpm 9.0.0

### Instalación

```bash
pnpm install
```

### Development

```bash
# Ejecutar todas las apps
pnpm dev

# Solo web app
pnpm --filter web dev

# Solo Storybook
pnpm --filter docs dev
```

### Build

```bash
pnpm build
```

### Testing

```bash
# Unit tests
pnpm --filter ui test

# Con coverage
pnpm --filter ui test:coverage
```

### Linting & Formatting

```bash
pnpm lint
pnpm format
```

---

## Estado de Implementación

### ✅ Completado

- ✅ Monorepo structure con TurboRepo
- ✅ Design system: 13 componentes atómicos
- ✅ TypeScript en toda la codebase
- ✅ Testing setup completo
- ✅ Storybook configurado
- ✅ Git hooks con Husky
- ✅ Linting y formatting automatizado
- ✅ Next.js 15 con App Router
- ✅ React 19

### 🚧 En Progreso

- 🚧 Molecules y Organisms del design system
- 🚧 Lógica de dominio (packages/domain)
- 🚧 Features de la aplicación web

### ❌ Pendiente

- ❌ Backend/API
- ❌ Base de datos y migrations
- ❌ Autenticación de usuarios
- ❌ Integración con IA para reconocimiento
- ❌ State management global
- ❌ Funcionalidades core de guardarropa

---

## Próximos Pasos Recomendados

### Corto Plazo (1-2 sprints)

1. **Implementar Molecules** - Componer atoms en componentes más complejos
2. **Definir Domain Entities** - User, Garment, Outfit en packages/domain
3. **Crear primeras páginas** - Login, Dashboard, Wardrobe en apps/web
4. **Unificar Tailwind** - Resolver diferencia de versiones (v4 vs v3.4.17)

### Mediano Plazo (2-4 sprints)

1. **Backend/API** - Next.js API Routes o servidor separado
2. **Base de datos** - Schema design + Prisma/Drizzle
3. **Autenticación** - Next-Auth o similar
4. **State Management** - Zustand o Jotai para estado global

### Largo Plazo (4+ sprints)

1. **Integración con IA** - Reconocimiento de prendas
2. **Algoritmos de recomendación** - Sugerencias de outfits
3. **PWA** - Progressive Web App para móvil
4. **Internacionalización** - i18n support

---

## Arquitectura Objetivo

```
┌─────────────────────────────────────────┐
│           apps/web (Next.js)            │
│  ┌─────────────────────────────────┐   │
│  │       Presentation Layer         │   │
│  │  (Pages, Components, Hooks)      │   │
│  └─────────────────────────────────┘   │
│                  ↓                       │
│  ┌─────────────────────────────────┐   │
│  │      Application Layer           │   │
│  │   (Use Cases, Services)          │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│        packages/domain (DDD)            │
│  ┌─────────────────────────────────┐   │
│  │        Domain Layer              │   │
│  │  (Entities, Value Objects,       │   │
│  │   Domain Services, Repositories) │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│     Infrastructure Layer (TBD)          │
│  (Database, External APIs, File Storage)│
└─────────────────────────────────────────┘
```

---

## Conclusión

Capsule tiene una **infraestructura robusta y moderna** lista para escalar:

- ✅ Monorepo bien estructurado
- ✅ Design system sólido
- ✅ Testing y calidad configurados
- ✅ Stack actualizado (React 19, Next.js 15)

**Estado:** Proyecto en **fase inicial/temprana** con base técnica excelente, pendiente de implementación de funcionalidades core de negocio.

El proyecto está **listo para desarrollo activo** de features una vez definidas las entidades de dominio y el backend.
