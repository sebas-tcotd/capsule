/**
 * Capsule Design System - Spacing Tokens
 *
 * Balanced spacing system with tendency toward spacious
 * 8px base unit for consistency
 */

export const spacing = {
  // Base spacing scale (8px base)
  0: "0",
  px: "1px",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px - xs
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px - sm
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px - md (base)
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px - lg
  7: "1.75rem", // 28px
  8: "2rem", // 32px - xl
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px - 2xl
  11: "2.75rem", // 44px
  12: "3rem", // 48px - 3xl
  14: "3.5rem", // 56px
  16: "4rem", // 64px - 4xl
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
} as const;

// Semantic spacing (more descriptive names)
export const semanticSpacing = {
  // Component internal spacing
  componentXs: spacing[2], // 8px
  componentSm: spacing[3], // 12px
  componentMd: spacing[4], // 16px
  componentLg: spacing[6], // 24px
  componentXl: spacing[8], // 32px

  // Layout spacing
  sectionXs: spacing[8], // 32px
  sectionSm: spacing[12], // 48px
  sectionMd: spacing[16], // 64px
  sectionLg: spacing[24], // 96px
  sectionXl: spacing[32], // 128px

  // Container spacing
  containerXs: spacing[4], // 16px
  containerSm: spacing[6], // 24px
  containerMd: spacing[8], // 32px
  containerLg: spacing[12], // 48px
  containerXl: spacing[16], // 64px
} as const;

export type SpacingToken = typeof spacing;
export type SemanticSpacingToken = typeof semanticSpacing;
