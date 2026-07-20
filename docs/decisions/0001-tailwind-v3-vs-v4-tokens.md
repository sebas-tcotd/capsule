# ADR 0001: Tailwind CSS v3 config, not v4 CSS-first tokens

**Status:** Accepted (current state) — supersedes an earlier attempt at CSS-first tokens.

## Context

Early in the project, `packages/tailwind-config` was built around Tailwind v4's CSS-first token model: a single `shared-styles.css` file using `@theme { --color-primary-500: ...; }`, imported directly by consumers (`@import "@capsule/tailwind-config"`). This is documented at length in the original (now superseded) versions of `ARCHITECTURE.md`, `SETUP.md`, and `FAQ.md`.

## Decision

The project moved back to a conventional Tailwind v3 setup: `packages/tailwind-config/tailwind.config.js` (a plain JS `theme.extend` object) plus `base.css` (`@tailwind base/components/utilities`), consumed the standard way via each app's own `tailwind.config.ts` spreading the shared config. This is what's in the repo today — see `packages/tailwind-config/`.

The reversal is visible directly in git history:

```
2542df1 feat: downgrade to tailwind v3
97f8964 fix: correct styles flow
```

## What isn't recorded

The commit messages capture _that_ the CSS-first approach was reverted, not a detailed first-hand account of _why_ — no design doc or commit body spells out the specific friction encountered. This ADR intentionally doesn't invent that reasoning. If you're revisiting this decision, treat the "why CSS-first tokens" arguments in the archived docs below as the _case for_ the old approach, not as a balanced account of what went wrong with it.

## Current state (source of truth)

- Token definitions: `packages/tailwind-config/tailwind.config.js` (JS `theme.extend`)
- Base styles: `packages/tailwind-config/base.css`
- Consumers spread the shared config in their own `tailwind.config.ts` (see `apps/web/tailwind.config.ts`, `apps/docs/tailwind.config.ts`)
- See the [README's Tech stack section](../../README.md#tech-stack) for the live summary.

## Historical context

The full CSS-first exploration — what it looked like, what it was supposed to buy, and the v3-vs-v4 comparison — is preserved, unedited, in:

- [`docs/archive/SETUP.md`](../archive/SETUP.md)
- [`docs/archive/FAQ.md`](../archive/FAQ.md)

Both predate this decision and describe the abandoned approach as if it were current. Read them as a record of the exploration, not as instructions.
