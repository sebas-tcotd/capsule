import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, JSX, type InputHTMLAttributes } from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const radioVariants = cva(
  [
    "appearance-none rounded-full border-2 transition-all cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "checked:border-transparent",
    "relative",
  ],
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      colorScheme: {
        primary: [
          "border-neutral-300",
          "checked:bg-primary-500",
          "focus:ring-primary-500",
        ],
        accent: [
          "border-neutral-300",
          "checked:bg-accent-500",
          "focus:ring-accent-500",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  },
);

const labelVariants = cva("inline-flex items-center gap-2 cursor-pointer", {
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof radioVariants> {
  /**
   * Label text for the radio button
   */
  label?: string;
}

/**
 * Radio component for forms and selections
 *
 * @example
 * ```tsx
 * <Radio name="option" value="1" label="Option 1" />
 * <Radio name="option" value="2" label="Option 2" />
 * <Radio size="lg" colorScheme="accent" label="Large radio" />
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size, colorScheme, label, disabled, ...props }, ref) => {
    const radio = (
      <div className="relative inline-flex">
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className={cn(radioVariants({ size, colorScheme, className }))}
          {...props}
        />
        <RadioDot size={size} />
      </div>
    );

    if (label) {
      return (
        <label className={labelVariants({ disabled: disabled ?? false })}>
          {radio}
          <span className="select-none">{label}</span>
        </label>
      );
    }

    return radio;
  },
);

Radio.displayName = createDisplayName("Radio", "atom");

// Sub-components
interface RadioDotProps {
  size?: "sm" | "md" | "lg" | null;
}

function RadioDot({ size }: RadioDotProps): JSX.Element {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  const sizeClass = size ? sizeClasses[size] : sizeClasses.md;

  return (
    <span
      className={cn(
        "absolute inset-0 m-auto pointer-events-none bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity",
        sizeClass,
      )}
      aria-hidden="true"
    />
  );
}
