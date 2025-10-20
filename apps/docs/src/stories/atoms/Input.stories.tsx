import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@capsule/ui";

const meta = {
  title: "Atoms/Input",
  component: Input,
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
      description: "Visual variant of the input",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the input should take full width",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "HTML input type",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Hello World",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    placeholder: "Email is required",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    defaultValue: "john@example.com",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium input (default)",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input",
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: "Full width input",
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    placeholder: "Search...",
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Enter password",
    type: "password",
    rightIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Username",
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    rightIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    defaultValue: "johndoe",
    variant: "success",
  },
};

// Input types
export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "your@email.com",
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Enter amount",
    defaultValue: "100",
  },
};

// Real-world examples
export const SearchBar: Story = {
  name: "Search Bar Example",
  args: {
    placeholder: "Search products...",
    size: "lg",
    fullWidth: true,
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
};

export const FormField: Story = {
  name: "Form Field Example",
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <Input id="name" placeholder="John Doe" fullWidth />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          fullWidth
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          }
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
          fullWidth
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
        />
      </div>

      <div>
        <label
          htmlFor="email-error"
          className="block text-sm font-medium mb-2 text-error-700"
        >
          Email (with error)
        </label>
        <Input
          id="email-error"
          type="email"
          variant="error"
          defaultValue="invalid-email"
          fullWidth
        />
        <p className="mt-1 text-sm text-error-600">
          Please enter a valid email address
        </p>
      </div>

      <div>
        <label
          htmlFor="username-success"
          className="block text-sm font-medium mb-2 text-success-700"
        >
          Username (available)
        </label>
        <Input
          id="username-success"
          variant="success"
          defaultValue="johndoe"
          fullWidth
          rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          }
        />
        <p className="mt-1 text-sm text-success-600">Username is available!</p>
      </div>
    </div>
  ),
};
