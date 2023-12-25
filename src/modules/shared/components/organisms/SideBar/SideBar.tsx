import ProfileInfoCard from "@/modules/shared/components/molecules/ProfileInfoCard/ProfileInfoCard";
import QRCodeCard from "@/modules/shared/components/molecules/QRCodeCard/QRCodeCard";
const SideBar = () => {
  const metricsData = [
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
    { icon: "/icons/audience-metrics/rating.svg", count: 4.5, name: "Rating" },
  ];
  return (
    <div className="col-span-12 md:col-span-4">
      <ProfileInfoCard
        name="Hala Ahmed"
        avatarUrl="/images/avatar.svg"
        description="I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care."
        metrics={metricsData}
      />
      <QRCodeCard
        name="Hala Ahmed"
        qrValue="https://www.youtube.com/watch?v=7XUibDY0t9o"
      />
    </div>
  );
};

export default SideBar;
