import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Link } from "./Link";

describe("Link", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Link href="/about">About</Link>);
      expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    });

    it("renders with href attribute", () => {
      render(<Link href="/contact">Contact</Link>);
      const link = screen.getByRole("link", { name: "Contact" });
      expect(link).toHaveAttribute("href", "/contact");
    });

    it("renders children correctly", () => {
      render(<Link href="/">Home</Link>);
      expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("renders with inline variant by default", () => {
      render(
        <Link href="/" data-testid="link">
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass("underline");
    });

    it("renders with standalone variant", () => {
      render(
        <Link href="/" variant="standalone" data-testid="link">
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass("no-underline");
    });

    it("renders with primary colorScheme by default", () => {
      render(
        <Link href="/" data-testid="link">
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass("text-primary-600");
    });

    it("renders with accent colorScheme", () => {
      render(
        <Link href="/" colorScheme="accent" data-testid="link">
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass("text-accent-600");
    });
  });

  describe("External Links", () => {
    it("renders external link icon when isExternal is true", () => {
      const { container } = render(
        <Link href="https://example.com" isExternal>
          External
        </Link>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("does not render external link icon by default", () => {
      const { container } = render(<Link href="/">Internal</Link>);
      const svg = container.querySelector("svg");
      expect(svg).not.toBeInTheDocument();
    });

    it("adds target blank when isExternal is true", () => {
      render(
        <Link href="https://example.com" isExternal data-testid="link">
          External
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveAttribute("target", "_blank");
    });

    it("adds rel noopener noreferrer when isExternal is true", () => {
      render(
        <Link href="https://example.com" isExternal data-testid="link">
          External
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("does not add target blank for internal links", () => {
      render(
        <Link href="/about" data-testid="link">
          About
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).not.toHaveAttribute("target");
    });

    it("external icon has aria-hidden", () => {
      const { container } = render(
        <Link href="https://example.com" isExternal>
          External
        </Link>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("User Interactions", () => {
    it("handles click events", async () => {
      const handleClick = vi.fn((e) => e.preventDefault());
      const user = userEvent.setup();
      render(
        <Link href="/about" onClick={handleClick}>
          About
        </Link>,
      );
      const link = screen.getByRole("link", { name: "About" });

      await user.click(link);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("can be focused", async () => {
      const user = userEvent.setup();
      render(<Link href="/about">About</Link>);
      const link = screen.getByRole("link", { name: "About" });

      await user.tab();
      expect(link).toHaveFocus();
    });

    it("handles keyboard navigation", async () => {
      const handleClick = vi.fn((e) => e.preventDefault());
      const user = userEvent.setup();
      render(
        <Link href="/about" onClick={handleClick}>
          About
        </Link>,
      );
      const link = screen.getByRole("link", { name: "About" });

      link.focus();
      await user.keyboard("{Enter}");
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLAnchorElement>();
      render(
        <Link ref={ref} href="/">
          Link
        </Link>,
      );
      expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    });

    it("can focus via ref", () => {
      const ref = React.createRef<HTMLAnchorElement>();
      render(
        <Link ref={ref} href="/">
          Link
        </Link>,
      );
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(
        <Link href="/" className="custom-class" data-testid="link">
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass("custom-class");
      expect(link).toHaveClass("text-primary-600");
    });
  });

  describe("Accessibility", () => {
    it("has correct role", () => {
      render(<Link href="/">Link</Link>);
      expect(screen.getByRole("link")).toBeInTheDocument();
    });

    it("supports aria-label", () => {
      render(
        <Link href="/" aria-label="Go to homepage">
          Home
        </Link>,
      );
      expect(
        screen.getByRole("link", { name: "Go to homepage" }),
      ).toBeInTheDocument();
    });

    it("has focus-visible styles", () => {
      render(
        <Link href="/" data-testid="link">
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass(
        "focus-visible:outline-none",
        "focus-visible:ring-2",
      );
    });

    it("has proper rel attribute for external links", () => {
      render(
        <Link href="https://example.com" isExternal data-testid="link">
          External
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Variant Combinations", () => {
    it("renders inline primary link", () => {
      render(
        <Link
          href="/"
          variant="inline"
          colorScheme="primary"
          data-testid="link"
        >
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass("underline", "text-primary-600");
    });

    it("renders standalone accent link", () => {
      render(
        <Link
          href="/"
          variant="standalone"
          colorScheme="accent"
          data-testid="link"
        >
          Link
        </Link>,
      );
      const link = screen.getByTestId("link");
      expect(link).toHaveClass("no-underline", "text-accent-600");
    });

    it("renders external standalone link", () => {
      const { container } = render(
        <Link
          href="https://example.com"
          variant="standalone"
          isExternal
          data-testid="link"
        >
          External
        </Link>,
      );
      const link = screen.getByTestId("link");
      const svg = container.querySelector("svg");

      expect(link).toHaveClass("no-underline");
      expect(link).toHaveAttribute("target", "_blank");
      expect(svg).toBeInTheDocument();
    });

    it("renders external inline accent link", () => {
      const { container } = render(
        <Link
          href="https://example.com"
          variant="inline"
          colorScheme="accent"
          isExternal
          data-testid="link"
        >
          External
        </Link>,
      );
      const link = screen.getByTestId("link");
      const svg = container.querySelector("svg");

      expect(link).toHaveClass("underline", "text-accent-600");
      expect(link).toHaveAttribute("target", "_blank");
      expect(svg).toBeInTheDocument();
    });
  });

  describe("Complex Children", () => {
    it("renders with icon and text", () => {
      render(
        <Link href="/">
          <svg data-testid="icon" />
          Home
        </Link>,
      );
      expect(screen.getByTestId("icon")).toBeInTheDocument();
      expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("renders with multiple text nodes", () => {
      render(
        <Link href="/">
          <span>Go to</span> <strong>Homepage</strong>
        </Link>,
      );
      expect(screen.getByText("Go to")).toBeInTheDocument();
      expect(screen.getByText("Homepage")).toBeInTheDocument();
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Link.displayName).toBeDefined();
      expect(Link.displayName).toContain("Link");
    });
  });
});
