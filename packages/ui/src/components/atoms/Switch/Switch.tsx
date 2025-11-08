import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  useState,
  useEffect,
} from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const switchVariants = cva(
  [
    "relative inline-flex items-center rounded-full transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
      colorScheme: {
        primary: [
          "bg-neutral-300",
          "aria-checked:bg-primary-500",
          "focus:ring-primary-500",
        ],
        accent: [
          "bg-neutral-300",
          "aria-checked:bg-accent-500",
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

const thumbVariants = cva(
  [
    "pointer-events-none inline-block rounded-full bg-white shadow-lg transform transition-transform",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      checked: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Small size translations
      { size: "sm", checked: false, className: "translate-x-0.5" },
      { size: "sm", checked: true, className: "translate-x-4.5" },
      // Medium size translations
      { size: "md", checked: false, className: "translate-x-0.5" },
      { size: "md", checked: true, className: "translate-x-5.5" },
      // Large size translations
      { size: "lg", checked: false, className: "translate-x-0.5" },
      { size: "lg", checked: true, className: "translate-x-7.5" },
    ],
    defaultVariants: {
      size: "md",
      checked: false,
    },
  },
);

const labelWrapperVariants = cva("inline-flex items-center gap-2", {
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export interface SwitchProps
  extends Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "onChange" | "size" | "children"
    >,
    VariantProps<typeof switchVariants> {
  /**
   * Whether the switch is checked
   */
  checked?: boolean;
  /**
   * Label text for the switch
   */
  label?: string;
  /**
   * Position of the label relative to the switch
   */
  labelPosition?: "left" | "right";
  /**
   * Callback when switch state changes
   */
  onChange?: (checked: boolean) => void;
}

/**
 * Switch component for toggle controls
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" />
 * <Switch checked onChange={(checked) => console.log(checked)} />
 * <Switch size="lg" colorScheme="accent" label="Dark mode" labelPosition="left" />
 * ```
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      size,
      colorScheme,
      checked: controlledChecked,
      label,
      labelPosition = "right",
      onChange,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(false);

    // Use controlled value if provided, otherwise use internal state
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : uncontrolledChecked;

    useEffect(() => {
      if (!isControlled && controlledChecked !== undefined) {
        setUncontrolledChecked(controlledChecked);
      }
    }, [controlledChecked, isControlled]);

    const handleClick = (): void => {
      if (disabled) return;

      const newChecked = !checked;

      if (!isControlled) {
        setUncontrolledChecked(newChecked);
      }

      onChange?.(newChecked);
    };

    const switchElement = (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleClick}
        className={cn(switchVariants({ size, colorScheme, className }))}
        {...props}
      >
        <span className={thumbVariants({ size, checked })} />
      </button>
    );

    if (label) {
      return (
        <label
          className={labelWrapperVariants({ disabled: disabled ?? false })}
        >
          {labelPosition === "left" && (
            <span className="select-none">{label}</span>
          )}
          {switchElement}
          {labelPosition === "right" && (
            <span className="select-none">{label}</span>
          )}
        </label>
      );
    }

    return switchElement;
  },
);

Switch.displayName = createDisplayName("Switch", "atom");
