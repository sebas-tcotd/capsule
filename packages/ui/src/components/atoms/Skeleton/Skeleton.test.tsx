import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  describe("Rendering", () => {
    it("renders correctly", () => {
      const { container } = render(<Skeleton />);
      const skeleton = container.querySelector("div");
      expect(skeleton).toBeInTheDocument();
    });

    it("renders with text variant by default", () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("rounded", "h-4");
    });

    it("renders with circle variant", () => {
      render(<Skeleton variant="circle" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("rounded-full");
    });

    it("renders with rect variant", () => {
      render(<Skeleton variant="rect" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("rounded-md");
    });

    it("has loading indicator text for screen readers", () => {
      render(<Skeleton />);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toHaveClass("sr-only");
    });
  });

  describe("Dimensions", () => {
    it("renders with custom width as number", () => {
      render(<Skeleton width={200} data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ width: "200px" });
    });

    it("renders with custom width as string", () => {
      render(<Skeleton width="50%" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ width: "50%" });
    });

    it("renders with custom height as number", () => {
      render(<Skeleton height={100} data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ height: "100px" });
    });

    it("renders with custom height as string", () => {
      render(<Skeleton height="10rem" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ height: "10rem" });
    });

    it("renders with both custom width and height", () => {
      render(<Skeleton width={300} height={150} data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({ width: "300px", height: "150px" });
    });
  });

  describe("Animation", () => {
    it("has pulse animation", () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("animate-pulse");
    });
  });

  describe("Loaded State", () => {
    it("shows children when isLoaded is true", () => {
      render(
        <Skeleton isLoaded>
          <div>Content loaded</div>
        </Skeleton>,
      );
      expect(screen.getByText("Content loaded")).toBeInTheDocument();
    });

    it("hides skeleton when isLoaded is true", () => {
      render(
        <Skeleton isLoaded data-testid="skeleton">
          <div>Content loaded</div>
        </Skeleton>,
      );
      expect(screen.queryByTestId("skeleton")).not.toBeInTheDocument();
    });

    it("shows skeleton when isLoaded is false", () => {
      render(
        <Skeleton isLoaded={false} data-testid="skeleton">
          <div>Content not loaded</div>
        </Skeleton>,
      );
      expect(screen.getByTestId("skeleton")).toBeInTheDocument();
      expect(screen.queryByText("Content not loaded")).not.toBeInTheDocument();
    });

    it("returns null when isLoaded but no children", () => {
      const { container } = render(<Skeleton isLoaded />);
      expect(container.firstChild).toBeNull();
    });
  });

  describe("Ref Forwarding", () => {
    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Skeleton ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("ref is null when isLoaded with children", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Skeleton ref={ref} isLoaded>
          <div>Loaded</div>
        </Skeleton>,
      );
      // Ref should be null because skeleton is not rendered
      expect(ref.current).toBeNull();
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(<Skeleton className="custom-class" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("custom-class");
      expect(skeleton).toHaveClass("animate-pulse");
    });
  });

  describe("Custom styles", () => {
    it("merges custom styles with dimension styles", () => {
      render(
        <Skeleton
          width={100}
          height={50}
          style={{ backgroundColor: "red" }}
          data-testid="skeleton"
        />,
      );
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveStyle({
        width: "100px",
        height: "50px",
      });
      // Style prop should be applied
      expect(skeleton).toHaveAttribute("style");
    });
  });

  describe("Accessibility", () => {
    it("has aria-busy attribute", () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveAttribute("aria-busy", "true");
    });

    it("has aria-live attribute", () => {
      render(<Skeleton data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveAttribute("aria-live", "polite");
    });

    it("has screen reader text", () => {
      render(<Skeleton />);
      const srText = screen.getByText("Loading...");
      expect(srText).toHaveClass("sr-only");
    });
  });

  describe("Variant Combinations", () => {
    it("renders text variant with custom width", () => {
      render(<Skeleton variant="text" width="80%" data-testid="skeleton" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("rounded", "h-4");
      expect(skeleton).toHaveStyle({ width: "80%" });
    });

    it("renders circle variant with equal dimensions", () => {
      render(
        <Skeleton
          variant="circle"
          width={50}
          height={50}
          data-testid="skeleton"
        />,
      );
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("rounded-full");
      expect(skeleton).toHaveStyle({ width: "50px", height: "50px" });
    });

    it("renders rect variant with custom dimensions", () => {
      render(
        <Skeleton
          variant="rect"
          width={200}
          height={100}
          data-testid="skeleton"
        />,
      );
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("rounded-md");
      expect(skeleton).toHaveStyle({ width: "200px", height: "100px" });
    });
  });

  describe("Multiple Skeletons", () => {
    it("can render multiple skeletons for list loading", () => {
      render(
        <div>
          <Skeleton data-testid="skeleton-1" />
          <Skeleton data-testid="skeleton-2" />
          <Skeleton data-testid="skeleton-3" />
        </div>,
      );
      expect(screen.getByTestId("skeleton-1")).toBeInTheDocument();
      expect(screen.getByTestId("skeleton-2")).toBeInTheDocument();
      expect(screen.getByTestId("skeleton-3")).toBeInTheDocument();
    });
  });

  describe("DisplayName", () => {
    it("has correct displayName", () => {
      expect(Skeleton.displayName).toBeDefined();
      expect(Skeleton.displayName).toContain("Skeleton");
    });
  });
});
