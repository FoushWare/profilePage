import React, { useState } from "react";
import ActionButton from "../../atoms/Buttons/ActionButton";

const filterOptions = ["Products", "Articles", "Reviews"];

const ProductsFilter: React.FC = () => {
  const [activeOption, setActiveOption] = useState(filterOptions[0]);

  return (
    <div className="flex justify-between items-start">
      <div className="">
        {filterOptions.map((option, index) => (
          <span
            key={index}
            onClick={() => setActiveOption(option)}
            className={`inline-block cursor-pointer rounded-3xl text-sm font-semibold mr-2 mb-2 py-2 px-5 ${
              activeOption === option
                ? "bg-[#FFF5E9] border border-[#FF951D] text-[#FF951D]"
                : "border border-[#E0E0E0] bg-white text-gray-700"
            }`}
          >
            {option}
          </span>
        ))}
      </div>
      <ActionButton text="Add Review" Icon="/icons/add-circle.svg" />
    </div>
  );
};

export default ProductsFilter;
