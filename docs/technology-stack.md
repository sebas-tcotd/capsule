# Análisis del Stack Tecnológico - Capsule

**Generado:** 2026-01-17
**Tipo de Proyecto:** Monorepo (TurboRepo + pnpm workspaces)
**Partes:** 7 (2 apps, 5 packages)

---

## Resumen Ejecutivo

Capsule es un monorepo moderno construido con Next.js 15, React 19, y un design system basado en Atomic Design. Utiliza TurboRepo para orquestación de builds y pnpm para gestión de dependencias. El proyecto sigue principios de Clean Architecture y Domain-Driven Design con un fuerte énfasis en TypeScript, testing, y calidad de código.

---

## Stack por Parte del Proyecto

### 1. apps/web - Aplicación Web Principal

| Categoría      | Tecnología   | Versión | Justificación                                                     |
| -------------- | ------------ | ------- | ----------------------------------------------------------------- |
| **Framework**  | Next.js      | 15.5.6  | Framework React con App Router, SSR, y optimizaciones automáticas |
| **Runtime**    | React        | 19.1.1  | Biblioteca UI con nuevas características de React 19              |
| **Lenguaje**   | TypeScript   | 5.9.2   | Type safety y mejor DX                                            |
| **Estilos**    | Tailwind CSS | 4.x     | Utility-first CSS framework (versión latest)                      |
| **Build Tool** | Turbopack    | -       | Bundler de alto rendimiento integrado en Next.js                  |
| **Linting**    | ESLint       | 9.x     | Linter compartido desde @capsule/eslint-config                    |

**Patrón de Arquitectura:** Next.js App Router con estructura basada en rutas

**Punto de Entrada:** `src/app` (App Router de Next.js)

---

### 2. apps/docs - Documentación de Design System

| Categoría         | Tecnología      | Versión                   | Justificación                             |
| ----------------- | --------------- | ------------------------- | ----------------------------------------- |
| **Framework**     | Storybook       | 9.1.13                    | Documentación interactiva de componentes  |
| **Build Tool**    | Vite            | 7.1.7                     | Build tool rápido para desarrollo         |
| **Runtime**       | React           | 19.1.1                    | Consistente con apps/web                  |
| **Lenguaje**      | TypeScript      | 5.9.3                     | Type safety                               |
| **Testing**       | Vitest          | 3.2.4                     | Test runner rápido integrado con Vite     |
| **E2E Testing**   | Playwright      | 1.56.1                    | Tests de browser para componentes         |
| **Test Utils**    | Testing Library | 16.3.0                    | Utilities para testing de React           |
| **Accessibility** | axe-core        | via @storybook/addon-a11y | Pruebas de accesibilidad                  |
| **Estilos**       | Tailwind CSS    | 3.4.17                    | Compartido desde @capsule/tailwind-config |
| **Coverage**      | Vitest Coverage | v8                        | Reportes de cobertura de código           |

**Patrón de Arquitectura:** Storybook con integración de Vitest para component testing

**Punto de Entrada:** `.storybook/` + `src/`

---

### 3. packages/ui - Biblioteca de Componentes UI

| Categoría            | Tecnología               | Versión           | Justificación                           |
| -------------------- | ------------------------ | ----------------- | --------------------------------------- |
| **Runtime**          | React                    | 19.1.1            | Biblioteca de componentes reutilizables |
| **Lenguaje**         | TypeScript               | 5.9.2             | Type safety para props y APIs           |
| **Patrón de Diseño** | Atomic Design            | -                 | atoms/molecules/organisms structure     |
| **Styling**          | Tailwind CSS             | 3.4.17            | Utility-first styling                   |
| **Variant System**   | class-variance-authority | 0.7.1             | Sistema de variantes para componentes   |
| **Class Merging**    | clsx + tailwind-merge    | 2.1.1 + 3.3.1     | Merge dinámico de clases CSS            |
| **Icons**            | lucide-react             | 0.546.0           | Biblioteca de iconos                    |
| **Testing**          | Vitest                   | 3.2.4             | Unit testing                            |
| **Testing Utils**    | Testing Library          | 16.3.0 + jest-dom | Utilities para testing                  |
| **Test Environment** | jsdom                    | 27.0.1            | DOM virtual para tests                  |

**Patrón de Arquitectura:** Atomic Design Pattern

**Estructura:**

