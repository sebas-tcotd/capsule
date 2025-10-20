type AtomicLevel = "atom" | "molecule" | "organism" | "template";

interface DisplayNameConfig {
  /**
   * Whether to show Atomic Design prefixes in development
   * @default true in dev, false in production
   */
  showPrefix?: boolean;

  /**
   * Use emojis instead of text prefixes
   * @default true
   */
  useEmojis?: boolean;
}

const ATOMIC_PREFIXES: Record<AtomicLevel, { emoji: string; text: string }> = {
  atom: { emoji: "⚛️", text: "[Atom]" },
  molecule: { emoji: "🧬", text: "[Molecule]" },
  organism: { emoji: "🦠", text: "[Organism]" },
  template: { emoji: "📐", text: "[Template]" },
};

/**
 * Creates a displayName for React components following Atomic Design principles
 * In development: Shows prefix (emoji or text) + component name
 * In production: Shows only component name
 */
export function createDisplayName(
  componentName: string,
  level: AtomicLevel,
  config: DisplayNameConfig = {},
): string {
  const {
    showPrefix = process.env.NODE_ENV === "development",
    useEmojis = true,
  } = config;

  if (!showPrefix) {
    return componentName;
  }

  const prefix = useEmojis
    ? ATOMIC_PREFIXES[level].emoji
    : ATOMIC_PREFIXES[level].text;

  return `${prefix} ${componentName}`;
}
