/**
 * Capsule Design System - Color Tokens
 *
 * Primary: Charcoal (#2C2C2C) - Elegant, professional
 * Accent: Terracotta (#C67A5C) - Warm, friendly
 * Neutral: Gray scale for backgrounds and text
 */

export const colors = {
  // Primary - Charcoal (elegant dark)
  // Used for: Primary buttons, active states, headings
  primary: {
    50: "#F7F7F7", // Lightest tint
    100: "#E8E8E8",
    200: "#D1D1D1",
    300: "#ABABAB",
    400: "#6E6E6E",
    500: "#2C2C2C", // Base charcoal
    600: "#252525",
    700: "#1F1F1F",
    800: "#191919",
    900: "#141414",
    950: "#0A0A0A", // Almost black
  },

  // Accent - Terracotta (warm, inviting)
  // Used for: Highlights, notifications, hover states, visual interest
  accent: {
    50: "#FDF6F3", // Very light peachy
    100: "#FAEBE4",
    200: "#F5D7C9",
    300: "#EEBCA3",
    400: "#E19A76",
    500: "#C67A5C", // Base terracotta
    600: "#B8654A",
    700: "#9A4F3C",
    800: "#7E4336",
    900: "#683A2F",
    950: "#381D18",
  },

  // Neutral - Gray scale (Shadcn-inspired)
  // Used for: Backgrounds, borders, secondary text
  neutral: {
    50: "#FAFAFA", // Almost white
    100: "#F5F5F5", // Light background
    200: "#E5E5E5", // Borders
    300: "#D4D4D4", // Disabled states
    400: "#A3A3A3", // Placeholder text
    500: "#737373", // Secondary text
    600: "#525252", // Body text
    700: "#404040", // Dark text
    800: "#262626", // Headings (dark mode bg)
    900: "#171717", // Almost black
    950: "#0A0A0A", // Pure dark
  },

  // Semantic colors
  success: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E", // Base green
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
    950: "#052E16",
  },

  warning: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B", // Base amber
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
    950: "#451A03",
  },

  error: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444", // Base red
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
    950: "#450A0A",
  },

  info: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6", // Base blue
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
    950: "#172554",
  },

  // Background & Surface
  background: {
    light: "#FFFFFF",
    DEFAULT: "#FAFAFA",
    muted: "#F5F5F5",
  },

  surface: {
    light: "#FFFFFF",
    DEFAULT: "#FAFAFA",
    dark: "#F5F5F5",
  },

  // Border
  border: {
    light: "#E5E5E5",
    DEFAULT: "#D4D4D4",
    dark: "#A3A3A3",
  },

  // Text
  text: {
    primary: "#171717", // Almost black
    secondary: "#525252", // Gray
    tertiary: "#737373", // Light gray
    muted: "#A3A3A3", // Very light gray
    inverse: "#FFFFFF", // White (for dark backgrounds)
  },
} as const;

export type ColorToken = typeof colors;
