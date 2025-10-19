import { describe, it, expect } from "vitest";
import { cn } from "../cn";

describe("cn", () => {
  describe("Basic Functionality", () => {
    it("merges class names correctly", () => {
      const result = cn("foo", "bar");
      expect(result).toBe("foo bar");
    });

    it("handles single class name", () => {
      const result = cn("foo");
      expect(result).toBe("foo");
    });

    it("handles empty input", () => {
      const result = cn();
      expect(result).toBe("");
    });

    it("filters out falsy values", () => {
      const result = cn("foo", false, "bar", null, undefined, "baz");
      expect(result).toBe("foo bar baz");
    });

    it("handles conditional class names", () => {
      const isActive = true;
      const isDisabled = false;
      const result = cn("base", isActive && "active", isDisabled && "disabled");
      expect(result).toBe("base active");
    });
  });

  describe("Tailwind Merge", () => {
    it("merges conflicting Tailwind classes (last wins)", () => {
      const result = cn("px-2", "px-4");
      expect(result).toBe("px-4");
    });

    it("merges conflicting background colors", () => {
      const result = cn("bg-red-500", "bg-blue-500");
      expect(result).toBe("bg-blue-500");
    });

    it("merges conflicting text sizes", () => {
      const result = cn("text-sm", "text-lg");
      expect(result).toBe("text-lg");
    });

    it("keeps non-conflicting classes", () => {
      const result = cn("px-2", "py-4", "text-red-500");
      expect(result).toBe("px-2 py-4 text-red-500");
    });

    it("merges hover states correctly", () => {
      const result = cn("hover:bg-red-500", "hover:bg-blue-500");
      expect(result).toBe("hover:bg-blue-500");
    });

    it("handles responsive prefixes", () => {
      const result = cn("md:px-2", "md:px-4");
      expect(result).toBe("md:px-4");
    });
  });

  describe("clsx Functionality", () => {
    it("handles object notation", () => {
      const result = cn({
        foo: true,
        bar: false,
        baz: true,
      });
      expect(result).toBe("foo baz");
    });

    it("handles array notation", () => {
      const result = cn(["foo", "bar", "baz"]);
      expect(result).toBe("foo bar baz");
    });

    it("handles mixed notation", () => {
      const result = cn("base", { active: true, disabled: false }, [
        "item",
        "list",
      ]);
      expect(result).toBe("base active item list");
    });

    it("handles nested arrays", () => {
      const result = cn(["foo", ["bar", ["baz"]]]);
      expect(result).toBe("foo bar baz");
    });
  });

  describe("Real-World Use Cases", () => {
    it("handles button variants", () => {
      function getButtonClasses(variant: "primary" | "secondary") {
        return cn(
          "base-button",
          variant === "primary" && "bg-primary-500",
          variant === "secondary" && "bg-secondary-500",
        );
      }

      expect(getButtonClasses("primary")).toBe("base-button bg-primary-500");
    });

    it("handles component props with className override", () => {
      const baseClasses = "rounded-md border transition-colors";
      const propsClassName = "px-8 py-4 bg-custom-500";
      const result = cn(baseClasses, propsClassName);
      expect(result).toBe(
        "rounded-md border transition-colors px-8 py-4 bg-custom-500",
      );
    });

    it("handles state-based classes", () => {
      const isDisabled = true;
      const isLoading = false;
      const isActive = true;

      const result = cn(
        "button",
        isDisabled && "opacity-50 cursor-not-allowed",
        isLoading && "animate-spin",
        isActive && "ring-2 ring-primary-500",
      );
      expect(result).toBe(
        "button opacity-50 cursor-not-allowed ring-2 ring-primary-500",
      );
    });

    it("handles CVA-like variant patterns", () => {
      function getComponentClasses(
        size: "sm" | "md" | "lg",
        variant: "outline" | "solid",
      ) {
        return cn(
          "base",
          size === "sm" && "h-9 px-3 text-sm",
          size === "md" && "h-11 px-4 text-base",
          size === "lg" && "h-14 px-6 text-lg",
          variant === "outline" && "border-2 border-primary-500",
          variant === "solid" && "bg-primary-500",
        );
      }

      expect(getComponentClasses("md", "outline")).toBe(
        "base h-11 px-4 text-base border-2 border-primary-500",
      );
    });

    it("merges className prop with default styles", () => {
      const defaultStyles = "px-4 py-2 bg-blue-500 text-white";
      const customClassName = "px-8 bg-red-500";

      const result = cn(defaultStyles, customClassName);
      // tailwind-merge should keep py-2, text-white, but override px and bg
      expect(result).toBe("py-2 text-white px-8 bg-red-500");
    });
  });

  describe("Edge Cases", () => {
    it("handles undefined values", () => {
      const result = cn("foo", undefined, "bar");
      expect(result).toBe("foo bar");
    });

    it("handles null values", () => {
      const result = cn("foo", null, "bar");
      expect(result).toBe("foo bar");
    });

    it("handles empty strings", () => {
      const result = cn("foo", "", "bar");
      expect(result).toBe("foo bar");
    });

    it("handles numbers", () => {
      const result = cn("foo", 0, "bar");
      expect(result).toBe("foo bar");
    });

    it("handles all falsy values", () => {
      const result = cn(false, null, undefined, 0, "", "foo");
      expect(result).toBe("foo");
    });

    it("handles very long class lists", () => {
      const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
      const result = cn(...classes);
      expect(result).toContain("class-0");
      expect(result).toContain("class-99");
    });
  });

  describe("Performance", () => {
    it("handles repeated class names", () => {
      const result = cn("foo", "foo", "foo", "bar", "bar");
      // clsx deduplicates, but doesn't guarantee order
      expect(result).toContain("foo");
      expect(result).toContain("bar");
    });

    it("handles complex merging scenarios", () => {
      const result = cn(
        "px-2 py-2 bg-red-500",
        "px-4 text-white",
        "bg-blue-500",
      );
      // tailwind-merge will keep last conflicting classes
      expect(result).toContain("py-2");
      expect(result).toContain("text-white");
      expect(result).toContain("px-4");
      expect(result).toContain("bg-blue-500");
      expect(result).not.toContain("px-2");
      expect(result).not.toContain("bg-red-500");
    });
  });

  describe("Type Safety", () => {
    it("accepts string inputs", () => {
      const result = cn("foo", "bar");
      expect(typeof result).toBe("string");
    });

    it("accepts object inputs", () => {
      const result = cn({ foo: true, bar: false });
      expect(typeof result).toBe("string");
    });

    it("accepts array inputs", () => {
      const result = cn(["foo", "bar"]);
      expect(typeof result).toBe("string");
    });

    it("accepts mixed inputs", () => {
      const result = cn("string", { object: true }, ["array"]);
      expect(typeof result).toBe("string");
    });
  });
});
