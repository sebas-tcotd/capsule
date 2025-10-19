import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

// Define variants using CVA
const inputVariants = cva(
  // Base styles
  [
    "w-full rounded-md border transition-colors",
    "placeholder:text-neutral-400",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50",
  ],
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-base",
        lg: "h-14 px-6 text-lg",
      },
      variant: {
        default: [
          "border-neutral-300 bg-white text-neutral-900",
          "hover:border-neutral-400",
          "focus:border-primary-500 focus:ring-primary-500",
        ],
        error: [
          "border-error-500 bg-error-50 text-error-900",
          "hover:border-error-600",
          "focus:border-error-500 focus:ring-error-500",
        ],
        success: [
          "border-success-500 bg-success-50 text-success-900",
          "hover:border-success-600",
          "focus:border-success-500 focus:ring-success-500",
        ],
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      fullWidth: false,
    },
  },
);

// Props interface
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: ReactNode;
  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: ReactNode;
}

// ========================================
// MAIN COMPONENT (const arrow function)
// ========================================

/**
 * Input component for text entry
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter your email" />
 * <Input variant="error" leftIcon={<MailIcon />} />
 * <Input size="lg" fullWidth />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      variant,
      fullWidth,
      leftIcon,
      rightIcon,
      type = "text",
      ...props
    },
    ref,
  ) => {
    // If there are icons, we need a wrapper
    const hasIcons = leftIcon || rightIcon;

    if (hasIcons) {
      return (
        <InputWrapper fullWidth={fullWidth ?? false}>
          {leftIcon && <InputIcon position="left">{leftIcon}</InputIcon>}
          <input
            ref={ref}
            type={type}
            className={cn(
              inputVariants({ size, variant, fullWidth, className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
            )}
            {...props}
          />
          {rightIcon && <InputIcon position="right">{rightIcon}</InputIcon>}
        </InputWrapper>
      );
    }

    // Simple input without icons
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ size, variant, fullWidth, className }))}
        {...props}
      />
    );
  },
);

Input.displayName = createDisplayName("Input", "atom");

interface InputWrapperProps {
  children: ReactNode;
  fullWidth: boolean;
}

function InputWrapper({ children, fullWidth }: InputWrapperProps): ReactNode {
  return (
    <div
      className={cn(
        "relative inline-flex items-center",
        fullWidth ? "w-full" : "w-auto",
      )}
    >
      {children}
    </div>
  );
}

interface InputIconProps {
  children: ReactNode;
  position: "left" | "right";
}

function InputIcon({ children, position }: InputIconProps): ReactNode {
  return (
    <div
      className={cn(
        "absolute inset-y-0 flex items-center pointer-events-none text-neutral-500",
        position === "left" ? "left-3" : "right-3",
      )}
    >
      {children}
    </div>
  );
}
