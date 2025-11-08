import { type VariantProps } from "class-variance-authority";
import {
  cloneElement,
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactElement,
} from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";
import { iconButtonVariants, iconSizeVariants } from "./IconButton.styles";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /**
   * Icon element to display (required)
   */
  icon: ReactElement;
  /**
   * Accessible label (required for accessibility)
   */
  "aria-label": string;
}

/**
 * IconButton component for icon-only actions
 *
 * @example
 * ```tsx
 * <IconButton icon={<X />} aria-label="Close" />
 * <IconButton icon={<Search />} aria-label="Search" variant="outline" />
 * <IconButton icon={<Plus />} aria-label="Add" size="lg" isRound />
 * ```
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      colorScheme,
      size,
      isRound,
      icon,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    // Clone the icon element and add size classes
    const iconWithSize = icon
      ? cloneElement(icon, {
          className: cn(
            iconSizeVariants({ size }),
            (icon.props as { className?: string }).className,
          ),
        } as Partial<unknown>)
      : null;

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        className={cn(
          iconButtonVariants({
            variant,
            colorScheme,
            size,
            isRound,
            className,
          }),
        )}
        {...props}
      >
        {iconWithSize}
      </button>
    );
  },
);

IconButton.displayName = createDisplayName("IconButton", "atom");
