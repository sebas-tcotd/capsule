import type { Meta, StoryObj } from "@storybook/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    variant: {
      control: "select",
      options: ["inline", "standalone"],
      description: "Visual style of the link",
    },
    colorScheme: {
      control: "select",
      options: ["primary", "accent"],
      description: "Color scheme of the link",
    },
    isExternal: {
      control: "boolean",
      description: "Whether the link is external",
    },
    href: {
      control: "text",
      description: "URL of the link",
    },
    children: {
      control: "text",
      description: "Content of the link",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Click here",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link variant="inline" href="#">
        Inline link (with underline)
      </Link>
      <Link variant="standalone" href="#">
        Standalone link (hover to underline)
      </Link>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link colorScheme="primary" href="#">
        Primary link
      </Link>
      <Link colorScheme="accent" href="#">
        Accent link
      </Link>
    </div>
  ),
};

export const External: Story = {
  args: {
    href: "https://example.com",
    isExternal: true,
    children: "Visit external site",
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" className="inline-flex items-center gap-1">
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        href="https://example.com"
        isExternal
        className="inline-flex items-center gap-1"
      >
        External link <ExternalLink className="w-4 h-4" />
      </Link>
    </div>
  ),
};

export const InlineVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link variant="inline" colorScheme="primary" href="#">
        Primary inline
      </Link>
      <Link variant="inline" colorScheme="accent" href="#">
        Accent inline
      </Link>
    </div>
  ),
};

export const StandaloneVariant: Story = {
  render: () => (
    <div className="flex gap-3">
      <Link variant="standalone" colorScheme="primary" href="#">
        Primary standalone
      </Link>
      <Link variant="standalone" colorScheme="accent" href="#">
        Accent standalone
      </Link>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p className="max-w-md text-gray-700">
      This is a paragraph with an{" "}
      <Link variant="inline" href="#">
        inline link
      </Link>{" "}
      that demonstrates how links work within text content. You can also{" "}
      <Link variant="inline" href="https://example.com" isExternal>
        visit external sites
      </Link>{" "}
      seamlessly.
    </p>
  ),
};

export const Navigation: Story = {
  render: () => (
    <nav className="flex gap-6">
      <Link variant="standalone" href="#">
        Home
      </Link>
      <Link variant="standalone" href="#">
        About
      </Link>
      <Link variant="standalone" href="#">
        Services
      </Link>
      <Link variant="standalone" href="#">
        Contact
      </Link>
    </nav>
  ),
};

export const Footer: Story = {
  render: () => (
    <footer className="bg-gray-900 text-white p-8 rounded-lg">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <div className="flex flex-col gap-2">
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Features
            </Link>
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Pricing
            </Link>
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <div className="flex flex-col gap-2">
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Blog
            </Link>
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Careers
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <div className="flex flex-col gap-2">
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Privacy
            </Link>
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Terms
            </Link>
            <Link
              variant="standalone"
              href="#"
              className="text-gray-300 hover:text-white"
            >
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  ),
};

export const Breadcrumbs: Story = {
  render: () => (
    <nav className="flex items-center gap-2 text-sm">
      <Link variant="standalone" href="#">
        Home
      </Link>
      <span className="text-gray-400">/</span>
      <Link variant="standalone" href="#">
        Products
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-600">Current Page</span>
    </nav>
  ),
};
