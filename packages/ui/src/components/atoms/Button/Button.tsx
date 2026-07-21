import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

/**
 * Button variants: `intent` (semantic meaning) x `tone` (visual treatment),
 * the same two-axis pattern Badge/Tag already use via `colorScheme` x `variant`.
 * See docs/ui-component-inventory.md "Convención de variantes: Intent x Tone".
 *
 * Maps onto the UX spec's three-tier "Button Hierarchy (Tactile Luxury)":
 * Primary/Deploy = intent="primary" tone="solid"
 * Secondary/Choice = intent="primary" tone="ghost"
 * Tertiary/Support = tone="text" (any intent)
 */
const buttonVariants = cva(
  // Base styles
  [
    "inline-flex items-center justify-center gap-2",
    "squircle rounded-xl font-medium",
    // Spring physics, not a linear ease — see ux-design-specification.md
    // "Material Direction Refinement" / "Soft Scale Feedback".
    "transition-[transform,box-shadow,background-color,border-color,color] duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
    "active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-auto",
  ],
  {
    variants: {
      intent: {
        primary: "",
        neutral: "",
        danger: "",
      },
      tone: {
        solid: "",
        outline: "",
        ghost: "",
        text: "",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      // ---- Solid: selective New Neumorphism — light-to-base gradient (not a
      // flat fill), a 1px precision border, and a layered shadow (an inset
      // top highlight for the glossy catch-light + two outer shadows tinted
      // with the intent's own deep shade, not flat black). Mirrors the
      // reference preview's `.tone-solid` exactly — see
      // premium-studio-preview.html / docs/decisions/0002. ----
      {
        intent: "primary",
        tone: "solid",
        className:
          "bg-gradient-to-b from-primary-400 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 border border-primary-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_16px_-8px_rgba(44,67,86,0.4),0_2px_6px_-1px_rgba(44,67,86,0.4)] focus-visible:ring-primary-500",
      },
      {
        intent: "neutral",
        tone: "solid",
        className:
          "bg-gradient-to-b from-neutral-600 to-neutral-700 text-white hover:from-neutral-700 hover:to-neutral-800 border border-neutral-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_16px_-8px_rgba(51,47,41,0.35),0_2px_6px_-1px_rgba(51,47,41,0.35)] focus-visible:ring-neutral-500",
      },
      {
        intent: "danger",
        tone: "solid",
        className:
          "bg-gradient-to-b from-error-400 to-error-500 text-white hover:from-error-500 hover:to-error-600 border border-error-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_16px_-8px_rgba(96,45,34,0.4),0_2px_6px_-1px_rgba(96,45,34,0.4)] focus-visible:ring-error-500",
      },

      // ---- Outline: 1px precision border, no fill ----
      {
        intent: "primary",
        tone: "outline",
        className:
          "border border-primary-500 text-primary-600 bg-transparent hover:bg-primary-50 focus-visible:ring-primary-500",
      },
      {
        intent: "neutral",
        tone: "outline",
        className:
          "border border-neutral-400 text-neutral-700 bg-transparent hover:bg-neutral-100 focus-visible:ring-neutral-500",
      },
      {
        intent: "danger",
        tone: "outline",
        className:
          "border border-error-500 text-error-600 bg-transparent hover:bg-error-50 focus-visible:ring-error-500",
      },

      // ---- Ghost: Glassmorphism (translucent + backdrop-blur) — plus the
      // soft ambient shadow the reference preview gives it (a glass surface
      // still casts a little depth, it isn't perfectly flat against the page). ----
      {
        intent: "primary",
        tone: "ghost",
        className:
          "text-primary-700 bg-primary-50/60 backdrop-blur-md border border-primary-500/20 shadow-[0_4px_14px_-6px_rgba(28,20,12,0.12)] hover:bg-primary-50/80 focus-visible:ring-primary-500",
      },
      {
        intent: "neutral",
        tone: "ghost",
        className:
          "text-neutral-700 bg-white/50 backdrop-blur-md border border-neutral-300/40 shadow-[0_4px_14px_-6px_rgba(28,20,12,0.12)] hover:bg-white/70 focus-visible:ring-neutral-500",
      },
      {
        intent: "danger",
        tone: "ghost",
        className:
          "text-error-700 bg-error-50/60 backdrop-blur-md border border-error-500/20 shadow-[0_4px_14px_-6px_rgba(28,20,12,0.12)] hover:bg-error-50/80 focus-visible:ring-error-500",
      },

      // ---- Text: Tertiary/Support — no chrome, light weight, wide tracking ----
      {
        intent: "primary",
        tone: "text",
        className:
          "text-primary-700 bg-transparent font-light tracking-wide hover:text-primary-800 focus-visible:ring-primary-500",
      },
      {
        intent: "neutral",
        tone: "text",
        className:
          "text-neutral-600 bg-transparent font-light tracking-wide hover:text-neutral-800 focus-visible:ring-neutral-500",
      },
      {
        intent: "danger",
        tone: "text",
        className:
          "text-error-600 bg-transparent font-light tracking-wide hover:text-error-700 focus-visible:ring-error-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      tone: "solid",
      size: "md",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will be rendered as a loading state
   */
  isLoading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      intent,
      tone,
      size,
      fullWidth,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ intent, tone, size, fullWidth, className }),
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = createDisplayName("Button", "atom");
