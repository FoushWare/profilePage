import React from "react";
import ActionButton from "../../atoms/Buttons/ActionButton";
import AudienceMetric from "../../atoms/AudienceMetric/AudienceMetric";

type AudienceMetrics = {
  icon: string;
  count: number;
  name: string;
};

type ProfileInfoCardProps = {
  avatarUrl: string;
  name: string;
  description: string;
  metrics: AudienceMetrics[];
};

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({
  avatarUrl,
  name,
  description,
  metrics,
}) => {
  return (
    <div className="flex flex-col  p-4 bg-white shadow rounded-3xl">
      <div className="flex flex-col items-start">
        <img
          className="w-24 h-24 rounded-3xl mb-2"
          src={avatarUrl}
          alt={name}
        />
        <h2 className="text-lg font-Nunito font-bold">{name}</h2>
        <p className="text-sm text-gray-600 mb-4 font-Nunito">{description}</p>
      </div>
      <div className="flex items-center justify-between w-full my-3">
        {metrics.map((metric, index) => (
          <AudienceMetric key={index} {...metric} />
        ))}
      </div>
      <div className="flex  justify-center mt-4">
        <ActionButton text="Follow" classes="w-full" />
      </div>
    </div>
  );
};

export default ProfileInfoCard;
