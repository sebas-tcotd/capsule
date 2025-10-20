import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
      expect(screen.getByText("Accept terms")).toBeInTheDocument();
    });

    it("renders with primary colorScheme by default", () => {
      render(<Checkbox data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("checked:bg-primary-500");
    });

    it("renders with accent colorScheme", () => {
      render(<Checkbox colorScheme="accent" data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("checked:bg-accent-500");
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(<Checkbox size="sm" data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("w-4", "h-4");
    });

    it("renders medium size (default)", () => {
      render(<Checkbox data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("w-5", "h-5");
    });

    it("renders large size", () => {
      render(<Checkbox size="lg" data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("w-6", "h-6");
    });
  });

  describe("Indeterminate State", () => {
    it("sets indeterminate state correctly", () => {
      render(<Checkbox indeterminate data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox") as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
    });

    it("updates indeterminate state when prop changes", () => {
      const { rerender } = render(
        <Checkbox indeterminate={false} data-testid="checkbox" />,
      );
      const checkbox = screen.getByTestId("checkbox") as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(false);

      rerender(<Checkbox indeterminate={true} data-testid="checkbox" />);
      expect(checkbox.indeterminate).toBe(true);
    });

    it("has correct aria-checked when indeterminate", () => {
      render(<Checkbox indeterminate data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveAttribute("aria-checked", "mixed");
    });
  });

  describe("User Interactions", () => {
    it("handles change events", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("toggles checked state on click", async () => {
      const user = userEvent.setup();
      render(<Checkbox data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox") as HTMLInputElement;

      expect(checkbox.checked).toBe(false);
      await user.click(checkbox);
      expect(checkbox.checked).toBe(true);
      await user.click(checkbox);
      expect(checkbox.checked).toBe(false);
    });

    it("can be clicked via label", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Checkbox label="Click me" onChange={handleChange} />);
      const label = screen.getByText("Click me");

      await user.click(label);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("handles keyboard events (Space)", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      checkbox.focus();
      await user.keyboard(" ");
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Disabled State", () => {
    it("renders disabled state correctly", () => {
      render(<Checkbox disabled />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeDisabled();
    });

    it("applies disabled styles", () => {
      render(<Checkbox disabled data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("disabled:cursor-not-allowed");
    });

    it("does not trigger change events when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Checkbox disabled onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it("applies disabled styles to label when disabled", () => {
      render(<Checkbox disabled label="Disabled" />);
      const label = screen.getByText("Disabled").parentElement;
      expect(label).toHaveClass("cursor-not-allowed", "opacity-50");
    });
  });

  describe("Controlled Component", () => {
    it("works as controlled component", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      const { rerender } = render(
        <Checkbox checked={false} onChange={handleChange} />,
      );
      const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

      expect(checkbox.checked).toBe(false);

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalled();

      rerender(<Checkbox checked={true} onChange={handleChange} />);
      expect(checkbox.checked).toBe(true);
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe("checkbox");
    });

    it("can focus via ref", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} />);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });

    it("can set indeterminate via ref", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} />);
      if (ref.current) {
        ref.current.indeterminate = true;
        expect(ref.current.indeterminate).toBe(true);
      }
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(<Checkbox className="custom-class" data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("custom-class");
      expect(checkbox).toHaveClass("rounded"); // Still has base classes
    });
  });

  describe("Accessibility", () => {
    it("has correct role", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("supports aria-label", () => {
      render(<Checkbox aria-label="Accept terms" />);
      expect(
        screen.getByRole("checkbox", { name: "Accept terms" }),
      ).toBeInTheDocument();
    });

    it("has aria-checked attribute", () => {
      render(<Checkbox checked data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveAttribute("aria-checked");
    });

    it("has focus ring styles", () => {
      render(<Checkbox data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("focus:outline-none", "focus:ring-2");
    });
  });

  describe("Variant Combinations", () => {
    it("renders small primary checkbox", () => {
      render(
        <Checkbox size="sm" colorScheme="primary" data-testid="checkbox" />,
      );
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("w-4", "h-4", "checked:bg-primary-500");
    });

    it("renders large accent checkbox", () => {
      render(
        <Checkbox size="lg" colorScheme="accent" data-testid="checkbox" />,
      );
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveClass("w-6", "h-6", "checked:bg-accent-500");
    });

    it("renders disabled indeterminate checkbox", () => {
      render(<Checkbox disabled indeterminate data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox") as HTMLInputElement;
      expect(checkbox).toBeDisabled();
      expect(checkbox.indeterminate).toBe(true);
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Checkbox.displayName).toBeDefined();
      expect(Checkbox.displayName).toContain("Checkbox");
    });
  });
});
