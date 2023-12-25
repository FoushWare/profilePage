interface TimingMetricProps {
  count: string;
  metric: "days" | "hours" | "minutes";
}

const TimingMetric: React.FC<TimingMetricProps> = ({ count, metric }) => {
  return (
    <div className="inline-flex items-center px-9 py-2 rounded-full text-sm font-medium bg-[#fdf5e9] text-[#FF951D]">
      <span className="font-Nunito font-bold mr-2 text-lg">{count}</span>
      {metric}
    </div>
  );
};

export default TimingMetric;
