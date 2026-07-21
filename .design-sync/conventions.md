## Capsule UI — conventions for building with this design system

No provider or root wrapper is required — every component (`Button`, `Input`, `Badge`, `Tag`, `IconButton`, `Avatar`, `Checkbox`, `Radio`, `Switch`, `Divider`, `Link`, `Skeleton`, `Spinner`, `SquircleBox`) renders standalone; there is no `ThemeProvider`/context in this bundle. Just import and use.

### Styling idiom: Tailwind utility classes, two-axis variants

Every component takes Tailwind-style utility classes through typed variant props — never raw CSS classes for color or shape. Two independent axes per interactive component (mirror this for any new composition):

- **Semantic axis** — what the element means: `intent` on `Button` (`primary` | `neutral` | `danger`), `colorScheme` on `Badge`/`Tag`/`IconButton` (`primary` | `accent` | `success` | `warning` | `error` | `info` | `neutral`).
- **Treatment axis** — how much visual weight: `tone` on `Button` (`solid` | `outline` | `ghost` | `text`), `variant` on `Badge`/`Tag`/`IconButton` (`solid` | `outline` | `subtle`/`ghost`).

Real color family names (from the actual Tailwind theme, not generic Tailwind defaults): `primary` (Authority Blue), `accent`/`warning` (Terracotta), `success` (Deep Forest), `error` (muted rust — deliberately not a stock red), `neutral` (warm greige, light end aliased to `bone`/`greige` for canvas/surface). Backgrounds: page canvas is `bone` (#FDFCFB), card/section surface is `greige` (#F7F5F2) — prefer these over plain white for anything meant to sit "in" the app rather than float above it.

Depth is a named shadow, never an ad-hoc `box-shadow`: `shadow-studio` (default elevation, tinted with Authority Blue rather than flat black), `shadow-studio-sm` / `shadow-studio-lg` for less/more, `shadow-inset-soft` for recessed elements that receive input (`Input` uses this — a control that's being written into reads as pressed into the surface, the opposite of a button being pressed to act).

Corners use the `squircle` class (continuous-curvature corners, `corner-shape: squircle` — native CSS, no JS) alongside a normal `rounded-*` utility, which is also the safe fallback on browsers that don't yet support `corner-shape`.

### Button hierarchy

`Button`'s three-tier hierarchy maps directly to `tone`: primary/main action = `tone="solid"` (default), secondary/alternative = `tone="ghost"`, tertiary/low-emphasis = `tone="text"`. Combine with any `intent` — e.g. a low-emphasis destructive action is `intent="danger" tone="text"`, not a new variant.

### Where the truth lives

Read `styles.css` (it `@import`s everything — tokens, fonts, and `_ds_bundle.css`, the actual compiled component styles) before styling anything by hand. Each component's `components/<group>/<Name>/<Name>.prompt.md` has real usage examples pulled from this repo's own Storybook stories — prefer those over inventing new prop combinations.

### Minimal build example

```jsx
<div className="bg-bone p-6 flex flex-col gap-4">
  <div className="bg-greige squircle rounded-2xl shadow-studio p-4 flex items-center justify-between">
    <span className="text-neutral-900 font-medium">Camisa lino</span>
    <Tag colorScheme="success" variant="subtle">
      Limpio
    </Tag>
  </div>
  <div className="flex gap-3">
    <Button intent="primary" tone="solid">
      Guardar
    </Button>
    <Button tone="ghost">Cancelar</Button>
  </div>
</div>
```
