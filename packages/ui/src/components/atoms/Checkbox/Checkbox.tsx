import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type InputHTMLAttributes,
  JSX,
  useEffect,
  useRef,
} from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const checkboxVariants = cva(
  [
    "appearance-none rounded border-2 transition-all cursor-pointer",
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
          "indeterminate:bg-primary-500",
        ],
        accent: [
          "border-neutral-300",
          "checked:bg-accent-500",
          "focus:ring-accent-500",
          "indeterminate:bg-accent-500",
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

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxVariants> {
  /**
   * Label text for the checkbox
   */
  label?: string;
  /**
   * Whether the checkbox is in an indeterminate state
   */
  indeterminate?: boolean;
}

/**
 * Checkbox component for forms and selections
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" />
 * <Checkbox label="Select all" indeterminate />
 * <Checkbox size="lg" colorScheme="accent" label="Large checkbox" />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, size, colorScheme, label, indeterminate, disabled, ...props },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const checkboxRef = ref || internalRef;

    useEffect(() => {
      const element = (checkboxRef as React.RefObject<HTMLInputElement>)
        .current;
      if (element) {
        element.indeterminate = indeterminate ?? false;
      }
    }, [indeterminate, checkboxRef]);

    const checkbox = (
      <div className="relative inline-flex">
        <input
          ref={checkboxRef}
          type="checkbox"
          disabled={disabled}
          className={cn(checkboxVariants({ size, colorScheme, className }))}
          aria-checked={indeterminate ? "mixed" : props.checked}
          {...props}
        />
        <CheckIcon size={size} />
        <IndeterminateIcon size={size} indeterminate={indeterminate} />
      </div>
    );

    if (label) {
      return (
        <label className={labelVariants({ disabled: disabled ?? false })}>
          {checkbox}
          <span className="select-none">{label}</span>
        </label>
      );
    }

    return checkbox;
  },
);

Checkbox.displayName = createDisplayName("Checkbox", "atom");

// Sub-components
interface CheckIconProps {
  size?: "sm" | "md" | "lg" | null;
}

function CheckIcon({ size }: CheckIconProps): JSX.Element {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-4 h-4",
  };

  const sizeClass = size ? sizeClasses[size] : sizeClasses.md;

  return (
    <svg
      className={cn(
        "absolute inset-0 m-auto pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity",
        sizeClass,
      )}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </svg>
  );
}

interface IndeterminateIconProps {
  size?: "sm" | "md" | "lg" | null;
  indeterminate?: boolean;
}

function IndeterminateIcon({
  size,
  indeterminate,
}: IndeterminateIconProps): JSX.Element {
  const sizeClasses = {
    sm: "w-2 h-0.5",
    md: "w-2.5 h-0.5",
    lg: "w-3 h-0.5",
  };

  const sizeClass = size ? sizeClasses[size] : sizeClasses.md;

  return (
    <span
      className={cn(
        "absolute inset-0 m-auto pointer-events-none bg-white rounded-sm transition-opacity",
        indeterminate ? "opacity-100" : "opacity-0",
        sizeClass,
      )}
      aria-hidden="true"
    />
  );
}
