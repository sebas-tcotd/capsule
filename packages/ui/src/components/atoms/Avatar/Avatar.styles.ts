import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "inline-flex items-center justify-center overflow-hidden",
    "bg-neutral-200 text-neutral-700 font-medium",
    "select-none",
  ],
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        "2xl": "w-20 h-20 text-2xl",
      },
      variant: {
        circle: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "circle",
    },
  },
);

export const fallbackColors = [
  "bg-primary-500 text-white",
  "bg-accent-500 text-white",
  "bg-success-500 text-white",
  "bg-warning-500 text-white",
  "bg-error-500 text-white",
  "bg-info-500 text-white",
];
