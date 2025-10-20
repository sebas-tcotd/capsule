import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("renders initials from name", () => {
      render(<Avatar name="Jane Smith" />);
      expect(screen.getByText("JS")).toBeInTheDocument();
    });

    it("renders single initial for one-word name", () => {
      render(<Avatar name="Madonna" />);
      expect(screen.getByText("M")).toBeInTheDocument();
    });

    it("renders first and last initials for multi-word name", () => {
      render(<Avatar name="John Jacob Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("handles empty name", () => {
      render(<Avatar name="" />);
      expect(screen.getByText("?")).toBeInTheDocument();
    });

    it("renders image when src is provided", () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" />);
      const img = screen.getByRole("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "/avatar.jpg");
    });

    it("uses name as alt text by default", () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" />);
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("alt", "John Doe");
    });

    it("uses custom alt text when provided", () => {
      render(
        <Avatar name="John Doe" src="/avatar.jpg" alt="Profile picture" />,
      );
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("alt", "Profile picture");
    });
  });

  describe("Sizes", () => {
    it("renders extra small size", () => {
      render(<Avatar name="JD" size="xs" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-6", "h-6", "text-xs");
    });

    it("renders small size", () => {
      render(<Avatar name="JD" size="sm" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-8", "h-8", "text-sm");
    });

    it("renders medium size (default)", () => {
      render(<Avatar name="JD" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-10", "h-10", "text-base");
    });

    it("renders large size", () => {
      render(<Avatar name="JD" size="lg" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-12", "h-12", "text-lg");
    });

    it("renders extra large size", () => {
      render(<Avatar name="JD" size="xl" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-16", "h-16", "text-xl");
    });

    it("renders 2xl size", () => {
      render(<Avatar name="JD" size="2xl" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-20", "h-20", "text-2xl");
    });
  });

  describe("Variants", () => {
    it("renders circle variant by default", () => {
      render(<Avatar name="JD" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("rounded-full");
    });

    it("renders rounded variant", () => {
      render(<Avatar name="JD" variant="rounded" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("rounded-lg");
    });

    it("renders square variant", () => {
      render(<Avatar name="JD" variant="square" data-testid="avatar" />);
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("rounded-none");
    });
  });

  describe("Fallback Colors", () => {
    it("applies a consistent fallback color based on name", () => {
      const { rerender } = render(
        <Avatar name="John Doe" data-testid="avatar" />,
      );
      const avatar1 = screen.getByTestId("avatar");
      const className1 = avatar1.className;

      rerender(<Avatar name="John Doe" data-testid="avatar" />);
      const avatar2 = screen.getByTestId("avatar");
      const className2 = avatar2.className;

      // Same name should produce same color
      expect(className1).toBe(className2);
    });

    it("applies custom fallback color when provided", () => {
      render(
        <Avatar
          name="JD"
          fallbackColor="bg-purple-500 text-white"
          data-testid="avatar"
        />,
      );
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("bg-purple-500", "text-white");
    });

    it("does not apply fallback color when image is shown", () => {
      render(
        <Avatar
          name="JD"
          src="/avatar.jpg"
          fallbackColor="bg-purple-500"
          data-testid="avatar"
        />,
      );
      const avatar = screen.getByTestId("avatar");
      expect(avatar).not.toHaveClass("bg-purple-500");
    });
  });

  describe("Image Error Handling", () => {
    it("shows initials when image fails to load", async () => {
      render(
        <Avatar name="John Doe" src="/invalid.jpg" data-testid="avatar" />,
      );

      const img = screen.getByRole("img");

      // Simulate image load error
      img.dispatchEvent(new Event("error"));

      await waitFor(() => {
        expect(screen.getByText("JD")).toBeInTheDocument();
      });
    });

    it("applies fallback color when image fails to load", async () => {
      render(
        <Avatar name="John Doe" src="/invalid.jpg" data-testid="avatar" />,
      );

      const img = screen.getByRole("img");
      const avatar = screen.getByTestId("avatar");

      // Simulate image load error
      img.dispatchEvent(new Event("error"));

      await waitFor(() => {
        // Should have a background color class after error
        const hasColorClass = avatar.className.includes("bg-");
        expect(hasColorClass).toBe(true);
      });
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Avatar ref={ref} name="JD" />);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(
        <Avatar name="JD" className="custom-class" data-testid="avatar" />,
      );
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("custom-class");
      expect(avatar).toHaveClass("rounded-full"); // Still has variant classes
    });
  });

  describe("Accessibility", () => {
    it("has aria-label with name for initials", () => {
      render(<Avatar name="John Doe" />);
      const initials = screen.getByText("JD");
      expect(initials).toHaveAttribute("aria-label", "John Doe");
    });

    it("has alt text for images", () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" />);
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("alt");
    });
  });

  describe("Variant Combinations", () => {
    it("renders small circle avatar with image", () => {
      render(
        <Avatar
          name="JD"
          size="sm"
          variant="circle"
          src="/avatar.jpg"
          data-testid="avatar"
        />,
      );
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-8", "h-8", "rounded-full");
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders large rounded avatar with initials", () => {
      render(
        <Avatar
          name="John Doe"
          size="lg"
          variant="rounded"
          data-testid="avatar"
        />,
      );
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-12", "h-12", "rounded-lg");
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("renders 2xl square avatar", () => {
      render(
        <Avatar name="JD" size="2xl" variant="square" data-testid="avatar" />,
      );
      const avatar = screen.getByTestId("avatar");
      expect(avatar).toHaveClass("w-20", "h-20", "rounded-none");
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Avatar.displayName).toBeDefined();
      expect(Avatar.displayName).toContain("Avatar");
    });
  });
});
