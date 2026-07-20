# Contributing to Capsule

This is currently a solo-founder project in active early development — not yet open to outside contributions. This document exists anyway because it's the one place these conventions are enforced by tooling, not just habit, and it's where that will be extended if/when the project opens up.

## Workflow

This project follows **GitHub Flow**: `main` is protected and always deployable; work happens on short-lived branches merged via PR.

**Branch naming:** `feat/…`, `fix/…`, `chore/…`, `refactor/…`, `docs/…`

**Commits** follow [Conventional Commits](https://www.conventionalcommits.org/), enforced by commitlint via a Husky `commit-msg` hook:

```bash
git commit -m "feat: add outfit suggestion use case"
git commit -m "fix: correct button focus ring color"
```

**Pre-commit hooks** (Husky + lint-staged) run Prettier on staged files automatically — see `.husky/`.

## What CI checks

`.github/workflows/ci.yml` runs on every push/PR to `main`:

- `prettier --check` (format)
- `pnpm lint` (ESLint, all workspaces)
- `pnpm check-types` (TypeScript, all workspaces)

There's no test step yet — `@capsule/ui`'s Vitest suite (15 test files) currently runs locally only. Run it before opening a PR that touches `packages/ui`:

```bash
pnpm --filter ui test
```

## Where to look for conventions

- **Adding or changing a component in `packages/ui`** — see [`packages/ui/CONTRIBUTING.md`](./packages/ui/CONTRIBUTING.md) for file structure, naming, and the CVA/`forwardRef` pattern every atom follows, and [`packages/ui/STRUCTURE.md`](./packages/ui/STRUCTURE.md) for folder conventions.
- **Architectural decisions** (why source exports, why Tailwind v3, why packages are split the way they are) — see [`ARCHITECTURE.md`](./ARCHITECTURE.md) and [`docs/decisions/`](./docs/decisions/).
- **Local setup problems** — see [`TROUBLESHOOTING.md`](./TROUBLESHOOTING.md).
