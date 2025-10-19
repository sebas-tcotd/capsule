import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * ESLint configuration for Design System components
 *
 * Enforces best practices for component libraries:
 * - Proper prop types
 * - Accessibility
 * - Naming conventions
 * - Component structure
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const designSystemConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat["jsx-runtime"],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,

      // === COMPONENT STRUCTURE ===

      // Component declaration style is documented in CONTRIBUTING.md:
      // - Main exported components: const arrow functions
      // - Internal sub-components: function declarations (for hoisting/Clean Code)
      // We trust the team to follow conventions rather than enforcing via linting
      "react/function-component-definition": "off",

      // Require default props for optional props
      "react/require-default-props": "off", // TypeScript handles this

      // === PROPS & TYPES ===

      // Forbid prop spreading (better type safety)
      "react/jsx-props-no-spreading": "off", // We need it for ...props pattern

      // Require prop types (TypeScript covers this)
      "react/prop-types": "off",

      // === NAMING CONVENTIONS ===

      // Enforce PascalCase for components following Clean Code principles
      // Strategy: Main component as const arrow → sub-components as function declarations
      "@typescript-eslint/naming-convention": [
        "error",
        {
          // Utility functions (camelCase) - checked first to allow create*, get*, etc.
          selector: "function",
          format: ["camelCase"],
          filter: {
            // Include utility function patterns
            regex:
              "^(use|handle|get|set|is|has|should|create|make|format|parse|validate|fetch|update|delete|add|remove|toggle|check)",
            match: true,
          },
        },
        {
          // Main exported components (const arrow functions) → PascalCase
          selector: "variable",
          modifiers: ["exported", "const"],
          types: ["function"],
          format: ["PascalCase"],
        },
        {
          // Internal sub-components (function declarations) → PascalCase
          selector: "function",
          format: ["PascalCase"],
        },
        {
          // Regular const variables → camelCase, PascalCase (types), or UPPER_CASE (constants)
          selector: "variable",
          modifiers: ["const"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          filter: {
            // Allow utility function names like 'cn'
            regex: "^(cn)$",
            match: false,
          },
        },
        {
          // Allow specific utility variable names (like cn)
          selector: "variable",
          modifiers: ["const"],
          format: null,
          filter: {
            regex: "^(cn)$",
            match: true,
          },
        },
        {
          // Type parameters → PascalCase
          selector: "typeParameter",
          format: ["PascalCase"],
        },
        {
          // Interfaces → PascalCase without I prefix
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false, // Don't allow I prefix
          },
        },
      ],

      // === ACCESSIBILITY ===

      // These require eslint-plugin-jsx-a11y (install separately if needed)
      // "jsx-a11y/alt-text": "error",
      // "jsx-a11y/aria-props": "error",
      // "jsx-a11y/aria-role": "error",

      // === PERFORMANCE ===

      // Warn on missing key in lists
      "react/jsx-key": "error",

      // Prevent unnecessary re-renders
      "react/jsx-no-bind": [
        "warn",
        {
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
        },
      ],

      // === CODE QUALITY ===

      // Prevent unused variables
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Require explicit return types for exported functions
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],

      // === ATOMIC DESIGN SPECIFIC ===

      // Enforce file naming (handled by folder structure)
      // No import from parent atomic levels (atoms can't import molecules)
      // This would require a custom rule

      // === REACT 19 SPECIFIC ===

      // React scope no longer necessary with new JSX transform
      "react/react-in-jsx-scope": "off",

      // Allow JSX in .tsx files
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".tsx", ".jsx"] },
      ],
    },
  },
  {
    // Test files - disable strict type checking
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/*.config.*",
      "**/storybook-static/**",
    ],
  },
];
