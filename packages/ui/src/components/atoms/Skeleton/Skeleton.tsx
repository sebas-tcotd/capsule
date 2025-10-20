import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const skeletonVariants = cva(
  ["bg-neutral-200 animate-pulse relative overflow-hidden"],
  {
    variants: {
      variant: {
        text: "rounded h-4",
        circle: "rounded-full",
        rect: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  },
);

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /**
   * Width of the skeleton (CSS value)
   */
  width?: string | number;
  /**
   * Height of the skeleton (CSS value)
   */
  height?: string | number;
  /**
   * Whether the content is loaded
   */
  isLoaded?: boolean;
  /**
   * Children to show when loaded
   */
  children?: React.ReactNode;
}

/**
 * Skeleton component for loading states
 *
 * @example
 * ```tsx
 * <Skeleton />
 * <Skeleton variant="circle" width={40} height={40} />
 * <Skeleton variant="rect" width="100%" height={100} />
 * <Skeleton isLoaded={true}>Content loaded!</Skeleton>
 * ```
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant,
      width,
      height,
      isLoaded = false,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    // If loaded and has children, show the children
    if (isLoaded && children) {
      return <>{children}</>;
    }

    // If loaded but no children, don't render anything
    if (isLoaded) {
      return null;
    }

    const dimensionStyles: React.CSSProperties = {
      ...(width && { width: typeof width === "number" ? `${width}px` : width }),
      ...(height && {
        height: typeof height === "number" ? `${height}px` : height,
      }),
    };

    const inlineStyles: React.CSSProperties = {
      ...dimensionStyles,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, className }))}
        style={inlineStyles}
        aria-busy="true"
        aria-live="polite"
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);

Skeleton.displayName = createDisplayName("Skeleton", "atom");