```
src/
├── components/
│   └── atoms/          # 13 componentes base
│       ├── Avatar
│       ├── Badge
│       ├── Button
│       ├── Checkbox
│       ├── Divider
│       ├── IconButton
│       ├── Input
│       ├── Link
│       ├── Radio
│       ├── Skeleton
│       ├── Spinner
│       ├── Switch
│       └── Tag
├── styles/
├── tokens/
└── utils/
```

**Exports Path Mapping:**

- `.` → `./src/index.ts`
- `./atoms/*` → `./src/components/atoms/*/index.ts`
- `./molecules/*` → `./src/components/molecules/*/index.ts`
- `./organisms/*` → `./src/components/organisms/*/index.ts`
- `./utils` → `./src/utils/index.ts`
- `./styles/*` → `./src/styles/*`

**Punto de Entrada:** `src/index.ts`

---

### 4. packages/domain - Lógica de Dominio (DDD)

| Categoría  | Tecnología           | Versión | Justificación                   |
| ---------- | -------------------- | ------- | ------------------------------- |
| **Patrón** | Domain-Driven Design | -       | Separación de lógica de negocio |

**Estado:** Placeholder inicial (sin dependencias definidas aún)

**Patrón de Arquitectura:** Domain-Driven Design (DDD) - Preparado para lógica de negocio

---

### 5. packages/eslint-config - Configuración Compartida de ESLint

| Categoría  | Tecnología | Versión | Justificación                         |
| ---------- | ---------- | ------- | ------------------------------------- |
| **Linter** | ESLint     | 9.x     | Configuración centralizada de linting |

**Patrón de Arquitectura:** Configuración compartida para todo el monorepo

---

### 6. packages/tailwind-config - Configuración Compartida de Tailwind

| Categoría         | Tecnología   | Versión | Justificación                         |
| ----------------- | ------------ | ------- | ------------------------------------- |
| **CSS Framework** | Tailwind CSS | 3.4.17  | Configuración centralizada de estilos |

**Patrón de Arquitectura:** Tema y configuración compartida

---

### 7. packages/typescript-config - Configuración Compartida de TypeScript

| Categoría    | Tecnología | Versión | Justificación                            |
| ------------ | ---------- | ------- | ---------------------------------------- |
| **Lenguaje** | TypeScript | 5.9.2   | Configuración centralizada de TypeScript |

**Patrón de Arquitectura:** TSConfigs base para diferentes contextos (app, library, etc.)

---

## Stack de Infraestructura y DevOps

| Categoría            | Tecnología  | Versión | Justificación                                    |
| -------------------- | ----------- | ------- | ------------------------------------------------ |
| **Monorepo Tool**    | TurboRepo   | 2.5.8   | Orquestación de builds y cache inteligente       |
| **Package Manager**  | pnpm        | 9.0.0   | Gestión eficiente de dependencias con workspaces |
| **Runtime**          | Node.js     | >= 18   | Runtime de JavaScript                            |
| **Git Hooks**        | Husky       | 9.1.7   | Automatización de pre-commit hooks               |
| **Commit Linting**   | commitlint  | 20.1.0  | Convención de commits                            |
| **Staged Files**     | lint-staged | 16.2.4  | Linting de archivos en staging                   |
| **Formatting**       | Prettier    | 3.6.2   | Formateo consistente de código                   |
| **Containerization** | Docker      | -       | docker-compose.yml presente                      |

---

## Configuración de TurboRepo

**Tasks configuradas:**

- `build` - Build con cache, outputs: `.next/**`, `storybook-static/**`
- `dev` - Modo desarrollo (persistent, sin cache)
- `lint` - Linting con dependencias
- `check-types` - Type checking
- `clean` - Limpieza (sin cache)

**Global Env:** `NODE_ENV`

---

## Patrones de Arquitectura por Tipo

### Web Application (apps/web)

- **Patrón:** Next.js App Router (file-based routing)
- **Rendering:** SSR + CSR híbrido
- **Data Fetching:** Server Components + Client Components

### Design System (apps/docs + packages/ui)

- **Patrón:** Atomic Design
  - **Atoms:** 13 componentes base (Button, Input, Avatar, etc.)
  - **Molecules:** No implementadas aún
  - **Organisms:** No implementadas aún
- **Testing:** Component Testing in Storybook + Vitest
- **Documentation:** Storybook Stories

