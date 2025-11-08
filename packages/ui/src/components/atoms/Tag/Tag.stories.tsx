import type { Meta, StoryObj } from "@storybook/react";
import { Star, Check, AlertCircle, Info } from "lucide-react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "subtle"],
      description: "Visual style of the tag",
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
      description: "Color scheme of the tag",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the tag",
    },
    children: {
      control: "text",
      description: "Content of the tag",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Tag",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag variant="solid">Solid</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="subtle">Subtle</Tag>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Tag colorScheme="primary">Primary</Tag>
        <Tag colorScheme="accent">Accent</Tag>
        <Tag colorScheme="success">Success</Tag>
        <Tag colorScheme="warning">Warning</Tag>
      </div>
      <div className="flex flex-wrap gap-2">
        <Tag colorScheme="error">Error</Tag>
        <Tag colorScheme="info">Info</Tag>
        <Tag colorScheme="neutral">Neutral</Tag>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag leftIcon={<Star />} colorScheme="primary">
        Featured
      </Tag>
      <Tag leftIcon={<Check />} colorScheme="success">
        Verified
      </Tag>
      <Tag leftIcon={<AlertCircle />} colorScheme="warning">
        Warning
      </Tag>
      <Tag leftIcon={<Info />} colorScheme="info">
        Info
      </Tag>
    </div>
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag rightIcon={<Star />} colorScheme="primary">
        Premium
      </Tag>
      <Tag rightIcon={<Check />} colorScheme="success">
        Active
      </Tag>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag onClose={() => console.log("closed")} colorScheme="primary">
        Removable
      </Tag>
      <Tag onClose={() => console.log("closed")} colorScheme="success">
        Click X
      </Tag>
      <Tag onClose={() => console.log("closed")} colorScheme="error">
        Delete me
      </Tag>
    </div>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="outline" colorScheme="primary">
        Primary
      </Tag>
      <Tag variant="outline" colorScheme="accent">
        Accent
      </Tag>
      <Tag variant="outline" colorScheme="success">
        Success
      </Tag>
      <Tag variant="outline" colorScheme="warning">
        Warning
      </Tag>
      <Tag variant="outline" colorScheme="error">
        Error
      </Tag>
      <Tag variant="outline" colorScheme="info">
        Info
      </Tag>
      <Tag variant="outline" colorScheme="neutral">
        Neutral
      </Tag>
    </div>
  ),
};

export const SubtleVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="subtle" colorScheme="primary">
        Primary
      </Tag>
      <Tag variant="subtle" colorScheme="accent">
        Accent
      </Tag>
      <Tag variant="subtle" colorScheme="success">
        Success
      </Tag>
      <Tag variant="subtle" colorScheme="warning">
        Warning
      </Tag>
      <Tag variant="subtle" colorScheme="error">
        Error
      </Tag>
      <Tag variant="subtle" colorScheme="info">
        Info
      </Tag>
      <Tag variant="subtle" colorScheme="neutral">
        Neutral
      </Tag>
    </div>
  ),
};

export const StatusTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag leftIcon={<Check />} colorScheme="success" variant="subtle">
        Active
      </Tag>
      <Tag colorScheme="warning" variant="subtle">
        Pending
      </Tag>
      <Tag colorScheme="error" variant="subtle">
        Inactive
      </Tag>
      <Tag colorScheme="info" variant="subtle">
        Draft
      </Tag>
    </div>
  ),
};

export const SkillTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="outline" colorScheme="primary" onClose={() => {}}>
        React
      </Tag>
      <Tag variant="outline" colorScheme="accent" onClose={() => {}}>
        TypeScript
      </Tag>
      <Tag variant="outline" colorScheme="primary" onClose={() => {}}>
        Node.js
      </Tag>
      <Tag variant="outline" colorScheme="accent" onClose={() => {}}>
        GraphQL
      </Tag>
      <Tag variant="outline" colorScheme="primary" onClose={() => {}}>
        PostgreSQL
      </Tag>
    </div>
  ),
};

export const ProductTags: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Tag
          leftIcon={<Star />}
          colorScheme="warning"
          variant="subtle"
          size="sm"
        >
          Bestseller
        </Tag>
        <Tag colorScheme="error" variant="solid" size="sm">
          Sale
        </Tag>
        <Tag colorScheme="success" variant="subtle" size="sm">
          New
        </Tag>
      </div>
      <div className="flex flex-wrap gap-2">
        <Tag variant="outline" size="sm">
          Electronics
        </Tag>
        <Tag variant="outline" size="sm">
          Home & Garden
        </Tag>
        <Tag variant="outline" size="sm">
          Outdoor
        </Tag>
      </div>
    </div>
  ),
};

export const FilterTags: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="text-sm font-semibold">Active Filters:</div>
      <div className="flex flex-wrap gap-2">
        <Tag onClose={() => {}} variant="subtle">
          Category: Electronics
        </Tag>
        <Tag onClose={() => {}} variant="subtle">
          Price: $100-$500
        </Tag>
        <Tag onClose={() => {}} variant="subtle">
          Rating: 4+ stars
        </Tag>
        <Tag onClose={() => {}} variant="subtle">
          Brand: Apple
        </Tag>
      </div>
    </div>
  ),
};
