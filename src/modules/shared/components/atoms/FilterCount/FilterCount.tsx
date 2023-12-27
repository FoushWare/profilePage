import React from "react";
import { FilterCountProps } from "./types";

const FilterCount: React.FC<FilterCountProps> = ({ name, count }) => {
  return (
    <div className="flex items-center">
      <span className=" text-[#333] font-nunito text-2xl font-extrabold mt-3">
        {name}
      </span>
      <span className="  px-2 py-1 text-sm font-semibold text-[#828282] mt-3">
        ({count})
      </span>
    </div>
  );
};

export default FilterCount;
