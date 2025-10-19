/**
 * Safelist for Tailwind CSS v4
 *
 * This file forces Tailwind to generate classes that are used in CVA variants
 * in the @capsule/ui package. Tailwind v4 has difficulty parsing classes inside
 * CVA array structures, so we explicitly reference them here.
 *
 * This file is never executed - it's only scanned by Tailwind's content parser.
 */

// Button component classes
const _buttonClasses = `
  cursor-pointer
  bg-primary-500 bg-primary-600 bg-primary-50
  bg-accent-500 bg-accent-600
  bg-error-500 bg-error-600
  text-white text-primary-500
  hover:bg-primary-600 hover:bg-accent-600 hover:bg-error-600 hover:bg-primary-50 hover:bg-neutral-100
  focus-visible:ring-primary-500 focus-visible:ring-accent-500 focus-visible:ring-error-500
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  border-2 border-primary-500
  disabled:pointer-events-none disabled:opacity-50
  inline-flex items-center justify-center gap-2
  rounded-lg font-medium transition-colors
  h-9 h-11 h-14
  px-3 px-6 px-8
  text-sm text-base text-lg
  w-full
  animate-spin
  opacity-25 opacity-75
`;

export {};