### Domain Layer (packages/domain)

- **Patrón:** Domain-Driven Design (DDD)
- **Estado:** Estructura inicial, preparada para:
  - Entities
  - Value Objects
  - Domain Services
  - Repositories (interfaces)

---

## Análisis de Madurez del Proyecto

### ✅ Implementado

- Monorepo structure con TurboRepo
- Design system con 13 componentes atómicos
- TypeScript en toda la codebase
- Testing setup (Vitest + Playwright + Testing Library)
- Linting y formatting automatizado
- Git hooks con Husky
- Storybook para documentación de componentes
- Next.js 15 con App Router
- React 19

### 🚧 En Progreso

- Componentes Molecules y Organisms
- Lógica de dominio (packages/domain está vacío)
- Features de la aplicación web

### ❌ No Implementado (Potencial)

- Backend/API (no detectado)
- Base de datos (docker-compose tiene Postgres, pero sin migrations)
- State management global (no hay Redux, Zustand, etc.)
- Autenticación
- Integración con IA para funcionalidades core

---

## Tecnologías Clave por Categoría

### Frontend

- **Framework:** Next.js 15.5.6
- **UI Library:** React 19.1.1
- **Styling:** Tailwind CSS 4.x (web), 3.4.17 (ui)
- **Design System:** Atomic Design con CVA

### Development

- **Lenguaje:** TypeScript 5.9.2
- **Build:** Turbopack (Next.js), Vite (Storybook)
- **Package Manager:** pnpm 9.0.0
- **Monorepo:** TurboRepo 2.5.8

### Testing

- **Unit Testing:** Vitest 3.2.4
- **E2E Testing:** Playwright 1.56.1
- **Testing Utils:** Testing Library 16.3.0
- **Accessibility:** axe-core (via Storybook addon)

### Quality & DevOps

- **Linting:** ESLint 9.x
- **Formatting:** Prettier 3.6.2
- **Git Hooks:** Husky 9.1.7
- **Commit Conventions:** commitlint 20.1.0
- **Pre-commit:** lint-staged 16.2.4

---

## Versiones de Dependencias Críticas

| Dependencia  | Versión                | Notas                 |
| ------------ | ---------------------- | --------------------- |
| React        | 19.1.1                 | Latest major version  |
| Next.js      | 15.5.6                 | App Router, Turbopack |
| TypeScript   | 5.9.2                  | Stable version        |
| TurboRepo    | 2.5.8                  | Latest                |
| pnpm         | 9.0.0                  | Workspace support     |
| Storybook    | 9.1.13                 | Latest major          |
| Vitest       | 3.2.4                  | Latest major          |
| Playwright   | 1.56.1                 | Latest                |
| Tailwind CSS | 4.x (web), 3.4.17 (ui) | Mixed versions        |

---

## Recomendaciones Técnicas

### Corto Plazo

1. **Unificar versiones de Tailwind CSS** - apps/web usa v4, packages/ui usa v3.4.17
2. **Implementar packages/domain** - Añadir entidades y lógica de negocio
3. **Crear componentes Molecules** - Construir sobre los atoms existentes
4. **Documentar tokens de design** - Colores, spacing, typography en packages/ui/src/tokens

### Mediano Plazo

1. **Añadir Backend/API** - Considerar Next.js API Routes o servidor separado
2. **Implementar State Management** - Para estado global si es necesario
3. **Configurar CI/CD** - GitHub Actions, Vercel, etc.
4. **Añadir Storybook Chromatic** - Visual regression testing

### Largo Plazo

1. **Integración con IA** - Para funcionalidades de reconocimiento de prendas
2. **Optimización de Performance** - Lighthouse, Core Web Vitals
3. **Internacionalización (i18n)** - Para soporte multi-idioma
4. **Progressive Web App (PWA)** - Para experiencia móvil mejorada

---

## Conclusión

Capsule tiene una base tecnológica sólida y moderna con:

- ✅ Arquitectura escalable (Monorepo + Clean Architecture)
- ✅ Stack actualizado (React 19, Next.js 15)
- ✅ Excelente setup de testing
- ✅ Design system bien estructurado
- ⚠️ Lógica de negocio pendiente de implementación
- ⚠️ Backend/persistencia no implementado aún

El proyecto está en **fase inicial/temprana** con infraestructura robusta lista para escalar.
