import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    it("renders with default variant", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("border-neutral-300");
    });

    it("renders with error variant", () => {
      render(<Input variant="error" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("border-error-500");
    });

    it("renders with success variant", () => {
      render(<Input variant="success" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("border-success-500");
    });
  });

  describe("Sizes", () => {
    it("renders small size", () => {
      render(<Input size="sm" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("h-9");
    });

    it("renders medium size (default)", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("h-11");
    });

    it("renders large size", () => {
      render(<Input size="lg" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("h-14");
    });
  });

  describe("Full Width", () => {
    it("renders full width when specified", () => {
      render(<Input fullWidth data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("w-full");
    });

    it("renders auto width by default", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("w-auto"); // w-auto is the default
    });
  });

  describe("Icons", () => {
    it("renders with left icon", () => {
      render(
        <Input
          leftIcon={<span data-testid="left-icon">🔍</span>}
          data-testid="input"
        />,
      );
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
      expect(screen.getByTestId("input")).toHaveClass("pl-10");
    });

    it("renders with right icon", () => {
      render(
        <Input
          rightIcon={<span data-testid="right-icon">✓</span>}
          data-testid="input"
        />,
      );
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
      expect(screen.getByTestId("input")).toHaveClass("pr-10");
    });

    it("renders with both icons", () => {
      render(
        <Input
          leftIcon={<span data-testid="left-icon">🔍</span>}
          rightIcon={<span data-testid="right-icon">✓</span>}
          data-testid="input"
        />,
      );
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
      expect(screen.getByTestId("input")).toHaveClass("pl-10", "pr-10");
    });
  });

  describe("User Interactions", () => {
    it("handles typing", async () => {
      const user = userEvent.setup();
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input") as HTMLInputElement;

      await user.type(input, "Hello");
      expect(input.value).toBe("Hello");
    });

    it("handles onChange event", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Input onChange={handleChange} data-testid="input" />);
      const input = screen.getByTestId("input");

      await user.type(input, "Test");
      expect(handleChange).toHaveBeenCalled();
    });

    it("handles onFocus event", async () => {
      const handleFocus = vi.fn();
      const user = userEvent.setup();
      render(<Input onFocus={handleFocus} data-testid="input" />);
      const input = screen.getByTestId("input");

      await user.click(input);
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it("handles onBlur event", async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      render(<Input onBlur={handleBlur} data-testid="input" />);
      const input = screen.getByTestId("input");

      await user.click(input);
      await user.tab(); // Tab away to trigger blur
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("Controlled/Uncontrolled", () => {
    it("works as uncontrolled component", () => {
      render(<Input defaultValue="initial" data-testid="input" />);
      const input = screen.getByTestId("input") as HTMLInputElement;
      expect(input.value).toBe("initial");
    });

    it("works as controlled component", async () => {
      const Controlled = () => {
        const [value, setValue] = React.useState("controlled");
        return (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-testid="input"
          />
        );
      };

      const user = userEvent.setup();
      render(<Controlled />);
      const input = screen.getByTestId("input") as HTMLInputElement;

      expect(input.value).toBe("controlled");
      await user.clear(input);
      await user.type(input, "new value");
      expect(input.value).toBe("new value");
    });
  });

  describe("Disabled State", () => {
    it("renders disabled state correctly", () => {
      render(<Input disabled data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toBeDisabled();
      expect(input).toHaveClass("disabled:cursor-not-allowed");
    });

    it("does not trigger events when disabled", async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<Input disabled onChange={handleChange} data-testid="input" />);
      const input = screen.getByTestId("input");

      await user.type(input, "Test");
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    it("can focus via ref", () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input ref={ref} />);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe("Input Types", () => {
    it("renders text input by default", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveAttribute("type", "text");
    });

    it("renders email input", () => {
      render(<Input type="email" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveAttribute("type", "email");
    });

    it("renders password input", () => {
      render(<Input type="password" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveAttribute("type", "password");
    });

    it("renders number input", () => {
      render(<Input type="number" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveAttribute("type", "number");
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(<Input className="custom-class" data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toHaveClass("custom-class");
      expect(input).toHaveClass("border-neutral-300"); // Still has variant classes
    });
  });
});
