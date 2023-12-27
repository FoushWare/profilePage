import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";

import Navigation from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Components/Organisms/Navigation",
  component: Navigation,
  decorators: [(Story) => <Story />],
};
export default meta;

type Story = StoryObj<typeof Navigation>;

export const NavigationComponent: Story = {
  name: "Default",
};

NavigationComponent.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement);

  await step(
    "👣 test if the Nav logo exists in the Navigation Bar",
    async () => {
      const logo = await canvas.findByTestId("logo");
      expect(logo).toBeInTheDocument();
    }
  );
  await step("👣 test if the user can open notification menu", async () => {
    const notificationIcon = await canvas.findByTestId("notification-icon");
    expect(notificationIcon).toBeInTheDocument();
    await userEvent.click(notificationIcon);
    const notificationMessage = await canvas.findAllByTestId(
      "notification-message"
    );
    expect(notificationMessage).toHaveLength(2);
    await step("👣 test if the user can close notification menu", async () => {
      await userEvent.click(notificationIcon);
      await waitFor(() => {
        expect(canvas.queryAllByTestId("notification-message")).toHaveLength(0);
      });
    });
  });
};
