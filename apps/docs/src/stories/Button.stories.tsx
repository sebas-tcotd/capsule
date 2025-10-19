import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@capsule/ui/button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appName: "Capsule",
    children: "I'm a primary button",
  },
};
