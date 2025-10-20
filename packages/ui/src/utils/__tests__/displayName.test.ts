import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { createDisplayName } from "../displayName";

describe("createDisplayName", () => {
  let originalNodeEnv: string | undefined;

  beforeEach(() => {
    originalNodeEnv = process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  describe("Development Mode", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("creates display name with prefix for atom", () => {
      const displayName = createDisplayName("Button", "atom");
      expect(displayName).toContain("Button");
      expect(displayName.length).toBeGreaterThan("Button".length);
    });

    it("creates display name with prefix for molecule", () => {
      const displayName = createDisplayName("Card", "molecule");
      expect(displayName).toContain("Card");
      expect(displayName.length).toBeGreaterThan("Card".length);
    });

    it("creates display name with prefix for organism", () => {
      const displayName = createDisplayName("Header", "organism");
      expect(displayName).toContain("Header");
      expect(displayName.length).toBeGreaterThan("Header".length);
    });

    it("creates display name with prefix for template", () => {
      const displayName = createDisplayName("PageLayout", "template");
      expect(displayName).toContain("PageLayout");
      expect(displayName.length).toBeGreaterThan("PageLayout".length);
    });

    it("uses text prefix when useEmojis is false", () => {
      const displayName = createDisplayName("Button", "atom", {
        useEmojis: false,
      });
      expect(displayName).toBe("[Atom] Button");
    });

    it("respects showPrefix: false override", () => {
      const displayName = createDisplayName("Button", "atom", {
        showPrefix: false,
      });
      expect(displayName).toBe("Button");
    });

    it("handles complex component names", () => {
      const displayName = createDisplayName("CustomDialogButton", "atom");
      expect(displayName).toContain("CustomDialogButton");
    });

    it("text prefixes are different for different levels", () => {
      const atom = createDisplayName("Component", "atom", { useEmojis: false });
      const molecule = createDisplayName("Component", "molecule", {
        useEmojis: false,
      });
      const organism = createDisplayName("Component", "organism", {
        useEmojis: false,
      });
      const template = createDisplayName("Component", "template", {
        useEmojis: false,
      });

      expect(atom).toBe("[Atom] Component");
      expect(molecule).toBe("[Molecule] Component");
      expect(organism).toBe("[Organism] Component");
      expect(template).toBe("[Template] Component");
    });
  });

  describe("Production Mode", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "production";
    });

    it("creates display name without prefix in production", () => {
      const displayName = createDisplayName("Button", "atom");
      expect(displayName).toBe("Button");
    });

    it("creates display name without prefix for molecule", () => {
      const displayName = createDisplayName("Card", "molecule");
      expect(displayName).toBe("Card");
    });

    it("creates display name without prefix for organism", () => {
      const displayName = createDisplayName("Header", "organism");
      expect(displayName).toBe("Header");
    });

    it("creates display name without prefix for template", () => {
      const displayName = createDisplayName("PageLayout", "template");
      expect(displayName).toBe("PageLayout");
    });

    it("can force prefix with showPrefix: true", () => {
      const displayName = createDisplayName("Button", "atom", {
        showPrefix: true,
      });
      expect(displayName).toContain("Button");
      expect(displayName.length).toBeGreaterThan("Button".length);
    });

    it("respects useEmojis: false with forced prefix", () => {
      const displayName = createDisplayName("Button", "atom", {
        showPrefix: true,
        useEmojis: false,
      });
      expect(displayName).toBe("[Atom] Button");
    });
  });

  describe("Test Mode", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "test";
    });

    it("creates display name without prefix in test mode", () => {
      const displayName = createDisplayName("Button", "atom");
      expect(displayName).toBe("Button");
    });
  });

  describe("Edge Cases", () => {
    it("handles empty component name", () => {
      const displayName = createDisplayName("", "atom", { showPrefix: false });
      expect(displayName).toBe("");
    });

    it("handles component names with spaces", () => {
      const displayName = createDisplayName("My Component", "atom", {
        showPrefix: false,
      });
      expect(displayName).toBe("My Component");
    });

    it("handles component names with special characters", () => {
      const displayName = createDisplayName("Button@v2", "atom", {
        showPrefix: false,
      });
      expect(displayName).toBe("Button@v2");
    });
  });

  describe("Config Options", () => {
    it("accepts partial config with defaults", () => {
      const displayName = createDisplayName("Button", "atom", {});
      expect(displayName).toContain("Button");
    });

    it("accepts showPrefix only", () => {
      const displayName = createDisplayName("Button", "atom", {
        showPrefix: true,
      });
      expect(displayName).toContain("Button");
    });

    it("accepts useEmojis only", () => {
      const displayName = createDisplayName("Button", "atom", {
        useEmojis: true,
      });
      expect(displayName).toContain("Button");
    });

    it("combines both config options", () => {
      const displayName = createDisplayName("Button", "atom", {
        showPrefix: true,
        useEmojis: false,
      });
      expect(displayName).toBe("[Atom] Button");
    });
  });

  describe("Consistency", () => {
    it("returns same result for same inputs", () => {
      const displayName1 = createDisplayName("Button", "atom");
      const displayName2 = createDisplayName("Button", "atom");
      expect(displayName1).toBe(displayName2);
    });

    it("returns different results for different levels with text prefix", () => {
      const atom = createDisplayName("Component", "atom", {
        showPrefix: true,
        useEmojis: false,
      });
      const molecule = createDisplayName("Component", "molecule", {
        showPrefix: true,
        useEmojis: false,
      });
      const organism = createDisplayName("Component", "organism", {
        showPrefix: true,
        useEmojis: false,
      });
      const template = createDisplayName("Component", "template", {
        showPrefix: true,
        useEmojis: false,
      });

      expect(atom).not.toBe(molecule);
      expect(molecule).not.toBe(organism);
      expect(organism).not.toBe(template);
      expect(atom).not.toBe(template);
    });
  });
});
