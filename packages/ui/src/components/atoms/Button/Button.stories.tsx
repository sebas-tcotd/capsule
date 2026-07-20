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
    intent: {
      control: "select",
      options: ["primary", "neutral", "danger"],
      description: "Semantic meaning of the button",
    },
    tone: {
      control: "select",
      options: ["solid", "outline", "ghost", "text"],
      description: "Visual treatment of the button",
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

/**
 * The three tiers from "Button Hierarchy (Tactile Luxury)" in the UX spec:
 * Primary/Deploy = solid, Secondary/Choice = ghost, Tertiary/Support = text.
 */
export const Hierarchy: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button tone="solid">Deploy Outfit</Button>
      <Button tone="ghost">Ver alternativa</Button>
      <Button tone="text">Omitir por ahora</Button>
    </div>
  ),
};

export const IntentXTone: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      {(["primary", "neutral", "danger"] as const).map((intent) => (
        <div key={intent} className="contents">
          {(["solid", "outline", "ghost", "text"] as const).map((tone) => (
            <Button key={`${intent}-${tone}`} intent={intent} tone={tone}>
              {intent} / {tone}
            </Button>
          ))}
        </div>
      ))}
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
      <Button isLoading tone="outline">
        Processing
      </Button>
      <Button isLoading tone="ghost">
        Submitting
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button disabled>Disabled</Button>
      <Button disabled tone="outline">
        Disabled
      </Button>
      <Button disabled tone="ghost">
        Disabled
      </Button>
    </div>
  ),
};

export const OutlineTone: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button tone="outline">Outline Button</Button>
    </div>
  ),
};

export const GhostTone: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button tone="ghost">Ghost Button</Button>
    </div>
  ),
};

export const DangerIntent: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button intent="danger">Delete</Button>
      <Button intent="danger" tone="ghost">
        Delete (low emphasis)
      </Button>
      <Button intent="danger" disabled>
        Delete (Disabled)
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <Button fullWidth>Full Width Button</Button>
      <Button fullWidth tone="outline">
        Full Width Outline
      </Button>
    </div>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="inline-flex rounded-lg overflow-hidden border border-gray-300">
      <Button tone="ghost" className="rounded-none border-r">
        Left
      </Button>
      <Button tone="ghost" className="rounded-none border-r">
        Center
      </Button>
      <Button tone="ghost" className="rounded-none">
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
        <Button tone="outline">Cancel</Button>
      </div>
      <div className="flex gap-3">
        <Button tone="ghost">Save Changes</Button>
        <Button tone="text">Discard</Button>
      </div>
      <div className="flex gap-3">
        <Button intent="danger">Delete</Button>
        <Button tone="ghost">Keep</Button>
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
        <Button tone="outline">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </div>
  ),
};
