import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the spinner",
    },
    colorScheme: {
      control: "select",
      options: ["primary", "accent", "neutral", "white"],
      description: "Color scheme of the spinner",
    },
    label: {
      control: "text",
      description: "Accessible label for the spinner",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs">Extra Large</span>
      </div>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner colorScheme="primary" />
        <span className="text-xs">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner colorScheme="accent" />
        <span className="text-xs">Accent</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner colorScheme="white" />
        <span className="text-xs">Neutral</span>
      </div>
    </div>
  ),
};

export const OnDarkBackground: Story = {
  render: () => (
    <div className="bg-gray-900 p-8 rounded-lg">
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-2">
          <Spinner colorScheme="white" size="sm" />
          <span className="text-xs text-white">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner colorScheme="white" size="md" />
          <span className="text-xs text-white">Medium</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner colorScheme="white" size="lg" />
          <span className="text-xs text-white">Large</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner colorScheme="white" size="xl" />
          <span className="text-xs text-white">Extra Large</span>
        </div>
      </div>
    </div>
  ),
};

export const LoadingButton: Story = {
  render: () => (
    <button
      disabled
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-md opacity-75 cursor-not-allowed"
    >
      <Spinner size="sm" colorScheme="white" />
      Loading...
    </button>
  ),
};

export const LoadingCard: Story = {
  render: () => (
    <div className="w-64 p-6 border rounded-lg">
      <div className="flex flex-col items-center justify-center gap-3">
        <Spinner size="lg" />
        <p className="text-sm text-gray-600">Loading content...</p>
      </div>
    </div>
  ),
};

export const InlineLoading: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span>Processing your request</span>
      <Spinner size="sm" />
    </div>
  ),
};
