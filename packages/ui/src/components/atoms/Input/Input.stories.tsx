import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Lock, Search, User, Eye, EyeOff } from "lucide-react";
import { Input } from "./Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the input",
    },
    variant: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Visual style of the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="error" placeholder="Error variant" />
      <Input variant="success" placeholder="Success variant" />
    </div>
  ),
};

export const WithLeftIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input leftIcon={<Search />} placeholder="Search..." />
      <Input leftIcon={<Mail />} type="email" placeholder="Email address" />
      <Input leftIcon={<User />} placeholder="Username" />
    </div>
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input rightIcon={<Search />} placeholder="Search..." />
      <Input rightIcon={<Mail />} type="email" placeholder="Email address" />
    </div>
  ),
};

export const PasswordInput: Story = {
  render: function PasswordExample() {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-80">
        <Input
          type={showPassword ? "text" : "password"}
          leftIcon={<Lock />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          }
          placeholder="Enter password"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          leftIcon={<Mail />}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          leftIcon={<Lock />}
        />
      </div>
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <Input variant="default" placeholder="Enter email" />
        <p className="mt-1 text-sm text-gray-500">
          We'll never share your email.
        </p>
      </div>
      <div>
        <Input variant="error" placeholder="Enter password" />
        <p className="mt-1 text-sm text-red-600">
          Password must be at least 8 characters.
        </p>
      </div>
      <div>
        <Input variant="success" placeholder="Username" />
        <p className="mt-1 text-sm text-green-600">Username is available!</p>
      </div>
    </div>
  ),
};

export const SearchBar: Story = {
  render: () => (
    <div className="w-96">
      <Input
        leftIcon={<Search />}
        placeholder="Search products, categories..."
        size="lg"
      />
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div className="w-80 p-6 border rounded-lg space-y-4">
      <h3 className="text-lg font-semibold">Sign In</h3>
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          leftIcon={<Mail />}
        />
      </div>
      <div>
        <label
          htmlFor="login-password"
          className="block text-sm font-medium mb-2"
        >
          Password
        </label>
        <Input
          id="login-password"
          type="password"
          placeholder="••••••••"
          leftIcon={<Lock />}
        />
      </div>
      <button className="w-full px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600">
        Sign In
      </button>
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input variant="error" placeholder="Search..." leftIcon={<Search />} />
      <Input
        variant="error"
        placeholder="Email"
        leftIcon={<Mail />}
        type="email"
      />
    </div>
  ),
};

export const AllSizesWithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" leftIcon={<Search />} placeholder="Small with icon" />
      <Input size="md" leftIcon={<Search />} placeholder="Medium with icon" />
      <Input size="lg" leftIcon={<Search />} placeholder="Large with icon" />
    </div>
  ),
};
