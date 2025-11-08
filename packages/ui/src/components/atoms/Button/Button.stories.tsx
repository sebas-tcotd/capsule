import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
      description: "Visual style of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
    },
    isLoading: {
      control: "boolean",
      description: "Whether the button is in a loading state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "Content of the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button isLoading>Loading</Button>
      <Button isLoading variant="outline">
        Processing
      </Button>
      <Button isLoading variant="secondary">
        Submitting
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button disabled>Disabled</Button>
      <Button disabled variant="outline">
        Disabled
      </Button>
      <Button disabled variant="ghost">
        Disabled
      </Button>
    </div>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button variant="outline">Outline Button</Button>
    </div>
  ),
};

export const GhostVariant: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button variant="ghost">Ghost Button</Button>
    </div>
  ),
};

export const DangerVariant: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button variant="danger">Delete</Button>
      <Button variant="danger" disabled>
        Delete (Disabled)
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <Button fullWidth>Full Width Button</Button>
      <Button fullWidth variant="outline">
        Full Width Outline
      </Button>
    </div>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="inline-flex rounded-lg overflow-hidden border border-gray-300">
      <Button variant="ghost" className="rounded-none border-r">
        Left
      </Button>
      <Button variant="ghost" className="rounded-none border-r">
        Center
      </Button>
      <Button variant="ghost" className="rounded-none">
        Right
      </Button>
    </div>
  ),
};

export const CommonActions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <Button>Create New</Button>
        <Button variant="outline">Cancel</Button>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary">Save Changes</Button>
        <Button variant="ghost">Discard</Button>
      </div>
      <div className="flex gap-3">
        <Button variant="danger">Delete</Button>
        <Button variant="ghost">Keep</Button>
      </div>
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <div className="w-96 p-6 border rounded-lg space-y-4">
      <h3 className="text-lg font-semibold">Contact Form</h3>
      <input
        type="text"
        placeholder="Name"
        className="w-full px-3 py-2 border rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-md"
      />
      <textarea
        placeholder="Message"
        rows={4}
        className="w-full px-3 py-2 border rounded-md"
      />
      <div className="flex gap-3 justify-end">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </div>
  ),
};
