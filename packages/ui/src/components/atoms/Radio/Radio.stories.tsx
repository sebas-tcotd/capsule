import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the radio button",
    },
    colorScheme: {
      control: "select",
      options: ["primary", "accent"],
      description: "Color scheme of the radio button",
    },
    label: {
      control: "text",
      description: "Label text for the radio button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio button is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default",
    value: "option",
    label: "Option",
  },
};

export const Checked: Story = {
  args: {
    name: "checked",
    value: "option",
    label: "Selected option",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled",
    value: "option",
    label: "Disabled option",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: "disabled-checked",
    value: "option",
    label: "Disabled and selected",
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio name="size" value="sm" size="sm" label="Small radio" />
      <Radio name="size" value="md" size="md" label="Medium radio" />
      <Radio name="size" value="lg" size="lg" label="Large radio" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio
        name="color"
        value="primary"
        colorScheme="primary"
        label="Primary color"
        defaultChecked
      />
      <Radio
        name="color"
        value="accent"
        colorScheme="accent"
        label="Accent color"
      />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    name: "no-label",
    value: "option",
    "aria-label": "Radio without visible label",
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="font-semibold mb-2">Choose an option:</div>
      <Radio name="group" value="1" label="Option 1" defaultChecked />
      <Radio name="group" value="2" label="Option 2" />
      <Radio name="group" value="3" label="Option 3" />
      <Radio name="group" value="4" label="Option 4 (disabled)" disabled />
    </div>
  ),
};
