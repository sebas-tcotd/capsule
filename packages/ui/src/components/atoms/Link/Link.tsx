import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type AnchorHTMLAttributes } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";

const linkVariants = cva(
  [
    "inline-flex items-center gap-1 transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        inline: "underline underline-offset-2 hover:underline-offset-4",
        standalone: "no-underline hover:underline underline-offset-2",
      },
      colorScheme: {
        primary: [
          "text-primary-600 hover:text-primary-700",
          "focus-visible:ring-primary-500",
        ],
        accent: [
          "text-accent-600 hover:text-accent-700",
          "focus-visible:ring-accent-500",
        ],
      },
    },
    defaultVariants: {
      variant: "inline",
      colorScheme: "primary",
    },
  },
);

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  /**
   * Whether the link opens in a new tab
   */
  isExternal?: boolean;
}

/**
 * Link component for navigation
 *
 * @example
 * ```tsx
 * <Link href="/about">About</Link>
 * <Link href="https://example.com" isExternal>External</Link>
 * <Link href="/docs" variant="standalone" colorScheme="accent">Documentation</Link>
 * ```
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, variant, colorScheme, isExternal, children, ...props },
    ref,
  ) => {
    const externalProps = isExternal
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

    return (
      <a
        ref={ref}
        className={cn(linkVariants({ variant, colorScheme, className }))}
        {...externalProps}
        {...props}
      >
        {children}
        {isExternal && (
          <ExternalLink
            className="w-3.5 h-3.5 inline-block"
            aria-hidden="true"
          />
        )}
      </a>
    );
  },
);

Link.displayName = createDisplayName("Link", "atom");
