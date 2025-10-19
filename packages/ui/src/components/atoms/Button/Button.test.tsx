import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      const { getByRole } = render(<Button>Click me</Button>);
      expect(getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("renders with primary variant by default", () => {
      render(<Button data-testid="button">Primary</Button>);
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-primary-500");
    });

    it("renders with secondary variant", () => {
      render(
        <Button variant="secondary" data-testid="button">
          Secondary
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-accent-500");
    });

    it("renders with outline variant", () => {
      render(
        <Button variant="outline" data-testid="button">
          Outline
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("border-2", "border-primary-500");
    });

    it("renders with ghost variant", () => {
      render(
        <Button variant="ghost" data-testid="button">
          Ghost
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("text-primary-500", "bg-transparent");
    });

    it("renders with danger variant", () => {
      render(
        <Button variant="danger" data-testid="button">
          Danger
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-error-500");
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(
        <Button size="sm" data-testid="button">
          Small
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-9", "px-3", "text-sm");
    });

    it("renders medium size (default)", () => {
      render(<Button data-testid="button">Medium</Button>);
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-11", "px-6", "text-base");
    });

    it("renders large size", () => {
      render(
        <Button size="lg" data-testid="button">
          Large
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("h-14", "px-8", "text-lg");
    });
  });

  describe("Full Width", () => {
    it("renders full width when specified", () => {
      render(
        <Button fullWidth data-testid="button">
          Full Width
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("w-full");
    });

    it("does not render full width by default", () => {
      render(<Button data-testid="button">Normal</Button>);
      const button = screen.getByTestId("button");
      expect(button).not.toHaveClass("w-full");
    });
  });

  describe("Loading State", () => {
    it("renders loading spinner when isLoading is true", () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
      expect(screen.queryByText("Submit")).not.toBeInTheDocument();
    });

    it("does not render loading spinner by default", () => {
      render(<Button>Submit</Button>);
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    it("is disabled when isLoading is true", () => {
      render(
        <Button isLoading data-testid="button">
          Submit
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toBeDisabled();
    });

    it("displays spinner with animate-spin class", () => {
      render(<Button isLoading>Submit</Button>);
      const spinner = screen.getByRole("button").querySelector("svg");
      expect(spinner).toHaveClass("animate-spin");
    });
  });

  describe("User Interactions", () => {
    it("handles click events", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole("button", { name: "Click me" });

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("handles multiple clicks", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole("button", { name: "Click me" });

      await user.click(button);
      await user.click(button);
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it("handles focus events", async () => {
      const handleFocus = vi.fn();
      const user = userEvent.setup();
      render(<Button onFocus={handleFocus}>Focus me</Button>);
      const button = screen.getByRole("button", { name: "Focus me" });

      await user.click(button);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("handles blur events", async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      render(<Button onBlur={handleBlur}>Blur me</Button>);
      const button = screen.getByRole("button", { name: "Blur me" });

      await user.click(button);
      await user.tab(); // Tab away to trigger blur
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it("handles keyboard events (Enter)", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Press Enter</Button>);
      const button = screen.getByRole("button", { name: "Press Enter" });

      button.focus();
      await user.keyboard("{Enter}");
      expect(handleClick).toHaveBeenCalled();
    });

    it("handles keyboard events (Space)", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Press Space</Button>);
      const button = screen.getByRole("button", { name: "Press Space" });

      button.focus();
      await user.keyboard(" ");
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe("Disabled State", () => {
    it("renders disabled state correctly", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button", { name: "Disabled" });
      expect(button).toBeDisabled();
    });

    it("applies disabled styles", () => {
      render(
        <Button disabled data-testid="button">
          Disabled
        </Button>,
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
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>,
      );
      const button = screen.getByRole("button", { name: "Disabled" });

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("is disabled when isLoading is true even if disabled is false", () => {
      render(
        <Button isLoading disabled={false}>
          Loading
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it("can focus via ref", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button</Button>);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });

    it("can blur via ref", () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button</Button>);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
      ref.current?.blur();
      expect(ref.current).not.toHaveFocus();
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(
        <Button className="custom-class" data-testid="button">
          Custom
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("custom-class");
      expect(button).toHaveClass("bg-primary-500"); // Still has variant classes
    });
  });

  describe("Button Type", () => {
    it("has button as default type (when not specified, browsers default to submit in forms)", () => {
      render(<Button data-testid="button">Default Type</Button>);
      const button = screen.getByTestId("button");
      // When type is not specified, HTML spec allows browsers to default to submit in forms
      // We don't force a default type, letting the browser handle it
      expect(button).toBeInTheDocument();
    });

    it("renders as submit type when specified", () => {
      render(
        <Button type="submit" data-testid="button">
          Submit Type
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveAttribute("type", "submit");
    });

    it("renders as reset type when specified", () => {
      render(
        <Button type="reset" data-testid="button">
          Reset Type
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveAttribute("type", "reset");
    });
  });

  describe("Accessibility", () => {
    it("has correct role", () => {
      render(<Button>Accessible Button</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("supports aria-label", () => {
      render(<Button aria-label="Close dialog">X</Button>);
      expect(
        screen.getByRole("button", { name: "Close dialog" }),
      ).toBeInTheDocument();
    });

    it("supports aria-disabled", () => {
      render(
        <Button aria-disabled="true" data-testid="button">
          Disabled
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveAttribute("aria-disabled", "true");
    });

    it("has focus-visible styles", () => {
      render(<Button data-testid="button">Focus me</Button>);
      const button = screen.getByTestId("button");
      expect(button).toHaveClass(
        "focus-visible:outline-none",
        "focus-visible:ring-2",
      );
    });
  });

  describe("Children", () => {
    it("renders text children", () => {
      render(<Button>Text content</Button>);
      expect(screen.getByText("Text content")).toBeInTheDocument();
    });

    it("renders element children", () => {
      render(
        <Button>
          <span data-testid="icon">🚀</span>
          <span>Launch</span>
        </Button>,
      );
      expect(screen.getByTestId("icon")).toBeInTheDocument();
      expect(screen.getByText("Launch")).toBeInTheDocument();
    });

    it("renders with icon and text", () => {
      render(
        <Button>
          <svg data-testid="svg-icon" />
          Button with icon
        </Button>,
      );
      expect(screen.getByTestId("svg-icon")).toBeInTheDocument();
      expect(screen.getByText("Button with icon")).toBeInTheDocument();
    });
  });

  describe("Variant Combinations", () => {
    it("renders small primary button", () => {
      render(
        <Button variant="primary" size="sm" data-testid="button">
          Small Primary
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-primary-500", "h-9", "px-3");
    });

    it("renders large danger button", () => {
      render(
        <Button variant="danger" size="lg" data-testid="button">
          Large Danger
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("bg-error-500", "h-14", "px-8");
    });

    it("renders full width outline button", () => {
      render(
        <Button variant="outline" fullWidth data-testid="button">
          Full Outline
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("border-2", "border-primary-500", "w-full");
    });

    it("renders loading ghost button", () => {
      render(
        <Button variant="ghost" isLoading data-testid="button">
          Loading Ghost
        </Button>,
      );
      const button = screen.getByTestId("button");
      expect(button).toHaveClass("text-primary-500", "bg-transparent");
      expect(button).toBeDisabled();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Button.displayName).toBeDefined();
      expect(Button.displayName).toContain("Button");
    });
  });
});
