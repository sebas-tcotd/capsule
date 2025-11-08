import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const dividerVariants = cva(["border-neutral-300"], {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
  },
});

const containerVariants = cva(["flex items-center"], {
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "h-full flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof dividerVariants> {
  /**
   * Optional label to display in the middle of the divider
   */
  label?: string;
}

/**
 * Divider component for visual separation
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider variant="dashed" />
 * <Divider orientation="vertical" />
 * <Divider label="OR" />
 * ```
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation, variant, label, ...props }, ref) => {
    // If there's a label, render a different structure
    if (label) {
      const isHorizontal = orientation === "horizontal";

      return (
        <div
          className={cn(containerVariants({ orientation }))}
          role="separator"
          aria-orientation={orientation!}
        >
          <hr
            className={cn(dividerVariants({ orientation, variant }), "flex-1")}
            aria-hidden="true"
          />
          <span
            className={cn(
              "text-sm text-neutral-500 font-medium select-none",
              isHorizontal ? "px-3" : "py-3",
            )}
          >
            {label}
          </span>
          <hr
            className={cn(dividerVariants({ orientation, variant }), "flex-1")}
            aria-hidden="true"
          />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn(dividerVariants({ orientation, variant, className }))}
        {...props}
      />
    );
  },
);

Divider.displayName = createDisplayName("Divider", "atom");
