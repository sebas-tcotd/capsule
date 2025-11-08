import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { X, Search, Plus } from "lucide-react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<IconButton icon={<X />} aria-label="Close" />);
      expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    });

    it("renders with icon", () => {
      const { container } = render(
        <IconButton icon={<Search />} aria-label="Search" />,
      );
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders with solid variant by default", () => {
      render(
        <IconButton icon={<X />} aria-label="Close" data-testid="button" />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-primary-500");
    });

    it("renders with outline variant", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          variant="outline"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("border-2", "border-primary-500");
    });

    it("renders with ghost variant", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          variant="ghost"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("text-primary-500", "bg-transparent");
    });
  });

  describe("Color Schemes", () => {
    it("renders with primary colorScheme by default", () => {
      render(
        <IconButton icon={<X />} aria-label="Close" data-testid="button" />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-primary-500");
    });

    it("renders with accent colorScheme", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          colorScheme="accent"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-accent-500");
    });

    it("renders with error colorScheme", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          colorScheme="error"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-error-500");
    });

    it("renders with neutral colorScheme", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          colorScheme="neutral"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-neutral-500");
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          size="sm"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-8", "w-8");
    });

    it("renders medium size (default)", () => {
      render(
        <IconButton icon={<X />} aria-label="Close" data-testid="button" />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-10", "w-10");
    });

    it("renders large size", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          size="lg"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-12", "w-12");
    });
  });

  describe("Shape", () => {
    it("renders rounded by default", () => {
      render(
        <IconButton icon={<X />} aria-label="Close" data-testid="button" />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("rounded-md");
    });

    it("renders round when isRound is true", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          isRound
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("rounded-full");
    });
  });

  describe("User Interactions", () => {
    it("handles click events", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <IconButton icon={<X />} aria-label="Close" onClick={handleClick} />,
      );
      const button = screen.getByRole("button", { name: "Close" });

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("handles multiple clicks", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <IconButton icon={<X />} aria-label="Close" onClick={handleClick} />,
      );
      const button = screen.getByRole("button", { name: "Close" });

      await user.click(button);
      await user.click(button);
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it("handles keyboard events (Enter)", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <IconButton icon={<X />} aria-label="Close" onClick={handleClick} />,
      );
      const button = screen.getByRole("button", { name: "Close" });

      button.focus();
      await user.keyboard("{Enter}");
      expect(handleClick).toHaveBeenCalled();
    });

    it("handles keyboard events (Space)", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <IconButton icon={<X />} aria-label="Close" onClick={handleClick} />,
      );
      const button = screen.getByRole("button", { name: "Close" });

      button.focus();
      await user.keyboard(" ");
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe("Disabled State", () => {
    it("renders disabled state correctly", () => {
      render(<IconButton icon={<X />} aria-label="Close" disabled />);
      const button = screen.getByRole("button", { name: "Close" });
      expect(button).toBeDisabled();
    });

    it("applies disabled styles", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          disabled
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass(
        "disabled:pointer-events-none",
        "disabled:opacity-50",
      );
    });

    it("does not trigger click events when disabled", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          disabled
          onClick={handleClick}
        />,
      );
      const button = screen.getByRole("button", { name: "Close" });

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<IconButton ref={ref} icon={<X />} aria-label="Close" />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it("can focus via ref", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<IconButton ref={ref} icon={<X />} aria-label="Close" />);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          className="custom-class"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("custom-class");
      expect(button).toHaveClass("bg-primary-500");
    });
  });

  describe("Accessibility", () => {
    it("has correct role", () => {
      render(<IconButton icon={<X />} aria-label="Close" />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("requires aria-label", () => {
      render(<IconButton icon={<X />} aria-label="Close dialog" />);
      expect(
        screen.getByRole("button", { name: "Close dialog" }),
      ).toBeInTheDocument();
    });

    it("has focus-visible styles", () => {
      render(
        <IconButton icon={<X />} aria-label="Close" data-testid="button" />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass(
        "focus-visible:outline-none",
        "focus-visible:ring-2",
      );
    });

    it("has type button by default", () => {
      render(
        <IconButton icon={<X />} aria-label="Close" data-testid="button" />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveAttribute("type", "button");
    });
  });

  describe("Different Icons", () => {
    it("renders with X icon", () => {
      const { container } = render(
        <IconButton icon={<X />} aria-label="Close" />,
      );
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders with Search icon", () => {
      const { container } = render(
        <IconButton icon={<Search />} aria-label="Search" />,
      );
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders with Plus icon", () => {
      const { container } = render(
        <IconButton icon={<Plus />} aria-label="Add" />,
      );
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });
  });

  describe("Variant Combinations", () => {
    it("renders small solid primary button", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          size="sm"
          variant="solid"
          colorScheme="primary"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-8", "w-8", "bg-primary-500");
    });

    it("renders large outline accent button", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          size="lg"
          variant="outline"
          colorScheme="accent"
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-12", "w-12", "border-accent-500");
    });

    it("renders medium ghost error button with round shape", () => {
      render(
        <IconButton
          icon={<X />}
          aria-label="Close"
          variant="ghost"
          colorScheme="error"
          isRound
          data-testid="button"
        />,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("text-error-500", "rounded-full");
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(IconButton.displayName).toBeDefined();
      expect(IconButton.displayName).toContain("IconButton");
    });
  });
});
