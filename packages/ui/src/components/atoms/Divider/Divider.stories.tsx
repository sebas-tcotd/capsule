import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the divider",
    },
    variant: {
      control: "select",
      options: ["solid", "dashed"],
      description: "Visual style of the divider",
    },
    label: {
      control: "text",
      description: "Optional label text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <div className="p-4">Section 1</div>
      <Divider />
      <div className="p-4">Section 2</div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-96 space-y-8">
      <div>
        <p className="mb-2 text-sm font-semibold">Solid</p>
        <Divider variant="solid" />
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold">Dashed</p>
        <Divider variant="dashed" />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-96 space-y-8">
      <div>
        <p className="mb-2 text-sm font-semibold">With Label</p>
        <Divider label="Section Title" />
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold">Another Label</p>
        <Divider label="OR" />
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center h-24 gap-4">
      <div className="px-4">Item 1</div>
      <Divider orientation="vertical" />
      <div className="px-4">Item 2</div>
      <Divider orientation="vertical" />
      <div className="px-4">Item 3</div>
    </div>
  ),
};

export const VerticalVariants: Story = {
  render: () => (
    <div className="flex items-center h-24 gap-4">
      <div className="px-4">Solid</div>
      <Divider orientation="vertical" variant="solid" />
      <div className="px-4">Dashed</div>
      <Divider orientation="vertical" variant="dashed" />
      <div className="px-4">End</div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-96 border rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-lg">Card Title</h3>
        <p className="text-sm text-gray-600">Card description</p>
      </div>
      <Divider />
      <div className="p-4">
        <p className="text-sm">Card content goes here</p>
      </div>
      <Divider />
      <div className="p-4 flex justify-end gap-2">
        <button className="px-4 py-2 text-sm border rounded">Cancel</button>
        <button className="px-4 py-2 text-sm bg-primary-500 text-white rounded">
          Save
        </button>
      </div>
    </div>
  ),
};

export const SectionDividers: Story = {
  render: () => (
    <div className="w-96">
      <div className="py-4">
        <h2 className="text-xl font-bold mb-2">Introduction</h2>
        <p className="text-sm text-gray-600">
          This is the introduction section.
        </p>
      </div>
      <Divider label="Chapter 1" variant="solid" />
      <div className="py-4">
        <h2 className="text-xl font-bold mb-2">Getting Started</h2>
        <p className="text-sm text-gray-600">Learn the basics here.</p>
      </div>
      <Divider label="Chapter 2" variant="solid" />
      <div className="py-4">
        <h2 className="text-xl font-bold mb-2">Advanced Topics</h2>
        <p className="text-sm text-gray-600">
          Deep dive into advanced concepts.
        </p>
      </div>
    </div>
  ),
};
