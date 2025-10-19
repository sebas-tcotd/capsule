import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  test: {
    // Environment
    environment: "jsdom",

    // Globals
    globals: true,

    // Setup files
    setupFiles: ["./vitest.setup.ts"],

    // Coverage
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.config.*",
        "**/*.test.*",
        "**/*.stories.*",
        "**/index.ts",
        "**/tokens/**",
      ],
    },

    // Reporters
    reporters: ["default"],

    // Include
    include: ["**/*.test.{ts,tsx}"],

    // Exclude
    exclude: ["node_modules/", "dist/", ".turbo/"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
