import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const spinnerVariants = cva(["animate-spin"], {
  variants: {
    size: {
      xs: "w-4 h-4",
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-12 h-12",
      xl: "w-16 h-16",
    },
    colorScheme: {
      primary: "text-primary-500",
      accent: "text-accent-500",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    colorScheme: "primary",
  },
});

export interface SpinnerProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof spinnerVariants> {
  /**
   * Accessible label for screen readers
   */
  label?: string;
}

/**
 * Spinner component for loading states
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner size="lg" colorScheme="accent" />
 * <Spinner label="Loading content..." />
 * ```
 */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, colorScheme, label = "Loading...", ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        className={cn("inline-block", className)}
        {...props}
      >
        <svg
          className={cn(spinnerVariants({ size, colorScheme }))}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
        <span className="sr-only">{label}</span>
      </span>
    );
  },
);

Spinner.displayName = createDisplayName("Spinner", "atom");
