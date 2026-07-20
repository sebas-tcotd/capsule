import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-medium transition-all active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2 bg-transparent",
        ghost: "bg-transparent",
      },
      colorScheme: {
        primary: "",
        accent: "",
        error: "",
        neutral: "",
      },
      size: {
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
      },
      isRound: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    compoundVariants: [
      // Solid variants — selective New Neumorphism (shadow-studio + precision
      // border), same treatment as Button's solid variants.
      {
        variant: "solid",
        colorScheme: "primary",
        className:
          "bg-primary-500 text-white hover:bg-primary-600 border border-primary-700 shadow-studio focus-visible:ring-primary-500",
      },
      {
        variant: "solid",
        colorScheme: "accent",
        className:
          "bg-accent-500 text-white hover:bg-accent-600 border border-accent-700 shadow-studio focus-visible:ring-accent-500",
      },
      {
        variant: "solid",
        colorScheme: "error",
        className:
          "bg-error-500 text-white hover:bg-error-600 border border-error-700 shadow-studio focus-visible:ring-error-500",
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        className:
          "bg-neutral-500 text-white hover:bg-neutral-600 border border-neutral-700 shadow-studio focus-visible:ring-neutral-500",
      },
      // Outline variants
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "border-primary-500 text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-500",
      },
      {
        variant: "outline",
        colorScheme: "accent",
        className:
          "border-accent-500 text-accent-700 hover:bg-accent-50 focus-visible:ring-accent-500",
      },
      {
        variant: "outline",
        colorScheme: "error",
        className:
          "border-error-500 text-error-700 hover:bg-error-50 focus-visible:ring-error-500",
      },
      {
        variant: "outline",
        colorScheme: "neutral",
        className:
          "border-neutral-500 text-neutral-700 hover:bg-neutral-50 focus-visible:ring-neutral-500",
      },
      // Ghost variants
      {
        variant: "ghost",
        colorScheme: "primary",
        className:
          "text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500",
      },
      {
        variant: "ghost",
        colorScheme: "accent",
        className:
          "text-accent-500 hover:bg-accent-50 focus-visible:ring-accent-500",
      },
      {
        variant: "ghost",
        colorScheme: "error",
        className:
          "text-error-500 hover:bg-error-50 focus-visible:ring-error-500",
      },
      {
        variant: "ghost",
        colorScheme: "neutral",
        className:
          "text-neutral-500 hover:bg-neutral-50 focus-visible:ring-neutral-500",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
      isRound: false,
    },
  },
);

export const iconSizeVariants = cva("", {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
