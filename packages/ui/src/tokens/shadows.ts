/**
 * Capsule Design System - Shadow Tokens
 *
 * "Premium Studio" shadows — selective New Neumorphism, tinted with
 * Authority Blue instead of flat black, mirroring
 * packages/tailwind-config/tailwind.config.js's boxShadow.studio* and the
 * "ambient-occlusion" value in _bmad-output/design-tokens.json.
 */

export const shadows = {
  none: "0 0 #0000",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",

  // Premium Studio - selective New Neumorphism (tinted, not flat black)
  // Matches packages/tailwind-config/tailwind.config.js boxShadow.studio*
  studioSm: "0 2px 4px 0 rgb(62 92 118 / 0.06)",
  studio: "0 4px 8px 0 rgb(62 92 118 / 0.08)",
  studioLg: "0 8px 16px 0 rgb(62 92 118 / 0.10)",

  // Exact value from _bmad-output/design-tokens.json effects.shadows["ambient-occlusion"]
  ambientOcclusion:
    "0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 10px -2px rgba(0, 0, 0, 0.02)",
} as const;

export type ShadowToken = typeof shadows;
