import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the avatar",
    },
    fallbackColor: {
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
      description: "Color scheme for the fallback background",
    },
    src: {
      control: "text",
      description: "URL of the avatar image",
    },
    alt: {
      control: "text",
      description: "Alt text for the avatar image",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "User avatar",
    name: "Sebastian Vargas",
  },
};

export const WithInitials: Story = {
  args: {
    name: "Sebastian Vargas",
    alt: "John Doe",
  },
};

export const Sizes: Story = {
  args: { name: "Sebastian Vargas" },
  render: (args) => (
    <div className="flex items-end gap-4">
      <Avatar
        {...args}
        size="sm"
        src="https://i.pravatar.cc/150?img=2"
        alt="Small"
      />
      <Avatar
        {...args}
        size="md"
        src="https://i.pravatar.cc/150?img=3"
        alt="Medium"
      />
      <Avatar
        {...args}
        size="lg"
        src="https://i.pravatar.cc/150?img=4"
        alt="Large"
      />
      <Avatar
        {...args}
        size="xl"
        src="https://i.pravatar.cc/150?img=5"
        alt="Extra Large"
      />
    </div>
  ),
};

export const InitialsSizes: Story = {
  args: { name: "John Doe" },
  render: (args) => (
    <div className="flex items-end gap-4">
      <Avatar {...args} size="sm" alt="John Doe" />
      <Avatar {...args} size="md" alt="John Doe" />
      <Avatar {...args} size="lg" alt="John Doe" />
      <Avatar {...args} size="xl" alt="John Doe" />
    </div>
  ),
};

export const FallbackColors: Story = {
  args: { name: "John Doe" },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Avatar {...args} fallbackColor="primary" alt="Primary" />
      <Avatar {...args} fallbackColor="accent" alt="Accent" />
      <Avatar {...args} fallbackColor="success" alt="Success" />
      <Avatar {...args} fallbackColor="warning" alt="Warning" />
      <Avatar {...args} fallbackColor="error" alt="Error" />
      <Avatar {...args} fallbackColor="info" alt="Info" />
      <Avatar {...args} fallbackColor="neutral" alt="Neutral" />
    </div>
  ),
};

export const ImageError: Story = {
  args: {
    src: "https://invalid-url.com/image.jpg",
    name: "",
    alt: "Fallback to initials",
  },
};

export const UserList: Story = {
  args: { name: "" },
  render: (args) => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar {...args} src="https://i.pravatar.cc/150?img=6" alt="Alice" />
        <div>
          <div className="font-semibold">Alice Johnson</div>
          <div className="text-sm text-gray-500">alice@example.com</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar {...args} fallbackColor="accent" alt="Bob" />
        <div>
          <div className="font-semibold">Bob Wilson</div>
          <div className="text-sm text-gray-500">bob@example.com</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar {...args} fallbackColor="neutral" alt="Guest" />
        <div>
          <div className="font-semibold">Guest User</div>
          <div className="text-sm text-gray-500">guest@example.com</div>
        </div>
      </div>
    </div>
  ),
};

export const AvatarGroup: Story = {
  args: { name: "" },
  render: (args) => (
    <div className="flex -space-x-2">
      <Avatar
        {...args}
        src="https://i.pravatar.cc/150?img=7"
        alt="User 1"
        className="ring-2 ring-white"
      />
      <Avatar
        {...args}
        src="https://i.pravatar.cc/150?img=8"
        alt="User 2"
        className="ring-2 ring-white"
      />
      <Avatar {...args} alt="User 3" className="ring-2 ring-white" />
      <Avatar {...args} alt="User 4" className="ring-2 ring-white" />
    </div>
  ),
};
