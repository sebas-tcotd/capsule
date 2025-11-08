import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "subtle"],
      description: "Visual style of the badge",
    },
    colorScheme: {
      control: "select",
      options: [
        "primary",
        "accent",
        "success",
        "warning",
        "error",
        "info",
        "neutral",
      ],
      description: "Color scheme of the badge",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the badge",
    },
    children: {
      control: "text",
      description: "Content of the badge",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="subtle">Subtle</Badge>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge colorScheme="primary">Primary</Badge>
        <Badge colorScheme="accent">Accent</Badge>
        <Badge colorScheme="success">Success</Badge>
        <Badge colorScheme="warning">Warning</Badge>
      </div>
      <div className="flex gap-2">
        <Badge colorScheme="error">Error</Badge>
        <Badge colorScheme="info">Info</Badge>
        <Badge colorScheme="neutral">Neutral</Badge>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" colorScheme="primary">
        Primary
      </Badge>
      <Badge variant="outline" colorScheme="accent">
        Accent
      </Badge>
      <Badge variant="outline" colorScheme="success">
        Success
      </Badge>
      <Badge variant="outline" colorScheme="warning">
        Warning
      </Badge>
      <Badge variant="outline" colorScheme="error">
        Error
      </Badge>
      <Badge variant="outline" colorScheme="info">
        Info
      </Badge>
      <Badge variant="outline" colorScheme="neutral">
        Neutral
      </Badge>
    </div>
  ),
};

export const SubtleVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="subtle" colorScheme="primary">
        Primary
      </Badge>
      <Badge variant="subtle" colorScheme="accent">
        Accent
      </Badge>
      <Badge variant="subtle" colorScheme="success">
        Success
      </Badge>
      <Badge variant="subtle" colorScheme="warning">
        Warning
      </Badge>
      <Badge variant="subtle" colorScheme="error">
        Error
      </Badge>
      <Badge variant="subtle" colorScheme="info">
        Info
      </Badge>
      <Badge variant="subtle" colorScheme="neutral">
        Neutral
      </Badge>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>1</Badge>
      <Badge colorScheme="error">99+</Badge>
      <Badge colorScheme="success">New</Badge>
      <Badge variant="outline">Beta</Badge>
    </div>
  ),
};
