import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Divider } from "./Divider";

describe("Divider", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Divider />);
      expect(screen.getByRole("separator")).toBeInTheDocument();
    });

    it("renders as hr element by default", () => {
      const { container } = render(<Divider />);
      const hr = container.querySelector("hr");
      expect(hr).toBeInTheDocument();
    });

    it("renders with solid variant by default", () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("border-solid");
    });

    it("renders with dashed variant", () => {
      render(<Divider variant="dashed" data-testid="divider" />);
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("border-dashed");
    });
  });

  describe("Orientation", () => {
    it("renders horizontal by default", () => {
      render(<Divider data-testid="divider" />);
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("w-full", "border-t");
    });

    it("renders vertical orientation", () => {
      render(<Divider orientation="vertical" data-testid="divider" />);
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("h-full", "border-l");
    });
  });

  describe("With Label", () => {
    it("renders with label", () => {
      render(<Divider label="OR" />);
      expect(screen.getByText("OR")).toBeInTheDocument();
    });

    it("renders label between two dividers", () => {
      const { container } = render(<Divider label="OR" />);
      const hrs = container.querySelectorAll("hr");
      expect(hrs).toHaveLength(2);
    });

    it("renders horizontal label with correct spacing", () => {
      render(<Divider orientation="horizontal" label="OR" />);
      const label = screen.getByText("OR");
      expect(label).toHaveClass("px-3");
    });

    it("renders vertical label with correct spacing", () => {
      render(<Divider orientation="vertical" label="OR" />);
      const label = screen.getByText("OR");
      expect(label).toHaveClass("py-3");
    });

    it("renders label as div container when label is present", () => {
      const { container } = render(<Divider label="OR" />);
      const div = container.querySelector("div");
      expect(div).toBeInTheDocument();
      expect(div).toHaveAttribute("role", "separator");
    });

    it("applies aria-hidden to hr elements when label is present", () => {
      const { container } = render(<Divider label="OR" />);
      const hrs = container.querySelectorAll("hr");
      hrs.forEach((hr) => {
        expect(hr).toHaveAttribute("aria-hidden", "true");
      });
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLHRElement>();
      render(<Divider ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLHRElement);
    });

    it("ref is null when label is present", () => {
      const ref = React.createRef<HTMLHRElement>();
      render(<Divider ref={ref} label="OR" />);
      // Ref should be null because div is rendered instead of hr
      expect(ref.current).toBeNull();
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(<Divider className="custom-class" data-testid="divider" />);
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("custom-class");
      expect(divider).toHaveClass("border-neutral-300");
    });
  });

  describe("Accessibility", () => {
    it("has role separator", () => {
      render(<Divider />);
      expect(screen.getByRole("separator")).toBeInTheDocument();
    });

    it("has correct aria-orientation for label container", () => {
      render(<Divider orientation="horizontal" label="OR" />);
      const separator = screen.getByRole("separator");
      expect(separator).toHaveAttribute("aria-orientation", "horizontal");
    });

    it("has correct aria-orientation for vertical with label", () => {
      render(<Divider orientation="vertical" label="OR" />);
      const separator = screen.getByRole("separator");
      expect(separator).toHaveAttribute("aria-orientation", "vertical");
    });

    it("maintains role separator with label", () => {
      render(<Divider label="OR" />);
      expect(screen.getByRole("separator")).toBeInTheDocument();
    });
  });

  describe("Variant Combinations", () => {
    it("renders horizontal solid divider", () => {
      render(
        <Divider
          orientation="horizontal"
          variant="solid"
          data-testid="divider"
        />,
      );
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("w-full", "border-t", "border-solid");
    });

    it("renders horizontal dashed divider", () => {
      render(
        <Divider
          orientation="horizontal"
          variant="dashed"
          data-testid="divider"
        />,
      );
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("w-full", "border-t", "border-dashed");
    });

    it("renders vertical solid divider", () => {
      render(
        <Divider
          orientation="vertical"
          variant="solid"
          data-testid="divider"
        />,
      );
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("h-full", "border-l", "border-solid");
    });

    it("renders vertical dashed divider", () => {
      render(
        <Divider
          orientation="vertical"
          variant="dashed"
          data-testid="divider"
        />,
      );
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("h-full", "border-l", "border-dashed");
    });

    it("renders horizontal divider with label", () => {
      render(<Divider orientation="horizontal" label="OR" />);
      expect(screen.getByText("OR")).toBeInTheDocument();
      const separator = screen.getByRole("separator");
      expect(separator).toHaveAttribute("aria-orientation", "horizontal");
    });

    it("renders vertical divider with label", () => {
      render(<Divider orientation="vertical" label="OR" />);
      expect(screen.getByText("OR")).toBeInTheDocument();
      const separator = screen.getByRole("separator");
      expect(separator).toHaveAttribute("aria-orientation", "vertical");
    });

    it("renders dashed divider with label", () => {
      const { container } = render(<Divider variant="dashed" label="OR" />);
      const hrs = container.querySelectorAll("hr");
      hrs.forEach((hr) => {
        expect(hr).toHaveClass("border-dashed");
      });
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Divider.displayName).toBeDefined();
      expect(Divider.displayName).toContain("Divider");
    });
  });
});
