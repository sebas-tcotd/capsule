# Capsule

[![CI](https://github.com/sebas-tcotd/capsule/actions/workflows/ci.yml/badge.svg)](https://github.com/sebas-tcotd/capsule/actions/workflows/ci.yml)
![Status](https://img.shields.io/badge/status-pre--product-orange)

**Capsule turns a physical wardrobe into a searchable, AI-assisted inventory** — so getting dressed, avoiding duplicate purchases, and rediscovering unused clothes stops depending on memory. This repository is the TypeScript monorepo for the product: a Next.js web app backed by Postgres, built on a Clean Architecture core, with a standalone design system.

> **Status: pre-product.** The monorepo tooling, Docker environment, and design system below are real and working. The wardrobe app itself — auth, garment inventory, outfit suggestions — has not been built yet. The [Project Map](#project-map) below shows exactly what exists vs. what's a placeholder.

## Why Capsule exists

People own more clothing than they actively use — most wardrobes go largely unworn most of the time — which shows up as morning decision fatigue, duplicate or incompatible purchases, and the feeling of "nothing to wear" despite a full closet. Capsule's answer, per the product brief, is **"shop your own closet"**: catalog what you own (photo capture + AI recognition), surface it contextually (weather, calendar, what you haven't worn in months), and let AI expand your options rather than dictate them.

That direction isn't a guess — it came out of a structured discovery pass (problem statement, target users, competitive gaps, differentiation thesis) done before any product code was written. Full writeup in [`docs/project-overview.md`](./docs/project-overview.md) and [`docs/internal/product-brief.md`](./docs/internal/product-brief.md).

## Project Map

| Path                         | Purpose                                                             | Status                                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/web`                   | Next.js 16 (App Router) — the eventual product surface              | 🔴 Unmodified `create-next-app` template. No auth, routes, or business UI                                                                                 |
| `apps/docs`                  | Storybook 9 — documents `@capsule/ui`                               | ✅ Working — see [Demo](#the-closest-thing-to-a-demo) below                                                                                               |
| `packages/ui`                | React design system, Atomic Design, CVA variants                    | ✅ 13 atoms shipped: Button, Input, Checkbox, Radio, Switch, Avatar, Badge, Tag, Divider, Link, Spinner, Skeleton, IconButton — each with tests + stories |
| `packages/domain`            | Framework-free business logic (entities, use cases)                 | 🔴 Placeholder — one `DomainError` class, nothing else                                                                                                    |
| `packages/db`                | Drizzle ORM schemas + database access                               | 🔴 Placeholder — no schema, no migrations, no client                                                                                                      |
| `packages/validators`        | Shared Zod validation schemas                                       | 🔴 Placeholder — dependency installed, no schemas defined                                                                                                 |
| `packages/tailwind-config`   | Shared Tailwind theme (color, type, spacing, radius, shadow tokens) | ✅ Working                                                                                                                                                |
| `packages/eslint-config`     | Shared ESLint configs (base, Next.js, React library, design system) | ✅ Working                                                                                                                                                |
| `packages/typescript-config` | Shared `tsconfig.json` bases                                        | ✅ Working                                                                                                                                                |
| —                            | Monorepo tooling: Turborepo, pnpm workspaces, Husky, commitlint, CI | ✅ Working                                                                                                                                                |
| —                            | Auth, state management (Zustand), AI recognition pipeline           | 🔴 Architectural decisions on record in `project-context.md`, no code yet                                                                                 |

If you're picking up work here: `packages/ui` is what to read for this repo's code-quality bar. Everything else is scaffolding waiting on the domain model.

### What's actually connected right now

```mermaid
graph TD
    subgraph "Working"
        Docs["apps/docs (Storybook)"]
        UI["packages/ui — 13 atoms"]
        TW["packages/tailwind-config"]
        PG[("Postgres 16 — Docker")]
    end
    subgraph "Placeholders — no logic yet"
        Domain["packages/domain"]
        DB["packages/db"]
        Val["packages/validators"]
    end
    Web["apps/web (Next.js template)"]

    Docs --> UI
    UI --> TW
    Web -.not imported.-> UI
    Web -.not connected.-> PG
    DB -.would connect.-> PG
```

`apps/web` doesn't import `@capsule/ui` yet, and nothing in the app talks to Postgres yet. The design system and the Docker database are both real and independently working — they just aren't wired into the product surface.

### The closest thing to a demo

There's no product UI to screenshot yet, but `packages/ui` is real and running:

```bash
pnpm --filter docs dev   # → http://localhost:6006
```

That renders all 13 shipped components live, with every variant, size, and state as an interactive story.

## Tech stack

| Layer              | Choice                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Monorepo           | Turborepo 2.5, pnpm workspaces                                                                                                            |
| Language           | TypeScript 5.9 (strict mode everywhere)                                                                                                   |
| Web framework      | Next.js 16 (App Router), React 19                                                                                                         |
| Styling            | Tailwind CSS 3.4 — shared JS theme config, **not** CSS-first `@theme` (see [ADR 0001](./docs/decisions/0001-tailwind-v3-vs-v4-tokens.md)) |
| Component variants | class-variance-authority (CVA) + `tailwind-merge`                                                                                         |
| Design system docs | Storybook 9 (Vite builder)                                                                                                                |
| Database           | PostgreSQL 16 via Docker; Drizzle ORM planned, not yet wired up                                                                           |
| Validation         | Zod, installed, no schemas yet                                                                                                            |
| Testing            | Vitest + Testing Library (`packages/ui` only, 15 test files); Playwright planned for E2E                                                  |
| Lint/format        | ESLint 9, Prettier, Husky + lint-staged, commitlint (Conventional Commits)                                                                |

Every internal package exports **TypeScript source directly** (`"exports": { ".": "./src/index.ts" }`) instead of a compiled `dist/`, since consuming apps already bundle TypeScript — one less build step, instant hot reload across package boundaries. Full rationale in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

**A decision that got reversed:** the design tokens originally shipped as a CSS-first `@theme` setup (Tailwind v4 style). It got reverted in favor of a conventional `tailwind.config.js` — see [`docs/decisions/0001-tailwind-v3-vs-v4-tokens.md`](./docs/decisions/0001-tailwind-v3-vs-v4-tokens.md) for what changed and what's on record about why.

## How the design system is built

`packages/ui` is the one part of this repo that's finished, not scaffolded, so it's the fastest way to see the actual code-quality bar. Every one of the 13 atoms follows the same shape:

```tsx
// packages/ui/src/components/atoms/Button/Button.tsx
const buttonVariants = cva(
  ["inline-flex items-center justify-center gap-2", "squircle rounded-xl font-medium transition-colors", /* … */],
  {
    variants: {
      variant: { primary: [...], secondary: [...], outline: [...], ghost: [...], danger: [...] },
      size: { sm: "h-9 px-3 text-sm", md: "h-11 px-6 text-base", lg: "h-14 px-8 text-lg" },
    },
    defaultVariants: { variant: "primary", size: "md", fullWidth: false },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => { /* … */ });
Button.displayName = createDisplayName("Button", "atom");
```

What that pattern buys, applied consistently across all 13 components:

- **Typed variants, not string props** — `variant`/`size` are inferred from `cva()` via `VariantProps`, so an invalid variant is a compile error, not a runtime CSS miss.
- **`forwardRef` everywhere** — every atom is usable with refs (focus management, form libraries, animation) without exceptions to remember.
- **Native HTML props pass through** — `ButtonProps extends ButtonHTMLAttributes<...>`, so nothing about the underlying `<button>` is hidden from the consumer.
- **`createDisplayName()`** gives every component a real, debuggable name in React DevTools instead of `ForwardRef(Anonymous)`.
- **Accessibility is checked at build time**, not left to review — Storybook runs `@storybook/addon-a11y` against every story.
- **Every atom ships with its test and its story** — `Button.tsx`, `Button.test.tsx`, `Button.stories.tsx` live together; there's no "component exists but nobody wrote the story" gap.

## Getting Started

### Prerequisites

- **Node.js 22.15.0** — pinned in [`.nvmrc`](./.nvmrc), required for Storybook 9's native dependencies. **Note:** CI (`ci.yml`) and `Dockerfile` currently run on Node 18 instead — neither of those runs Storybook, so it hasn't caused a documented failure, but the two numbers are unreconciled. If `pnpm install` fails with native-binary/`gyp` errors, you're likely on an incompatible Node version — see [`TROUBLESHOOTING.md`](./TROUBLESHOOTING.md#problema-1-storybook-no-instala-o-falla-node-23).
- **pnpm ≥ 9.0.0**
- **Docker & Docker Compose** — only needed for the Postgres environment; the design system and Storybook run without it.

### Quickstart

```bash
nvm use && corepack enable
pnpm install

pnpm --filter docs dev      # Storybook (the design system) → http://localhost:6006
```

To also run the web app (currently the unmodified Next.js template):

```bash
cp .env.example .env        # non-secret local defaults, edit if needed
pnpm dev --filter=web       # → http://localhost:3000
```

### With Docker (adds PostgreSQL)

```bash
cp .env.example .env
docker compose up -d                     # web (:3000) + postgres (:5432)
docker compose --profile tools up -d     # + pgAdmin at :5050 (admin@capsule.local / admin)
```

```bash
docker compose exec postgres psql -U capsule -d capsule_dev
# postgresql://capsule:capsule_dev_password@localhost:5432/capsule_dev
```

A `Makefile` wraps the common Docker commands — run `make help` for the full list (`make dev`, `make up`, `make down`, `make db-shell`, `make db-reset`).

### Everyday commands

```bash
pnpm dev                        # all apps in dev mode
pnpm build                      # build everything
pnpm lint                       # ESLint, all workspaces
pnpm check-types                # tsc --noEmit, all workspaces
pnpm format                     # Prettier write

pnpm --filter ui test           # @capsule/ui's Vitest suite (not yet run in CI — run before touching packages/ui)
pnpm --filter ui test:coverage
```

## Repository structure

```
capsule/
├── apps/
│   ├── web/                 # Next.js app (product surface)
│   └── docs/                # Storybook for @capsule/ui
├── packages/
│   ├── ui/                  # Design system (13 atoms, tokens, utils)
│   ├── domain/               # Business logic (placeholder)
│   ├── db/                   # Drizzle schemas (placeholder)
│   ├── validators/            # Zod schemas (placeholder)
│   ├── tailwind-config/       # Shared design tokens
│   ├── eslint-config/         # Shared lint rules
│   └── typescript-config/     # Shared tsconfig bases
├── docker/                  # Postgres init/seed SQL
├── docs/                    # Product & architecture docs (generated via BMAD)
├── .github/workflows/       # CI
└── turbo.json                # Turborepo task graph
```

## Development workflow & contributing

GitHub Flow, Conventional Commits (enforced by commitlint), CI checks, and where to find component/architecture conventions are all documented in [`CONTRIBUTING.md`](./CONTRIBUTING.md). Solo-founder project, not yet open to outside contributions — but the same rules apply internally, enforced by tooling rather than left to memory.

## License

No `LICENSE` file exists yet, and every workspace is marked `"private": true`. Treat this as **all rights reserved / not licensed for reuse** until that changes.

## Documentation map

| Document                                                             | Covers                                                                                       |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`CONTRIBUTING.md`](./CONTRIBUTING.md)                               | Workflow, commit conventions, CI, where to find component/architecture rules                 |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md)                               | Source-vs-compiled package exports — the one architectural rationale still fully current     |
| [`docs/decisions/`](./docs/decisions/)                               | Architecture Decision Records — currently one, on the Tailwind v3/v4 reversal                |
| [`TROUBLESHOOTING.md`](./TROUBLESHOOTING.md)                         | Step-by-step fixes for common local setup issues                                             |
| [`docs/archive/`](./docs/archive/)                                   | Retired docs (old `SETUP.md`, `FAQ.md`) kept for historical context — not current references |
| [`docs/project-overview.md`](./docs/project-overview.md)             | Product vision, tech stack snapshot, roadmap (Spanish)                                       |
| [`docs/internal/product-brief.md`](./docs/internal/product-brief.md) | Problem statement, target users, differentiators (Spanish)                                   |
| [`packages/ui/README.md`](./packages/ui/README.md)                   | Design system overview                                                                       |
| [`packages/ui/STRUCTURE.md`](./packages/ui/STRUCTURE.md)             | Component file structure and conventions                                                     |
| [`packages/ui/CONTRIBUTING.md`](./packages/ui/CONTRIBUTING.md)       | How to add a new component                                                                   |

## Roadmap

Near-term (per `docs/project-overview.md`):

1. Define domain entities (`User`, `Garment`, `Outfit`) in `packages/domain`
2. Design the Postgres schema and wire up Drizzle in `packages/db`
3. Build the first real pages in `apps/web` (auth, wardrobe dashboard)
4. Expand `packages/ui` into Molecules/Organisms as `apps/web` needs them

Longer-term: AI garment recognition, outfit recommendation, Zustand-based client state, and CI test coverage.
