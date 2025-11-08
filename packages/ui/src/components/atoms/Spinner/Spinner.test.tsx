import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Spinner />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("renders with default loading label", () => {
      render(<Spinner />);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders with custom label", () => {
      render(<Spinner label="Loading content..." />);
      expect(screen.getByText("Loading content...")).toBeInTheDocument();
    });

    it("renders SVG element", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders with primary colorScheme by default", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("text-primary-500");
    });

    it("renders with accent colorScheme", () => {
      const { container } = render(<Spinner colorScheme="accent" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("text-accent-500");
    });

    it("renders with white colorScheme", () => {
      const { container } = render(<Spinner colorScheme="white" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("text-white");
    });
  });

  describe("Sizes", () => {
    it("renders extra small size", () => {
      const { container } = render(<Spinner size="xs" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-4", "h-4");
    });

    it("renders small size", () => {
      const { container } = render(<Spinner size="sm" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-6", "h-6");
    });

    it("renders medium size (default)", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-8", "h-8");
    });

    it("renders large size", () => {
      const { container } = render(<Spinner size="lg" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-12", "h-12");
    });

    it("renders extra large size", () => {
      const { container } = render(<Spinner size="xl" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-16", "h-16");
    });
  });

  describe("Animation", () => {
    it("has animate-spin class", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("animate-spin");
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Spinner ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("Custom className", () => {
    it("merges custom className with base classes", () => {
      render(<Spinner className="custom-class" data-testid="spinner" />);
      const spinner = screen.getByTestId("spinner");
      expect(spinner).toHaveClass("custom-class");
      expect(spinner).toHaveClass("inline-block");
    });
  });

  describe("Accessibility", () => {
    it("has role status", () => {
      render(<Spinner />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("has aria-label", () => {
      render(<Spinner label="Loading data" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("aria-label", "Loading data");
    });

    it("has screen reader text", () => {
      render(<Spinner label="Please wait" />);
      expect(screen.getByText("Please wait")).toBeInTheDocument();
      const srText = screen.getByText("Please wait");
      expect(srText).toHaveClass("sr-only");
    });

    it("SVG has aria-hidden attribute", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("Variant Combinations", () => {
    it("renders small primary spinner", () => {
      const { container } = render(<Spinner size="sm" colorScheme="primary" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-6", "h-6", "text-primary-500");
    });

    it("renders large accent spinner", () => {
      const { container } = render(<Spinner size="lg" colorScheme="accent" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-12", "h-12", "text-accent-500");
    });

    it("renders extra large white spinner", () => {
      const { container } = render(<Spinner size="xl" colorScheme="white" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-16", "h-16", "text-white");
    });

    it("renders with custom label and size", () => {
      const { container } = render(<Spinner size="lg" label="Processing..." />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("w-12", "h-12");
      expect(screen.getByText("Processing...")).toBeInTheDocument();
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Spinner.displayName).toBeDefined();
      expect(Spinner.displayName).toContain("Spinner");
    });
  });
});
