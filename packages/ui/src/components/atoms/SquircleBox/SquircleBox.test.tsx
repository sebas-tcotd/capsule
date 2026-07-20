import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { SquircleBox } from "./SquircleBox";

describe("SquircleBox", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<SquircleBox data-testid="squircle">Content</SquircleBox>);
      expect(screen.getByTestId("squircle")).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<SquircleBox>Hello World</SquircleBox>);
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("renders with default variant", () => {
      render(<SquircleBox data-testid="squircle">Content</SquircleBox>);
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("bg-greige");
    });
  });

  describe("Variants", () => {
    it("renders surface variant", () => {
      render(
        <SquircleBox variant="surface" data-testid="squircle">
          Surface
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("bg-greige");
    });

    it("renders elevated variant", () => {
      render(
        <SquircleBox variant="elevated" data-testid="squircle">
          Elevated
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("bg-bone", "shadow-studio");
    });

    it("renders outline variant", () => {
      render(
        <SquircleBox variant="outline" data-testid="squircle">
          Outline
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("border", "border-neutral-200");
    });
  });

  describe("Sizes", () => {
    it("renders sm size", () => {
      render(
        <SquircleBox size="sm" data-testid="squircle">
          Small
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("p-2");
    });

    it("renders md size (default)", () => {
      render(<SquircleBox data-testid="squircle">Medium</SquircleBox>);
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("p-4");
    });

    it("renders lg size", () => {
      render(
        <SquircleBox size="lg" data-testid="squircle">
          Large
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("p-6");
    });
  });

  describe("Curvature", () => {
    it("applies squircle border-radius by default", () => {
      render(<SquircleBox data-testid="squircle">Content</SquircleBox>);
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("rounded-2xl");
    });

    it("applies smooth curvature class", () => {
      render(<SquircleBox data-testid="squircle">Content</SquircleBox>);
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("squircle");
    });
  });

  describe("Custom className", () => {
    it("merges custom className with default classes", () => {
      render(
        <SquircleBox className="custom-class" data-testid="squircle">
          Custom
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box).toHaveClass("custom-class");
      expect(box).toHaveClass("squircle");
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<SquircleBox ref={ref}>Box</SquircleBox>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("HTML Attributes", () => {
    it("passes through HTML attributes", () => {
      render(
        <SquircleBox
          id="my-box"
          aria-label="Box container"
          data-testid="squircle"
        >
          Content
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box).toHaveAttribute("id", "my-box");
      expect(box).toHaveAttribute("aria-label", "Box container");
    });
  });

  describe("As prop (polymorphism)", () => {
    it("renders as div by default", () => {
      render(<SquircleBox data-testid="squircle">Content</SquircleBox>);
      const box = screen.getByTestId("squircle");
      expect(box.tagName).toBe("DIV");
    });

    it("renders as section when specified", () => {
      render(
        <SquircleBox as="section" data-testid="squircle">
          Content
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box.tagName).toBe("SECTION");
    });

    it("renders as article when specified", () => {
      render(
        <SquircleBox as="article" data-testid="squircle">
          Content
        </SquircleBox>,
      );
      const box = screen.getByTestId("squircle");
      expect(box.tagName).toBe("ARTICLE");
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(SquircleBox.displayName).toBeDefined();
      expect(SquircleBox.displayName).toContain("SquircleBox");
    });
  });
});
