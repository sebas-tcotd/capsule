import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Radio />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Radio label="Option 1" />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    it("renders with value", () => {
      render(<Radio value="option1" data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveAttribute("value", "option1");
    });

    it("renders with primary colorScheme by default", () => {
      render(<Radio data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("checked:bg-primary-500");
    });

    it("renders with accent colorScheme", () => {
      render(<Radio colorScheme="accent" data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("checked:bg-accent-500");
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(<Radio size="sm" data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("w-4", "h-4");
    });

    it("renders medium size (default)", () => {
      render(<Radio data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("w-5", "h-5");
    });

    it("renders large size", () => {
      render(<Radio size="lg" data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("w-6", "h-6");
    });
  });

  describe("User Interactions", () => {
    it("handles change events", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Radio onChange={handleChange} />);
      const radio = screen.getByRole("radio");

      await user.click(radio);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("becomes checked when clicked", async () => {
      const user = userEvent.setup();
      render(<Radio data-testid="radio" />);
      const radio = screen.getByTestId("radio") as HTMLInputElement;

      expect(radio.checked).toBe(false);
      await user.click(radio);
      expect(radio.checked).toBe(true);
    });

    it("can be clicked via label", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Radio label="Click me" onChange={handleChange} />);
      const label = screen.getByText("Click me");

      await user.click(label);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("handles keyboard events (Space)", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Radio onChange={handleChange} />);
      const radio = screen.getByRole("radio");

      radio.focus();
      await user.keyboard(" ");
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Radio Groups", () => {
    it("only one radio can be selected in a group", async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Radio name="group" value="1" data-testid="radio1" />
          <Radio name="group" value="2" data-testid="radio2" />
          <Radio name="group" value="3" data-testid="radio3" />
        </div>,
      );

      const radio1 = screen.getByTestId("radio1") as HTMLInputElement;
      const radio2 = screen.getByTestId("radio2") as HTMLInputElement;
      const radio3 = screen.getByTestId("radio3") as HTMLInputElement;

      await user.click(radio1);
      expect(radio1.checked).toBe(true);
      expect(radio2.checked).toBe(false);
      expect(radio3.checked).toBe(false);

      await user.click(radio2);
      expect(radio1.checked).toBe(false);
      expect(radio2.checked).toBe(true);
      expect(radio3.checked).toBe(false);

      await user.click(radio3);
      expect(radio1.checked).toBe(false);
      expect(radio2.checked).toBe(false);
      expect(radio3.checked).toBe(true);
    });

    it("different groups work independently", async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Radio name="group1" value="a" data-testid="radio-a" />
          <Radio name="group1" value="b" data-testid="radio-b" />
          <Radio name="group2" value="x" data-testid="radio-x" />
          <Radio name="group2" value="y" data-testid="radio-y" />
        </div>,
      );

      const radioA = screen.getByTestId("radio-a") as HTMLInputElement;
      const radioB = screen.getByTestId("radio-b") as HTMLInputElement;
      const radioX = screen.getByTestId("radio-x") as HTMLInputElement;
      const radioY = screen.getByTestId("radio-y") as HTMLInputElement;

      await user.click(radioA);
      await user.click(radioX);

      expect(radioA.checked).toBe(true);
      expect(radioB.checked).toBe(false);
      expect(radioX.checked).toBe(true);
      expect(radioY.checked).toBe(false);
    });
  });

  describe("Disabled State", () => {
    it("renders disabled state correctly", () => {
      render(<Radio disabled />);
      const radio = screen.getByRole("radio");
      expect(radio).toBeDisabled();
    });

    it("applies disabled styles", () => {
      render(<Radio disabled data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("disabled:cursor-not-allowed");
    });

    it("does not trigger change events when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Radio disabled onChange={handleChange} />);
      const radio = screen.getByRole("radio");

      await user.click(radio);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it("applies disabled styles to label when disabled", () => {
      render(<Radio disabled label="Disabled" />);
      const label = screen.getByText("Disabled").parentElement;
      expect(label).toHaveClass("cursor-not-allowed", "opacity-50");
    });
  });

  describe("Controlled Component", () => {
    it("works as controlled component", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      const { rerender } = render(
        <Radio checked={false} onChange={handleChange} />,
      );
      const radio = screen.getByRole("radio") as HTMLInputElement;

      expect(radio.checked).toBe(false);

      await user.click(radio);
      expect(handleChange).toHaveBeenCalled();

      rerender(<Radio checked={true} onChange={handleChange} />);
      expect(radio.checked).toBe(true);
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Radio ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe("radio");
    });

    it("can focus via ref", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Radio ref={ref} />);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });

    it("can check via ref", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Radio ref={ref} />);
      if (ref.current) {
        ref.current.checked = true;
        expect(ref.current.checked).toBe(true);
      }
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(<Radio className="custom-class" data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("custom-class");
      expect(radio).toHaveClass("rounded-full"); // Still has base classes
    });
  });

  describe("Accessibility", () => {
    it("has correct role", () => {
      render(<Radio />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
    });

    it("supports aria-label", () => {
      render(<Radio aria-label="Select option" />);
      expect(
        screen.getByRole("radio", { name: "Select option" }),
      ).toBeInTheDocument();
    });

    it("has focus ring styles", () => {
      render(<Radio data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("focus:outline-none", "focus:ring-2");
    });
  });

  describe("Variant Combinations", () => {
    it("renders small primary radio", () => {
      render(<Radio size="sm" colorScheme="primary" data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("w-4", "h-4", "checked:bg-primary-500");
    });

    it("renders large accent radio", () => {
      render(<Radio size="lg" colorScheme="accent" data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveClass("w-6", "h-6", "checked:bg-accent-500");
    });

    it("renders disabled checked radio", () => {
      render(<Radio disabled checked data-testid="radio" />);
      const radio = screen.getByTestId("radio") as HTMLInputElement;
      expect(radio).toBeDisabled();
      expect(radio.checked).toBe(true);
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Radio.displayName).toBeDefined();
      expect(Radio.displayName).toContain("Radio");
    });
  });
});
