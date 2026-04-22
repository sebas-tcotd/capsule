import { cva, type VariantProps } from "class-variance-authority";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const squircleBoxVariants = cva(
  // Base styles - Squircle geometry with continuous curvature
  ["squircle", "rounded-2xl", "transition-all", "duration-200"],
  {
    variants: {
      variant: {
        surface: ["bg-greige"],
        elevated: ["bg-bone", "shadow-studio"],
        outline: ["bg-transparent", "border", "border-neutral-200"],
      },
      size: {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
      },
    },
    defaultVariants: {
      variant: "surface",
      size: "md",
    },
  },
);

type PolymorphicRef<E extends ElementType> = ComponentPropsWithoutRef<E>["ref"];

type SquircleBoxOwnProps<E extends ElementType = "div"> = {
  as?: E;
  children?: React.ReactNode;
} & VariantProps<typeof squircleBoxVariants>;

type SquircleBoxProps<E extends ElementType = "div"> = SquircleBoxOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof SquircleBoxOwnProps<E>>;

type SquircleBoxComponent = <E extends ElementType = "div">(
  props: SquircleBoxProps<E> & { ref?: PolymorphicRef<E> },
) => React.ReactNode;

/**
 * SquircleBox - A container with continuous curvature (superellipse shape)
 *
 * The squircle shape provides a more organic, premium feel compared to
 * standard rounded corners. Used throughout the Premium Studio design system.
 *
 * @example
 * ```tsx
 * <SquircleBox variant="elevated" size="lg">
 *   Card content here
 * </SquircleBox>
 * ```
 */
export const SquircleBox = forwardRef(function SquircleBox<
  E extends ElementType = "div",
>(
  { as, className, variant, size, children, ...props }: SquircleBoxProps<E>,
  ref: PolymorphicRef<E>,
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={cn(squircleBoxVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Component>
  );
}) as SquircleBoxComponent & { displayName?: string };

SquircleBox.displayName = createDisplayName("SquircleBox", "atom");

export type { SquircleBoxProps };
