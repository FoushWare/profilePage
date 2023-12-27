import { Meta, StoryObj } from "@storybook/react";
import ProfileInfoCard from "./ProfileInfoCard";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof ProfileInfoCard> = {
  title: "Components/molecules/ProfileInfoCard",
  component: ProfileInfoCard,
};

export default meta;

type Story = StoryObj<typeof ProfileInfoCard>;

export const ProfileInfoCardStory: Story = {
  name: "Default",
  args: {
    avatarUrl: "https://i.pravatar.cc/300",
    name: "Hala Ahmed",
    description: "Software Engineer",
    metrics: [
      {
        icon: "/icons/audience-metrics/following.svg",
        count: 3,
        name: "Following",
      },
      {
        icon: "/icons/audience-metrics/followers.svg",
        count: 20,
        name: "Followers",
      },
      {
        icon: "/icons/audience-metrics/rating.svg",
        count: 4.5,
        name: "Rating",
      },
    ],
  },
};
ProfileInfoCardStory.play = async ({ canvasElement, step, args }) => {
  const canvas = within(canvasElement);

  await step("👣 test if the name exists in the ProfileInfoCard", async () => {
    const name = await canvas.findByText(args.name);
    expect(name).toBeInTheDocument();
  });
  await step(
    "👣 test if the description exists in the ProfileInfoCard",
    async () => {
      const description = await canvas.findByText(args.description);
      expect(description).toBeInTheDocument();
    }
  );
  await step(
    "👣 test if the metrics exists in the ProfileInfoCard",
    async () => {
      const metrics = await canvas.findAllByTestId("audience-metric");
      expect(metrics).toHaveLength(3);
    }
  );
};
