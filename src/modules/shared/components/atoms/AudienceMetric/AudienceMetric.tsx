import classNames from "classnames";
import React from "react";

type AudienceMetricProps = {
  icon: string;
  count: number;
  name: string;
  classes?: string;
};

const AudienceMetric: React.FC<AudienceMetricProps> = ({
  icon,
  count,
  name,
  classes,
}) => {
  const AudienceMetricClasses = classNames(
    // "flex items-center bg-[#fdf5e9]  py-3 px-2 rounded-xl font-Nunito w-[96px] min-[768px]:w-[90px]",
    "flex items-center bg-[#fdf5e9]  py-3 px-2 rounded-xl font-Nunito",
    classes
  );
  return (
    <div className={AudienceMetricClasses}>
      <img src={icon} alt={name} className="w-5 h-5 md:w-6 md:h-6 mr-1" />
      <div>
        <p className="font-bold text-sm">{count}</p>
        <p className="text-[#FF951D] text-xs">{name}</p>
      </div>
    </div>
  );
};

export default AudienceMetric;
