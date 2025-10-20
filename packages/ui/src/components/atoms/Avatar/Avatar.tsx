import { type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes, useState } from "react";
import { cn } from "../../../utils";
import { createDisplayName } from "../../../utils/displayName";
import { avatarVariants, fallbackColors } from "./Avatar.styles";

export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Name to generate initials from (required)
   */
  name: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * Custom fallback color class
   */
  fallbackColor?: string;
}

/**
 * Avatar component for user profiles
 *
 * @example
 * ```tsx
 * <Avatar name="John Doe" />
 * <Avatar name="Jane Smith" src="/avatar.jpg" />
 * <Avatar name="Bob Johnson" size="lg" variant="rounded" />
 * ```
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    { className, size, variant, src, name, alt, fallbackColor, ...props },
    ref,
  ) => {
    const [imageError, setImageError] = useState(false);
    const shouldShowImage = src && !imageError;

    const initials = getInitials(name);
    const defaultFallbackColor =
      fallbackColor || getFallbackColor(name, fallbackColors);

    return (
      <span
        ref={ref}
        className={cn(
          avatarVariants({ size, variant }),
          !shouldShowImage && defaultFallbackColor,
          className,
        )}
        {...props}
      >
        {shouldShowImage ? (
          <img
            src={src}
            alt={alt || name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span aria-label={name}>{initials}</span>
        )}
      </span>
    );
  },
);

Avatar.displayName = createDisplayName("Avatar", "atom");

// Helper functions
function getInitials(name: string): string {
  const trimmedName = name.trim();

  if (!trimmedName) return "?";

  const parts = trimmedName.split(" ").filter((part) => part.length > 0);

  if (parts.length === 0) return "?";
  if (parts[0] === undefined) return "?";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  // Get first letter of first and last name
  const [first, ...rest] = parts;
  const firstInitial = first.charAt(0).toUpperCase();
  const last = rest.at(-1) ?? first;
  const lastInitial = last.charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
}

function getFallbackColor(name: string, colors: string[]): string {
  // Generate a consistent color based on the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index]!;
}
