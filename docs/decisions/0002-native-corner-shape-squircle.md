# ADR 0002: Native `corner-shape: squircle` instead of the CSS Paint Worklet

**Status:** Proposed

## Context

The current squircle implementation (`.squircle` in `packages/tailwind-config/base.css`) uses the CSS Painting API (Houdini): `mask-image: paint(squircle)`, backed by a hand-written paint worklet registered from JS in `apps/web/src/components/SquircleRegistry.tsx` and loaded from `apps/web/public/worklets/squircle.js` (and the equivalent pair in `apps/docs`).

The CSS Painting API is Chromium-only. Safari and Firefox never ran the worklet — they always fell through the `@supports not (mask-image: paint(squircle))` block, which does nothing beyond letting the element's own `rounded-*` utility apply. In other words: on non-Chromium browsers, the app was already paying for a worklet fetch + registration component that had zero visual effect.

This surfaced during the July 2026 design-system session ([ux-design-specification.md § Material Direction Refinement](../../_bmad-output/planning-artifacts/ux-design-specification.md)), triggered by a corner-shape reference the user found: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/corner-shape-value

## Decision

Replace the Houdini worklet with the native `corner-shape` property (CSS Borders and Box Decorations Module Level 4):

```css
.squircle {
  border-radius: theme(borderRadius.2xl); /* size, cross-browser */
  corner-shape: squircle; /* shape, progressive enhancement */
}
```

- **Chromium:** renders natively, no JS, no worklet fetch, no registration component.
- **Safari / Firefox:** `corner-shape` is ignored per spec, falling back to plain `border-radius` (`round`) — the _same visual fallback the app already had_, but without ever loading `SquircleRegistry.tsx` or the worklet JS files.

Net effect: identical fallback behavior on non-Chromium browsers, identical shape on Chromium, and two fewer JS files + one fewer registration component in a PWA that has "zero CLS" and offline-first performance as explicit NFRs.

### Files to retire once this lands

- `apps/web/src/components/SquircleRegistry.tsx`
- `apps/web/public/worklets/squircle.js`
- `apps/docs/public/worklets/squircle.js`
- Any `<script>`/import wiring that registers the worklet on mount

### Not yet done

This ADR records the decision and the rationale; it does not itself change `base.css` or remove the worklet files — that's an implementation task, not a design-system planning task, and should go through the normal dev/code-review flow like any other change to `packages/tailwind-config`.

## Caveats

- `corner-shape` is experimental and not yet Baseline (per MDN, as of April 2026). Treat it as progressive enhancement only — never gate functionality or layout on it rendering.
- A JS polyfill exists (spec-accurate squircle rendering in Safari/Firefox) but reintroduces the exact JS cost this decision removes. Not adopted here; revisit only if visual parity on non-Chromium becomes a hard requirement.
- Recheck browser support before removing the worklet files — verify current state at [caniuse: corner-shape](https://caniuse.com/mdn-css_properties_corner-shape).
