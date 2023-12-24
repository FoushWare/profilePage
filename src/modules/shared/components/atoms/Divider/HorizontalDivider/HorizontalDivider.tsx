import classNames from "classnames";
import React from "react";

const HorizontalDivider = ({ classes }: { classes?: string }) => {
  const horizontalDividerClasses = classNames(
    "border-t-2 border-[#fcead2] w-full my-6",
    classes
  );
  return <div className={horizontalDividerClasses}></div>;
};

export default HorizontalDivider;
