import type { Meta, StoryObj } from "@storybook/react";
import {
  Heart,
  Search,
  Plus,
  X,
  Settings,
  Trash2,
  Edit,
  Download,
} from "lucide-react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
      description: "Visual style of the button",
    },
    colorScheme: {
      control: "select",
      options: ["primary", "accent", "error", "neutral"],
      description: "Color scheme of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
    },
    isRound: {
      control: "boolean",
      description: "Whether the button should be round",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Heart />,
    "aria-label": "Like",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <IconButton icon={<Heart />} variant="solid" aria-label="Solid" />
      <IconButton icon={<Heart />} variant="outline" aria-label="Outline" />
      <IconButton icon={<Heart />} variant="ghost" aria-label="Ghost" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex gap-2">
      <IconButton icon={<Heart />} colorScheme="primary" aria-label="Primary" />
      <IconButton icon={<Heart />} colorScheme="accent" aria-label="Accent" />
      <IconButton icon={<Heart />} colorScheme="error" aria-label="Error" />
      <IconButton icon={<Heart />} colorScheme="neutral" aria-label="Neutral" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton icon={<Search />} size="sm" aria-label="Small" />
      <IconButton icon={<Search />} size="md" aria-label="Medium" />
      <IconButton icon={<Search />} size="lg" aria-label="Large" />
    </div>
  ),
};

export const Round: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton icon={<Plus />} size="sm" isRound aria-label="Small round" />
      <IconButton icon={<Plus />} size="md" isRound aria-label="Medium round" />
      <IconButton icon={<Plus />} size="lg" isRound aria-label="Large round" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <IconButton
        icon={<Heart />}
        variant="solid"
        disabled
        aria-label="Disabled solid"
      />
      <IconButton
        icon={<Heart />}
        variant="outline"
        disabled
        aria-label="Disabled outline"
      />
      <IconButton
        icon={<Heart />}
        variant="ghost"
        disabled
        aria-label="Disabled ghost"
      />
    </div>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <div className="flex gap-2">
      <IconButton
        icon={<Heart />}
        variant="outline"
        colorScheme="primary"
        aria-label="Primary"
      />
      <IconButton
        icon={<Search />}
        variant="outline"
        colorScheme="accent"
        aria-label="Accent"
      />
      <IconButton
        icon={<Trash2 />}
        variant="outline"
        colorScheme="error"
        aria-label="Error"
      />
      <IconButton
        icon={<Settings />}
        variant="outline"
        colorScheme="neutral"
        aria-label="Neutral"
      />
    </div>
  ),
};

export const GhostVariant: Story = {
  render: () => (
    <div className="flex gap-2">
      <IconButton
        icon={<Heart />}
        variant="ghost"
        colorScheme="primary"
        aria-label="Primary"
      />
      <IconButton
        icon={<Search />}
        variant="ghost"
        colorScheme="accent"
        aria-label="Accent"
      />
      <IconButton
        icon={<Trash2 />}
        variant="ghost"
        colorScheme="error"
        aria-label="Error"
      />
      <IconButton
        icon={<Settings />}
        variant="ghost"
        colorScheme="neutral"
        aria-label="Neutral"
      />
    </div>
  ),
};

export const CommonActions: Story = {
  render: () => (
    <div className="flex gap-2">
      <IconButton icon={<Plus />} aria-label="Add" colorScheme="primary" />
      <IconButton icon={<Edit />} aria-label="Edit" colorScheme="accent" />
      <IconButton icon={<Trash2 />} aria-label="Delete" colorScheme="error" />
      <IconButton
        icon={<Download />}
        aria-label="Download"
        colorScheme="neutral"
      />
      <IconButton icon={<X />} aria-label="Close" variant="ghost" />
    </div>
  ),
};

export const InToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 p-2 border rounded-lg">
      <IconButton icon={<Edit />} variant="ghost" size="sm" aria-label="Edit" />
      <IconButton
        icon={<Download />}
        variant="ghost"
        size="sm"
        aria-label="Download"
      />
      <IconButton
        icon={<Trash2 />}
        variant="ghost"
        size="sm"
        aria-label="Delete"
        colorScheme="error"
      />
      <div className="w-px h-6 bg-gray-300 mx-1" />
      <IconButton
        icon={<Settings />}
        variant="ghost"
        size="sm"
        aria-label="Settings"
      />
    </div>
  ),
};
