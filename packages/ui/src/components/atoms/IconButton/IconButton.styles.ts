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
      // Solid variants — selective New Neumorphism: light-to-base gradient +
      // precision border + a layered shadow (inset top highlight + two
      // intent-tinted outer shadows), same treatment as Button's solid tone.
      {
        variant: "solid",
        colorScheme: "primary",
        className:
          "bg-gradient-to-b from-primary-400 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 border border-primary-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_16px_-8px_rgba(44,67,86,0.4),0_2px_6px_-1px_rgba(44,67,86,0.4)] focus-visible:ring-primary-500",
      },
      {
        variant: "solid",
        colorScheme: "accent",
        className:
          "bg-gradient-to-b from-accent-400 to-accent-500 text-white hover:from-accent-500 hover:to-accent-600 border border-accent-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_16px_-8px_rgba(143,84,61,0.4),0_2px_6px_-1px_rgba(143,84,61,0.4)] focus-visible:ring-accent-500",
      },
      {
        variant: "solid",
        colorScheme: "error",
        className:
          "bg-gradient-to-b from-error-400 to-error-500 text-white hover:from-error-500 hover:to-error-600 border border-error-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_16px_-8px_rgba(96,45,34,0.4),0_2px_6px_-1px_rgba(96,45,34,0.4)] focus-visible:ring-error-500",
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        className:
          "bg-gradient-to-b from-neutral-400 to-neutral-500 text-white hover:from-neutral-500 hover:to-neutral-600 border border-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_16px_-8px_rgba(79,73,63,0.35),0_2px_6px_-1px_rgba(79,73,63,0.35)] focus-visible:ring-neutral-500",
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
