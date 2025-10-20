import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  // Base styles
  [
    "inline-flex items-center gap-1.5",
    "rounded-md font-medium transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2 bg-transparent",
        subtle: "",
      },
      colorScheme: {
        primary: "",
        accent: "",
        success: "",
        warning: "",
        error: "",
        info: "",
        neutral: "",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500 text-white focus:ring-primary-500",
      },
      {
        variant: "solid",
        colorScheme: "accent",
        className: "bg-accent-500 text-white focus:ring-accent-500",
      },
      {
        variant: "solid",
        colorScheme: "success",
        className: "bg-success-500 text-white focus:ring-success-500",
      },
      {
        variant: "solid",
        colorScheme: "warning",
        className: "bg-warning-500 text-white focus:ring-warning-500",
      },
      {
        variant: "solid",
        colorScheme: "error",
        className: "bg-error-500 text-white focus:ring-error-500",
      },
      {
        variant: "solid",
        colorScheme: "info",
        className: "bg-info-500 text-white focus:ring-info-500",
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        className: "bg-neutral-500 text-white focus:ring-neutral-500",
      },
      // Outline variants
      {
        variant: "outline",
        colorScheme: "primary",
        className: "border-primary-500 text-primary-700 focus:ring-primary-500",
      },
      {
        variant: "outline",
        colorScheme: "accent",
        className: "border-accent-500 text-accent-700 focus:ring-accent-500",
      },
      {
        variant: "outline",
        colorScheme: "success",
        className: "border-success-500 text-success-700 focus:ring-success-500",
      },
      {
        variant: "outline",
        colorScheme: "warning",
        className: "border-warning-500 text-warning-700 focus:ring-warning-500",
      },
      {
        variant: "outline",
        colorScheme: "error",
        className: "border-error-500 text-error-700 focus:ring-error-500",
      },
      {
        variant: "outline",
        colorScheme: "info",
        className: "border-info-500 text-info-700 focus:ring-info-500",
      },
      {
        variant: "outline",
        colorScheme: "neutral",
        className: "border-neutral-500 text-neutral-700 focus:ring-neutral-500",
      },
      // Subtle variants
      {
        variant: "subtle",
        colorScheme: "primary",
        className: "bg-primary-100 text-primary-800 focus:ring-primary-500",
      },
      {
        variant: "subtle",
        colorScheme: "accent",
        className: "bg-accent-100 text-accent-800 focus:ring-accent-500",
      },
      {
        variant: "subtle",
        colorScheme: "success",
        className: "bg-success-100 text-success-800 focus:ring-success-500",
      },
      {
        variant: "subtle",
        colorScheme: "warning",
        className: "bg-warning-100 text-warning-800 focus:ring-warning-500",
      },
      {
        variant: "subtle",
        colorScheme: "error",
        className: "bg-error-100 text-error-800 focus:ring-error-500",
      },
      {
        variant: "subtle",
        colorScheme: "info",
        className: "bg-info-100 text-info-800 focus:ring-info-500",
      },
      {
        variant: "subtle",
        colorScheme: "neutral",
        className: "bg-neutral-100 text-neutral-800 focus:ring-neutral-500",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
    },
  },
);
