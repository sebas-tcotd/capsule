import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the switch",
    },
    colorScheme: {
      control: "select",
      options: ["primary", "accent"],
      description: "Color scheme of the switch",
    },
    label: {
      control: "text",
      description: "Label text for the switch",
    },
    labelPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the label relative to the switch",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Enabled",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled switch",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled and enabled",
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch colorScheme="primary" label="Primary color" defaultChecked />
      <Switch colorScheme="accent" label="Accent color" defaultChecked />
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch label="Label on the right" labelPosition="right" />
      <Switch label="Label on the left" labelPosition="left" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Switch without visible label",
  },
};

export const Settings: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-64">
      <div className="font-semibold mb-1">Settings</div>
      <Switch label="Email notifications" defaultChecked />
      <Switch label="Push notifications" />
      <Switch label="SMS notifications" disabled />
      <Switch label="Marketing emails" />
    </div>
  ),
};
