import React from "react";

type AudienceMetricProps = {
  icon: string;
  count: number;
  name: string;
};

const AudienceMetric: React.FC<AudienceMetricProps> = ({
  icon,
  count,
  name,
}) => {
  return (
    <div className="flex items-center bg-[#fdf5e9] p-2 rounded-xl font-Nunito">
      <img src={icon} alt={name} className="w-6 h-6 mr-2" />
      <div>
        <p className="font-bold text-sm">{count}</p>
        <p className="text-[#FF951D] text-xs">{name}</p>
      </div>
    </div>
  );
};

export default AudienceMetric;
