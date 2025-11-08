import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Star, Check } from "lucide-react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Tag } from "./Tag";

describe("Tag", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Tag>Default</Tag>);
      expect(screen.getByText("Default")).toBeInTheDocument();
    });

    it("renders with solid variant by default", () => {
      render(<Tag data-testid="tag">Default</Tag>);
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-primary-500");
    });

    it("renders with outline variant", () => {
      render(
        <Tag variant="outline" data-testid="tag">
          Outline
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("border-2", "border-primary-500");
    });

    it("renders with subtle variant", () => {
      render(
        <Tag variant="subtle" data-testid="tag">
          Subtle
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-primary-100");
    });
  });

  describe("Color Schemes", () => {
    it("renders with primary colorScheme by default", () => {
      render(<Tag data-testid="tag">Primary</Tag>);
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-primary-500");
    });

    it("renders with accent colorScheme", () => {
      render(
        <Tag colorScheme="accent" data-testid="tag">
          Accent
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-accent-500");
    });

    it("renders with success colorScheme", () => {
      render(
        <Tag colorScheme="success" data-testid="tag">
          Success
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-success-500");
    });

    it("renders with warning colorScheme", () => {
      render(
        <Tag colorScheme="warning" data-testid="tag">
          Warning
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-warning-500");
    });

    it("renders with error colorScheme", () => {
      render(
        <Tag colorScheme="error" data-testid="tag">
          Error
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-error-500");
    });

    it("renders with info colorScheme", () => {
      render(
        <Tag colorScheme="info" data-testid="tag">
          Info
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-info-500");
    });

    it("renders with neutral colorScheme", () => {
      render(
        <Tag colorScheme="neutral" data-testid="tag">
          Neutral
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-neutral-500");
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(
        <Tag size="sm" data-testid="tag">
          Small
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("px-2", "py-0.5", "text-xs");
    });

    it("renders medium size (default)", () => {
      render(<Tag data-testid="tag">Medium</Tag>);
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("px-2.5", "py-1", "text-sm");
    });

    it("renders large size", () => {
      render(
        <Tag size="lg" data-testid="tag">
          Large
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("px-3", "py-1.5", "text-base");
    });
  });

  describe("Icons", () => {
    it("renders with left icon", () => {
      const { container } = render(<Tag leftIcon={<Star />}>Featured</Tag>);
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(0);
      expect(screen.getByText("Featured")).toBeInTheDocument();
    });

    it("renders with right icon", () => {
      const { container } = render(<Tag rightIcon={<Check />}>Verified</Tag>);
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(0);
      expect(screen.getByText("Verified")).toBeInTheDocument();
    });

    it("renders with both left and right icons", () => {
      const { container } = render(
        <Tag leftIcon={<Star />} rightIcon={<Check />}>
          Both
        </Tag>,
      );
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(1);
    });

    it("does not render icons by default", () => {
      const { container } = render(<Tag>No Icons</Tag>);
      const svgs = container.querySelectorAll("svg");
      expect(svgs).toHaveLength(0);
    });
  });

  describe("Close Button", () => {
    it("renders close button when onClose is provided", () => {
      render(<Tag onClose={() => {}}>Closable</Tag>);
      expect(
        screen.getByRole("button", { name: "Remove tag" }),
      ).toBeInTheDocument();
    });

    it("does not render close button by default", () => {
      render(<Tag>Not Closable</Tag>);
      expect(
        screen.queryByRole("button", { name: "Remove tag" }),
      ).not.toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", async () => {
      const handleClose = vi.fn();
      const user = userEvent.setup();
      render(<Tag onClose={handleClose}>Closable</Tag>);
      const closeButton = screen.getByRole("button", { name: "Remove tag" });

      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("renders X icon in close button", () => {
      render(<Tag onClose={() => {}}>Closable</Tag>);
      const closeButton = screen.getByRole("button", { name: "Remove tag" });
      const svg = closeButton.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("stops propagation when close button is clicked", async () => {
      const handleClose = vi.fn();
      const handleTagClick = vi.fn();
      const user = userEvent.setup();
      render(
        <Tag onClose={handleClose} onClick={handleTagClick}>
          Closable
        </Tag>,
      );
      const closeButton = screen.getByRole("button", { name: "Remove tag" });

      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
      expect(handleTagClick).not.toHaveBeenCalled();
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Tag ref={ref}>Tag</Tag>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(
        <Tag className="custom-class" data-testid="tag">
          Custom
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("custom-class");
      expect(tag).toHaveClass("bg-primary-500");
    });
  });

  describe("Accessibility", () => {
    it("has focus ring styles", () => {
      render(<Tag data-testid="tag">Tag</Tag>);
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("focus:outline-none", "focus:ring-2");
    });

    it("close button has aria-label", () => {
      render(<Tag onClose={() => {}}>Closable</Tag>);
      const closeButton = screen.getByRole("button", { name: "Remove tag" });
      expect(closeButton).toHaveAttribute("aria-label", "Remove tag");
    });
  });

  describe("Variant Combinations", () => {
    it("renders small solid primary tag", () => {
      render(
        <Tag size="sm" variant="solid" colorScheme="primary" data-testid="tag">
          Small Primary
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("px-2", "py-0.5", "bg-primary-500");
    });

    it("renders large outline accent tag", () => {
      render(
        <Tag size="lg" variant="outline" colorScheme="accent" data-testid="tag">
          Large Outline
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("px-3", "py-1.5", "border-accent-500");
    });

    it("renders subtle success tag with close button", () => {
      render(
        <Tag
          variant="subtle"
          colorScheme="success"
          onClose={() => {}}
          data-testid="tag"
        >
          Subtle Success
        </Tag>,
      );
      const tag = screen.getByTestId("tag");
      expect(tag).toHaveClass("bg-success-100");
      expect(
        screen.getByRole("button", { name: "Remove tag" }),
      ).toBeInTheDocument();
    });

    it("renders tag with left icon and close button", () => {
      const { container } = render(
        <Tag leftIcon={<Star />} onClose={() => {}}>
          Featured
        </Tag>,
      );
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(1); // Star icon + X icon
      expect(
        screen.getByRole("button", { name: "Remove tag" }),
      ).toBeInTheDocument();
    });

    it("renders tag with both icons and close button", () => {
      const { container } = render(
        <Tag leftIcon={<Star />} rightIcon={<Check />} onClose={() => {}}>
          All Features
        </Tag>,
      );
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(2); // Star + Check + X
      expect(
        screen.getByRole("button", { name: "Remove tag" }),
      ).toBeInTheDocument();
    });
  });

  describe("All Color Scheme Variants", () => {
    const colorSchemes = [
      "primary",
      "accent",
      "success",
      "warning",
      "error",
      "info",
      "neutral",
    ] as const;

    colorSchemes.forEach((colorScheme) => {
      it(`renders solid ${colorScheme} variant`, () => {
        render(
          <Tag variant="solid" colorScheme={colorScheme} data-testid="tag">
            {colorScheme}
          </Tag>,
        );
        const tag = screen.getByTestId("tag");
        expect(tag).toHaveClass(`bg-${colorScheme}-500`);
      });

      it(`renders outline ${colorScheme} variant`, () => {
        render(
          <Tag variant="outline" colorScheme={colorScheme} data-testid="tag">
            {colorScheme}
          </Tag>,
        );
        const tag = screen.getByTestId("tag");
        expect(tag).toHaveClass(`border-${colorScheme}-500`);
      });

      it(`renders subtle ${colorScheme} variant`, () => {
        render(
          <Tag variant="subtle" colorScheme={colorScheme} data-testid="tag">
            {colorScheme}
          </Tag>,
        );
        const tag = screen.getByTestId("tag");
        expect(tag).toHaveClass(`bg-${colorScheme}-100`);
      });
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Tag.displayName).toBeDefined();
      expect(Tag.displayName).toContain("Tag");
    });
  });
});
