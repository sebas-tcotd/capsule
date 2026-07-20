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
    "squircle rounded-xl font-medium transition-all",
    "active:scale-[0.98]", // Soft Scale Feedback — see ux-design-specification.md "Material Direction Refinement"
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
      // ---- Solid: selective New Neumorphism (shadow-studio + precision border) ----
      {
        intent: "primary",
        tone: "solid",
        className:
          "bg-primary-500 text-white hover:bg-primary-600 border border-primary-700 shadow-studio focus-visible:ring-primary-500",
      },
      {
        intent: "neutral",
        tone: "solid",
        className:
          "bg-neutral-700 text-white hover:bg-neutral-800 border border-neutral-800 shadow-studio focus-visible:ring-neutral-500",
      },
      {
        intent: "danger",
        tone: "solid",
        className:
          "bg-error-500 text-white hover:bg-error-600 border border-error-700 shadow-studio focus-visible:ring-error-500",
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

      // ---- Ghost: Glassmorphism (translucent + backdrop-blur) ----
      {
        intent: "primary",
        tone: "ghost",
        className:
          "text-primary-700 bg-primary-50/60 backdrop-blur-md border border-primary-500/20 hover:bg-primary-50/80 focus-visible:ring-primary-500",
      },
      {
        intent: "neutral",
        tone: "ghost",
        className:
          "text-neutral-700 bg-white/50 backdrop-blur-md border border-neutral-300/40 hover:bg-white/70 focus-visible:ring-neutral-500",
      },
      {
        intent: "danger",
        tone: "ghost",
        className:
          "text-error-700 bg-error-50/60 backdrop-blur-md border border-error-500/20 hover:bg-error-50/80 focus-visible:ring-error-500",
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
