import { TimingMetricProps } from "./types";

const TimingMetric: React.FC<TimingMetricProps> = ({ count, metric }) => {
  return (
    <div className="inline-flex items-center px-2 sm:px-9 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#fdf5e9] text-[#FF951D]">
      <span className="font-Nunito font-bold mr-1 sm:mr-2 text-sm sm:text-lg">
        {count}
      </span>
      {metric}
    </div>
  );
};

export default TimingMetric;
