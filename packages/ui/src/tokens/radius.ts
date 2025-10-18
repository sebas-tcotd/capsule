/**
 * Capsule Design System - Border Radius Tokens
 *
 * Moderately rounded for modern, friendly feel
 */

export const radius = {
  none: "0",
  sm: "0.375rem", // 6px - subtle rounding
  DEFAULT: "0.5rem", // 8px - default for most components
  md: "0.5rem", // 8px
  lg: "0.75rem", // 12px - cards, modals
  xl: "1rem", // 16px - large cards
  "2xl": "1.5rem", // 24px - hero sections
  "3xl": "2rem", // 32px
  full: "9999px", // Pills, circular elements
} as const;

export type RadiusToken = typeof radius;
