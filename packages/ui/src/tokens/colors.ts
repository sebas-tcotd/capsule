/**
 * Capsule Design System - Color Tokens
 *
 * "Premium Studio" palette — mirrors _bmad-output/design-tokens.json and
 * packages/tailwind-config/tailwind.config.js (authority-blue, deep-forest,
 * terra-cotta, bone, greige). Keep these three in sync; tailwind.config.js
 * is what actually compiles into the app, this file is the typed/JS-side copy.
 *
 * Primary: Authority Blue (#3E5C76) - Precision, technical trust
 * Accent / Warning: Terracotta (#C47C5D) - Warm, tactile, avoids harsh red
 * Success: Deep Forest (#4A6D5E)
 * Neutral: warm Greige/Bone scale, not cool gray
 */

export const colors = {
  // Primary - Authority Blue
  // Used for: Primary buttons, active states, links, headings
  primary: {
    50: "#EEF2F5",
    100: "#DDE5EB",
    200: "#BBCBD7",
    300: "#99B1C3",
    400: "#6C8BA0",
    500: "#3E5C76", // Base authority blue
    600: "#374F66",
    700: "#2F4356",
    800: "#273746",
    900: "#1F2B36",
    950: "#171F28",
  },

  // Accent - Terracotta (warm, tactile)
  // Used for: Highlights, notifications, hover states, visual interest
  accent: {
    50: "#FCF3EF",
    100: "#F8E4DA",
    200: "#F0C9B3",
    300: "#E5A88A",
    400: "#D68E6E",
    500: "#C47C5D", // Base terracotta — matches design-tokens.json exactly
    600: "#AD684C",
    700: "#8F543D",
    800: "#714331",
    900: "#593428",
    950: "#331D16",
  },

  // Neutral - warm Greige scale (Premium Studio), not cool gray
  // Used for: Backgrounds, borders, secondary text
  neutral: {
    50: "#FDFCFB", // Bone / Base Canvas
    100: "#F7F5F2", // Greige / Surface
    200: "#EDE9E3",
    300: "#DDD6CB",
    400: "#B6AC9C",
    500: "#8C8273", // Secondary text
    600: "#6B6355", // Body text
    700: "#4F493F", // Dark text
    800: "#332F29",
    900: "#211E1A",
    950: "#17140F",
  },

  // Semantic colors
  success: {
    50: "#F0F5F2",
    100: "#E1EBE6",
    200: "#C3D7CD",
    300: "#A5C3B4",
    400: "#78A08A",
    500: "#4A6D5E", // Base deep forest
    600: "#415F52",
    700: "#385146",
    800: "#2F433A",
    900: "#26352E",
    950: "#1D2722",
  },

  // Warning shares the terracotta family — spec explicitly avoids harsh
  // red/amber for logical warnings (weather, duplicates, etc.)
  warning: {
    50: "#FCF3EF",
    100: "#F8E4DA",
    200: "#F0C9B3",
    300: "#E5A88A",
    400: "#D68E6E",
    500: "#C47C5D",
    600: "#AD684C",
    700: "#8F543D",
    800: "#714331",
    900: "#593428",
    950: "#331D16",
  },

  // Error/Danger — not defined in design-tokens.json; derived as a muted
  // rust so destructive actions stay in the warm/greige world instead of
  // a stock, jarring red (see ux-design-specification.md "Material Direction
  // Refinement" and docs/ui-component-inventory.md Button audit).
  error: {
    50: "#FBF0ED",
    100: "#F5DED7",
    200: "#E9BAAC",
    300: "#DA9481",
    400: "#B3684F",
    500: "#8F4433",
    600: "#78392A",
    700: "#602D22",
    800: "#4A2319",
    900: "#351911",
    950: "#200E0A",
  },

  // Info reuses Authority Blue — design-tokens.json defines info === authority
  info: {
    50: "#EEF2F5",
    100: "#DDE5EB",
    200: "#BBCBD7",
    300: "#99B1C3",
    400: "#6C8BA0",
    500: "#3E5C76",
    600: "#374F66",
    700: "#2F4356",
    800: "#273746",
    900: "#1F2B36",
    950: "#171F28",
  },

  // Background & Surface
  background: {
    light: "#FFFFFF",
    DEFAULT: "#FDFCFB", // Bone / Base Canvas
    muted: "#F7F5F2", // Greige
  },

  surface: {
    light: "#FFFFFF",
    DEFAULT: "#F7F5F2", // Greige — matches SquircleBox "surface" variant
    dark: "#EDE9E3",
  },

  // Border
  border: {
    light: "#EDE9E3",
    DEFAULT: "#DDD6CB",
    dark: "#B6AC9C",
  },

  // Text
  text: {
    primary: "#1C1C1C", // Matches design-tokens.json text.primary exactly
    secondary: "#6B6355",
    tertiary: "#8C8273",
    muted: "#B6AC9C",
    inverse: "#FFFFFF",
  },
} as const;

export type ColorToken = typeof colors;
