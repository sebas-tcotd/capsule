import type { Config } from "tailwindcss";
import baseConfig from "@capsule/tailwind-config";

export default {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx,mdx}", "../../packages/ui/src/**/*.{ts,tsx}"],
} satisfies Config;
