/**
 * Capsule Design System - Typography Tokens
 *
 * Font: Inter (Modern, highly legible)
 * Scale: Type scale based on perfect fourth (1.333)
 */

export const typography = {
  // Font families
  fontFamily: {
    sans: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "sans-serif",
    ],
    mono: ["JetBrains Mono", "Menlo", "Monaco", "Courier New", "monospace"],
  },

  // Font sizes (Type scale - Perfect Fourth: 1.333)
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
    sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
    base: ["1rem", { lineHeight: "1.5rem" }], // 16px - body
    lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
    xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
    "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px - h4
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px - h3
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px - h2
    "5xl": ["3rem", { lineHeight: "1" }], // 48px - h1
    "6xl": ["3.75rem", { lineHeight: "1" }], // 60px - display
    "7xl": ["4.5rem", { lineHeight: "1" }], // 72px - hero
    "8xl": ["6rem", { lineHeight: "1" }], // 96px
    "9xl": ["8rem", { lineHeight: "1" }], // 128px
  },

  // Font weights
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400", // body
    medium: "500", // emphasis
    semibold: "600", // headings
    bold: "700", // strong emphasis
    extrabold: "800",
    black: "900",
  },

  // Line heights
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5", // body
    relaxed: "1.625",
    loose: "2",
  },

  // Letter spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// Semantic typography (component-specific)
export const semanticTypography = {
  // Headings
  h1: {
    fontSize: typography.fontSize["5xl"],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  h2: {
    fontSize: typography.fontSize["4xl"],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  h3: {
    fontSize: typography.fontSize["3xl"],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
  },
  h4: {
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
  },
  h5: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },
  h6: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },

  // Body text
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
  },
  bodyLarge: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
  },

  // UI elements
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
  },
  button: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.none,
    letterSpacing: typography.letterSpacing.wide,
  },
  code: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    fontFamily: typography.fontFamily.mono,
  },
} as const;

export type TypographyToken = typeof typography;
export type SemanticTypographyToken = typeof semanticTypography;
