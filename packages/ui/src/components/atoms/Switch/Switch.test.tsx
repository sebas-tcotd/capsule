import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Switch />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Switch label="Enable notifications" />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
      expect(screen.getByText("Enable notifications")).toBeInTheDocument();
    });

    it("renders label on the right by default", () => {
      render(<Switch label="Right label" />);
      const label = screen.getByText("Right label");
      const switchElement = screen.getByRole("switch");
      const parent = label.parentElement;

      expect(parent?.children[0]).toBe(switchElement);
      expect(parent?.children[1]).toContain(label);
    });

    it("renders label on the left when specified", () => {
      render(<Switch label="Left label" labelPosition="left" />);
      const label = screen.getByText("Left label");
      const switchElement = screen.getByRole("switch");
      const parent = label.parentElement;

      expect(parent?.children[1]).toBe(switchElement);
      expect(parent?.children[0]).toContain(label);
    });

    it("renders with primary colorScheme by default", () => {
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("aria-checked:bg-primary-500");
    });

    it("renders with accent colorScheme", () => {
      render(<Switch colorScheme="accent" data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("aria-checked:bg-accent-500");
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(<Switch size="sm" data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("h-5", "w-9");
    });

    it("renders medium size (default)", () => {
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("h-6", "w-11");
    });

    it("renders large size", () => {
      render(<Switch size="lg" data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("h-7", "w-14");
    });
  });

  describe("Checked State", () => {
    it("is unchecked by default", () => {
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveAttribute("aria-checked", "false");
    });

    it("can be checked via prop", () => {
      render(<Switch checked data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveAttribute("aria-checked", "true");
    });

    it("updates aria-checked attribute", () => {
      const { rerender } = render(
        <Switch checked={false} data-testid="switch" />,
      );
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveAttribute("aria-checked", "false");

      rerender(<Switch checked={true} data-testid="switch" />);
      expect(switchElement).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("User Interactions", () => {
    it("handles click events", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Switch onChange={handleChange} />);
      const switchElement = screen.getByRole("switch");

      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it("toggles checked state on click (uncontrolled)", async () => {
      const user = userEvent.setup();
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");

      expect(switchElement).toHaveAttribute("aria-checked", "false");
      await user.click(switchElement);
      expect(switchElement).toHaveAttribute("aria-checked", "true");
      await user.click(switchElement);
      expect(switchElement).toHaveAttribute("aria-checked", "false");
    });

    it("calls onChange with correct value when toggling", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Switch onChange={handleChange} />);
      const switchElement = screen.getByRole("switch");

      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(true);

      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it("can be clicked via label", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Switch label="Click me" onChange={handleChange} />);
      const label = screen.getByText("Click me");

      await user.click(label);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("handles keyboard events (Space)", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Switch onChange={handleChange} />);
      const switchElement = screen.getByRole("switch");

      switchElement.focus();
      await user.keyboard(" ");
      expect(handleChange).toHaveBeenCalled();
    });

    it("handles keyboard events (Enter)", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Switch onChange={handleChange} />);
      const switchElement = screen.getByRole("switch");

      switchElement.focus();
      await user.keyboard("{Enter}");
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Disabled State", () => {
    it("renders disabled state correctly", () => {
      render(<Switch disabled />);
      const switchElement = screen.getByRole("switch");
      expect(switchElement).toBeDisabled();
    });

    it("applies disabled styles", () => {
      render(<Switch disabled data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("disabled:cursor-not-allowed");
    });

    it("does not trigger change events when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Switch disabled onChange={handleChange} />);
      const switchElement = screen.getByRole("switch");

      await user.click(switchElement);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it("applies disabled styles to label when disabled", () => {
      render(<Switch disabled label="Disabled" />);
      const label = screen.getByText("Disabled").parentElement;
      expect(label).toHaveClass("cursor-not-allowed", "opacity-50");
    });
  });

  describe("Controlled Component", () => {
    it("works as controlled component", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      const { rerender } = render(
        <Switch checked={false} onChange={handleChange} data-testid="switch" />,
      );
      const switchElement = screen.getByTestId("switch");

      expect(switchElement).toHaveAttribute("aria-checked", "false");

      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(true);

      // Parent component updates the checked prop
      rerender(
        <Switch checked={true} onChange={handleChange} data-testid="switch" />,
      );
      expect(switchElement).toHaveAttribute("aria-checked", "true");
    });

    it("does not change state internally when controlled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(
        <Switch checked={false} onChange={handleChange} data-testid="switch" />,
      );
      const switchElement = screen.getByTestId("switch");

      await user.click(switchElement);
      expect(handleChange).toHaveBeenCalledWith(true);
      // State should not change because it's controlled
      expect(switchElement).toHaveAttribute("aria-checked", "false");
    });
  });

  describe("Uncontrolled Component", () => {
    it("manages its own state when uncontrolled", async () => {
      const user = userEvent.setup();
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");

      expect(switchElement).toHaveAttribute("aria-checked", "false");

      await user.click(switchElement);
      expect(switchElement).toHaveAttribute("aria-checked", "true");

      await user.click(switchElement);
      expect(switchElement).toHaveAttribute("aria-checked", "false");
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Switch ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it("can focus via ref", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Switch ref={ref} />);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });

    it("can click via ref", () => {
      const ref = React.createRef<HTMLButtonElement>();
      const handleChange = vi.fn();
      render(<Switch ref={ref} onChange={handleChange} />);
      ref.current?.click();
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(<Switch className="custom-class" data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("custom-class");
      expect(switchElement).toHaveClass("rounded-full"); // Still has base classes
    });
  });

  describe("Accessibility", () => {
    it("has correct role", () => {
      render(<Switch />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });

    it("has aria-checked attribute", () => {
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveAttribute("aria-checked");
    });

    it("supports aria-label", () => {
      render(<Switch aria-label="Toggle setting" />);
      expect(
        screen.getByRole("switch", { name: "Toggle setting" }),
      ).toBeInTheDocument();
    });

    it("has focus ring styles", () => {
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("focus:outline-none", "focus:ring-2");
    });

    it("has type button to prevent form submission", () => {
      render(<Switch data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveAttribute("type", "button");
    });
  });

  describe("Variant Combinations", () => {
    it("renders small primary switch", () => {
      render(<Switch size="sm" colorScheme="primary" data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass(
        "h-5",
        "w-9",
        "aria-checked:bg-primary-500",
      );
    });

    it("renders large accent switch", () => {
      render(<Switch size="lg" colorScheme="accent" data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass(
        "h-7",
        "w-14",
        "aria-checked:bg-accent-500",
      );
    });

    it("renders disabled checked switch", () => {
      render(<Switch disabled checked data-testid="switch" />);
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toBeDisabled();
      expect(switchElement).toHaveAttribute("aria-checked", "true");
    });

    it("renders with left label and large size", () => {
      render(
        <Switch
          size="lg"
          label="Large with left label"
          labelPosition="left"
          data-testid="switch"
        />,
      );
      const switchElement = screen.getByTestId("switch");
      expect(switchElement).toHaveClass("h-7", "w-14");
      expect(screen.getByText("Large with left label")).toBeInTheDocument();
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Switch.displayName).toBeDefined();
      expect(Switch.displayName).toContain("Switch");
    });
  });
});
