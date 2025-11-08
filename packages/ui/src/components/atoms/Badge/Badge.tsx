import { type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { forwardRef, type JSX, type HTMLAttributes } from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";
import { badgeVariants } from "./Badge.cva";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Whether the badge can be removed
   */
  removable?: boolean;
  /**
   * Callback when remove button is clicked
   */
  onRemove?: () => void;
  /**
   * Show a dot before the text
   */
  dot?: boolean;
}

/**
 * Badge component for status indicators and labels
 *
 * @example
 * ```tsx
 * <Badge variant="solid" colorScheme="success">Active</Badge>
 * <Badge variant="outline" colorScheme="warning" removable onRemove={() => {}}>Pending</Badge>
 * <Badge variant="subtle" colorScheme="info" dot>New</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      colorScheme,
      size,
      removable,
      onRemove,
      dot,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, colorScheme, size, className }))}
        {...props}
      >
        {dot && <DotIndicator />}
        {children}
        {removable && onRemove && <RemoveButton onClick={onRemove} />}
      </span>
    );
  },
);

Badge.displayName = createDisplayName("Badge", "atom");

// Sub-components
function DotIndicator(): JSX.Element {
  return <span className="w-1.5 h-1.5 rounded-full bg-current" />;
}

interface RemoveButtonProps {
  onClick: () => void;
}

function RemoveButton({ onClick }: RemoveButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="ml-1 hover:opacity-70 focus:outline-none focus:opacity-70 transition-opacity"
      aria-label="Remove badge"
    >
      <X className="w-3 h-3" />
    </button>
  );
}
