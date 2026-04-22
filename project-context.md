---
project_name: "Capsule"
last_updated: "2026-01-19"
sections_completed: ["tech-stack", "core-rules", "patterns", "usage"]
status: "complete"
optimized_for_llm: true
---

# Project Context: Capsule

**Critical Instruction for AI Agents:**
This file contains the **non-negotiable** rules and patterns for this project. Read this before implementing ANY code. Violating these rules will break the Clean Architecture boundaries.

## 1. Technology Stack (Exact Versions)

- **Runtime:** Node.js >= 18 / pnpm 9.0.0
- **Monorepo:** TurboRepo 2.5.8
- **Framework:** Next.js 16.x (App Router, Server Actions)
- **Language:** TypeScript 5.9.2 (Strict Mode)
- **Database:** PostgreSQL 16 (via Docker)
- **ORM:** Drizzle ORM v0.33+ (packages/db)
- **Auth:** Auth.js v5 (beta) with Drizzle Adapter
- **State:** Zustand v5.x (with Persist Middleware)
- **Styling:** Tailwind CSS v3.4 (Strictly enforced across all packages)
- **Validation:** Zod v3.x (packages/validators)
- **Testing:** Vitest (Unit) + Playwright (E2E)
- **Logging:** Pino (JSON structured)

## 2. Critical Implementation Rules

### 🛡️ Clean Architecture Boundaries (The "Golden Rules")

1.  **Domain Purity:** `packages/domain` MUST NOT depend on `react`, `next`, `drizzle-orm`, or UI libraries. It depends ONLY on `zod` (via `packages/validators`).
2.  **Dependency Flow:**
    - ✅ `apps/web` -> `packages/domain`
    - ✅ `apps/web` -> `packages/db`
    - ❌ `packages/domain` -> `apps/web` (FORBIDDEN)
3.  **Dependency Inversion:** Logic lives in `packages/domain` as Use Cases. Implementation (DB calls) is injected from `apps/web`.

### 🏗️ Code Organization Patterns

- **Entities:** Pure TS classes/interfaces in `packages/domain/src/entities`.
- **Use Cases:** Single-responsibility functions in `packages/domain/src/use-cases`.
- **DTOs:** Validated strictly with Zod schemas in `packages/validators`.
- **Server Actions:** Thin controllers in `apps/web/src/app/_actions`. They ONLY call Use Cases.
- **Components:** Atomic Design in `packages/ui` (Atoms/Molecules).

### 📝 Naming Conventions

- **Database:** `snake_case` (plural tables: `users`, `garments`).
- **Files:** `kebab-case` generally, but `PascalCase` for React components.
- **Functions:** `camelCase` (e.g., `createOutfit`).
- **Types/Interfaces:** `PascalCase` (e.g., `OutfitEntity`).

### 🧪 Testing Strategy

- **Unit:** Co-located with source (`.test.ts`). Test Domain logic extensively.
- **E2E:** Strict **Page Object Model (POM)** pattern. No raw selectors in test files.

### ⚠️ Anti-Patterns to Avoid

- **No Logic in UI:** Do not write business logic inside React Components or Server Actions.
- **No Raw SQL:** Always use Drizzle query builder.
- **No Tailwind v4 Syntax:** Stick to v3.4 utilities until migration is authorized.
- **No "Any" Types:** Strict TypeScript is enforced.

## 3. Developer Workflow

- **Migrations:** Always generate and run migrations via `packages/db` scripts.
- **Linting:** Run `pnpm lint` before committing.
- **Logs:** Use the `Logger` singleton (Pino) for any backend logging.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing **ANY** code.
- Follow ALL rules exactly as documented (especially Clean Architecture boundaries).
- When in doubt, prefer the more restrictive option (e.g., Strict Zod).
- If you encounter a pattern not defined here, ask the user before improvising.

**For Humans:**

- Keep this file lean and focused on agent needs.
- Update when technology stack changes (e.g., if we migrate to Tailwind v4).
- Remove rules that become obvious over time or are enforced by tooling.

Last Updated: 2026-01-19
