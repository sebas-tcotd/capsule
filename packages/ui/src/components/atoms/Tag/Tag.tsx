import { cva, type VariantProps } from "class-variance-authority";
import {
  cloneElement,
  forwardRef,
  JSX,
  type HTMLAttributes,
  type ReactElement,
} from "react";
import { X } from "lucide-react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const tagVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-md font-medium transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2 bg-transparent",
        subtle: "",
      },
      colorScheme: {
        primary: "",
        accent: "",
        success: "",
        warning: "",
        error: "",
        info: "",
        neutral: "",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500 text-white focus:ring-primary-500",
      },
      {
        variant: "solid",
        colorScheme: "accent",
        className: "bg-accent-500 text-white focus:ring-accent-500",
      },
      {
        variant: "solid",
        colorScheme: "success",
        className: "bg-success-500 text-white focus:ring-success-500",
      },
      {
        variant: "solid",
        colorScheme: "warning",
        className: "bg-warning-500 text-white focus:ring-warning-500",
      },
      {
        variant: "solid",
        colorScheme: "error",
        className: "bg-error-500 text-white focus:ring-error-500",
      },
      {
        variant: "solid",
        colorScheme: "info",
        className: "bg-info-500 text-white focus:ring-info-500",
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        className: "bg-neutral-500 text-white focus:ring-neutral-500",
      },
      // Outline variants
      {
        variant: "outline",
        colorScheme: "primary",
        className: "border-primary-500 text-primary-700 focus:ring-primary-500",
      },
      {
        variant: "outline",
        colorScheme: "accent",
        className: "border-accent-500 text-accent-700 focus:ring-accent-500",
      },
      {
        variant: "outline",
        colorScheme: "success",
        className: "border-success-500 text-success-700 focus:ring-success-500",
      },
      {
        variant: "outline",
        colorScheme: "warning",
        className: "border-warning-500 text-warning-700 focus:ring-warning-500",
      },
      {
        variant: "outline",
        colorScheme: "error",
        className: "border-error-500 text-error-700 focus:ring-error-500",
      },
      {
        variant: "outline",
        colorScheme: "info",
        className: "border-info-500 text-info-700 focus:ring-info-500",
      },
      {
        variant: "outline",
        colorScheme: "neutral",
        className: "border-neutral-500 text-neutral-700 focus:ring-neutral-500",
      },
      // Subtle variants
      {
        variant: "subtle",
        colorScheme: "primary",
        className: "bg-primary-100 text-primary-800 focus:ring-primary-500",
      },
      {
        variant: "subtle",
        colorScheme: "accent",
        className: "bg-accent-100 text-accent-800 focus:ring-accent-500",
      },
      {
        variant: "subtle",
        colorScheme: "success",
        className: "bg-success-100 text-success-800 focus:ring-success-500",
      },
      {
        variant: "subtle",
        colorScheme: "warning",
        className: "bg-warning-100 text-warning-800 focus:ring-warning-500",
      },
      {
        variant: "subtle",
        colorScheme: "error",
        className: "bg-error-100 text-error-800 focus:ring-error-500",
      },
      {
        variant: "subtle",
        colorScheme: "info",
        className: "bg-info-100 text-info-800 focus:ring-info-500",
      },
      {
        variant: "subtle",
        colorScheme: "neutral",
        className: "bg-neutral-100 text-neutral-800 focus:ring-neutral-500",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
    },
  },
);

const iconSizeVariants = cva("", {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-3.5 h-3.5",
      lg: "w-4 h-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TagProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  /**
   * Icon to display on the left
   */
  leftIcon?: ReactElement;
  /**
   * Icon to display on the right
   */
  rightIcon?: ReactElement;
  /**
   * Callback when close button is clicked
   */
  onClose?: () => void;
}

/**
 * Tag component for labels and categorization
 *
 * @example
 * ```tsx
 * <Tag>Default</Tag>
 * <Tag variant="outline" colorScheme="success">Active</Tag>
 * <Tag variant="subtle" onClose={() => {}}>Removable</Tag>
 * <Tag leftIcon={<Star />}>Featured</Tag>
 * ```
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant,
      colorScheme,
      size,
      leftIcon,
      rightIcon,
      onClose,
      children,
      ...props
    },
    ref,
  ) => {
    // Clone icons and add size classes
    const leftIconWithSize = leftIcon
      ? cloneElement(leftIcon, {
          className: cn(
            iconSizeVariants({ size }),
            (leftIcon.props as { className?: string }).className,
          ),
        } as Partial<unknown>)
      : null;

    const rightIconWithSize = rightIcon
      ? cloneElement(rightIcon, {
          className: cn(
            iconSizeVariants({ size }),
            (rightIcon.props as { className?: string }).className,
          ),
        } as Partial<unknown>)
      : null;

    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, colorScheme, size, className }))}
        {...props}
      >
        {leftIconWithSize}
        {children}
        {rightIconWithSize}
        {onClose && <CloseButton onClick={onClose} size={size} />}
      </span>
    );
  },
);

Tag.displayName = createDisplayName("Tag", "atom");

// Sub-components
interface CloseButtonProps {
  onClick: () => void;
  size?: "sm" | "md" | "lg" | null;
}

function CloseButton({ onClick, size }: CloseButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="ml-0.5 hover:opacity-70 focus:outline-none focus:opacity-70 transition-opacity"
      aria-label="Remove tag"
    >
      <X className={cn(iconSizeVariants({ size }))} />
    </button>
  );
}
