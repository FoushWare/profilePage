import { Meta, StoryObj } from "@storybook/react";

import Avatar from "./circleAvatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Atoms/CircleAvatar",
  component: Avatar,
  argTypes: {
    openDropdown: {
      options: ["profile", "menu", "notification", null],
      control: { type: "radio" },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center w-full h-screen">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  name: "Default",

  args: {
    openDropdown: "profile",
    handleDropdownClick: () => {},
    classes: "",
  },
};
