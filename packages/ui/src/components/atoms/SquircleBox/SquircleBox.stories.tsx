import type { Meta, StoryObj } from "@storybook/react";
import { SquircleBox } from "./SquircleBox";

const meta: Meta<typeof SquircleBox> = {
  title: "Atoms/SquircleBox",
  component: SquircleBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container with continuous curvature (superellipse/squircle shape). Provides a more organic, premium feel compared to standard rounded corners. Core component of the Premium Studio design system.",
      },
    },
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    variant: {
      control: "select",
      options: ["surface", "elevated", "outline"],
      description: "Visual style of the box",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Padding size of the box",
    },
    as: {
      control: "select",
      options: ["div", "section", "article", "aside"],
      description: "HTML element to render as",
    },
    children: {
      control: "text",
      description: "Content of the box",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Squircle Box Content",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <SquircleBox
        variant="surface"
        className="w-40 h-40 flex items-center justify-center"
      >
        Surface
      </SquircleBox>
      <SquircleBox
        variant="elevated"
        className="w-40 h-40 flex items-center justify-center"
      >
        Elevated
      </SquircleBox>
      <SquircleBox
        variant="outline"
        className="w-40 h-40 flex items-center justify-center"
      >
        Outline
      </SquircleBox>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-start gap-4">
      <SquircleBox size="sm" variant="elevated" className="inline-block">
        Small
      </SquircleBox>
      <SquircleBox size="md" variant="elevated" className="inline-block">
        Medium
      </SquircleBox>
      <SquircleBox size="lg" variant="elevated" className="inline-block">
        Large
      </SquircleBox>
      <SquircleBox size="xl" variant="elevated" className="inline-block">
        Extra Large
      </SquircleBox>
    </div>
  ),
};

export const CardExample: Story = {
  render: () => (
    <SquircleBox variant="elevated" size="lg" className="w-80">
      <h3 className="text-lg font-semibold text-authority-blue mb-2">
        Premium Card
      </h3>
      <p className="text-neutral-600 text-sm">
        This card uses the squircle shape for a more organic, premium
        appearance. The continuous curvature creates a softer visual experience.
      </p>
    </SquircleBox>
  ),
};

export const NestedBoxes: Story = {
  render: () => (
    <SquircleBox variant="surface" size="lg" className="w-96">
      <h3 className="text-lg font-semibold mb-4">Nested Squircles</h3>
      <div className="flex gap-3">
        <SquircleBox variant="elevated" size="md" className="flex-1">
          <span className="text-sm">Item 1</span>
        </SquircleBox>
        <SquircleBox variant="elevated" size="md" className="flex-1">
          <span className="text-sm">Item 2</span>
        </SquircleBox>
        <SquircleBox variant="elevated" size="md" className="flex-1">
          <span className="text-sm">Item 3</span>
        </SquircleBox>
      </div>
    </SquircleBox>
  ),
};

export const AsSection: Story = {
  render: () => (
    <SquircleBox
      as="section"
      variant="outline"
      size="lg"
      className="w-80"
      aria-label="Feature section"
    >
      <h2 className="text-xl font-semibold mb-2">Feature Section</h2>
      <p className="text-neutral-600">
        This squircle renders as a semantic section element.
      </p>
    </SquircleBox>
  ),
};

export const ColorShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <SquircleBox className="bg-bone p-6 w-64">
        <span className="font-mono text-sm">bg-bone #FDFCFB</span>
      </SquircleBox>
      <SquircleBox className="bg-greige p-6 w-64">
        <span className="font-mono text-sm">bg-greige #F7F5F2</span>
      </SquircleBox>
      <SquircleBox className="bg-authority-blue text-white p-6 w-64">
        <span className="font-mono text-sm">bg-authority-blue #3E5C76</span>
      </SquircleBox>
      <SquircleBox className="bg-deep-forest text-white p-6 w-64">
        <span className="font-mono text-sm">bg-deep-forest #4A6D5E</span>
      </SquircleBox>
      <SquircleBox className="bg-terra-cotta text-white p-6 w-64">
        <span className="font-mono text-sm">bg-terra-cotta #C67A5C</span>
      </SquircleBox>
    </div>
  ),
};

export const InteractiveCard: Story = {
  render: () => (
    <SquircleBox
      variant="elevated"
      size="lg"
      className="w-80 cursor-pointer hover:shadow-studio-lg transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-authority-blue rounded-full flex items-center justify-center">
          <span className="text-white text-xl">+</span>
        </div>
        <div>
          <h4 className="font-semibold">Add New Item</h4>
          <p className="text-sm text-neutral-500">Click to add a new garment</p>
        </div>
      </div>
    </SquircleBox>
  ),
};
