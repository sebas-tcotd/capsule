import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "atoms"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular"],
      description: "Shape variant of the skeleton",
    },
    width: {
      control: "text",
      description: "Width of the skeleton",
    },
    height: {
      control: "text",
      description: "Height of the skeleton",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "200px",
    height: "20px",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">Text</span>
        <Skeleton variant="text" width="200px" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">Circular</span>
        <Skeleton variant="circle" width="40px" height="40px" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">Rectangular</span>
        <Skeleton variant="rect" width="200px" height="100px" />
      </div>
    </div>
  ),
};

export const TextLines: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
    </div>
  ),
};

export const UserCard: Story = {
  render: () => (
    <div className="flex items-center gap-3 w-80 p-4 border rounded-lg">
      <Skeleton variant="circle" width="48px" height="48px" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  ),
};

export const BlogPost: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Skeleton variant="rect" width="100%" height="200px" />
      <Skeleton variant="text" width="60%" height="24px" />
      <div className="space-y-2">
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <div className="w-64 border rounded-lg overflow-hidden">
      <Skeleton variant="rect" width="100%" height="200px" />
      <div className="p-4 space-y-3">
        <Skeleton variant="text" width="80%" height="20px" />
        <Skeleton variant="text" width="60%" />
        <div className="flex justify-between items-center">
          <Skeleton variant="text" width="40%" height="24px" />
          <Skeleton variant="rect" width="80px" height="36px" />
        </div>
      </div>
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circle" width="40px" height="40px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Table: Story = {
  render: () => (
    <div className="w-full space-y-3">
      <div className="flex gap-4">
        <Skeleton variant="rect" width="40px" height="40px" />
        <Skeleton variant="rect" width="200px" height="40px" />
        <Skeleton variant="rect" width="150px" height="40px" />
        <Skeleton variant="rect" width="100px" height="40px" />
      </div>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4">
          <Skeleton variant="text" width="40px" />
          <Skeleton variant="text" width="200px" />
          <Skeleton variant="text" width="150px" />
          <Skeleton variant="text" width="100px" />
        </div>
      ))}
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="80%" height="32px" />
          </div>
        ))}
      </div>
      <Skeleton variant="rect" width="100%" height="300px" />
    </div>
  ),
};
