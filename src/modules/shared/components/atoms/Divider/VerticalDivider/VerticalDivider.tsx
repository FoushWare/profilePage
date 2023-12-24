import classNames from "classnames";
import React from "react";

const VerticalDivider = ({ classes }: { classes?: string }) => {
  const verticalDividerClasses = classNames(
    "border-l-2 border-[#fcead2] h-10 mx-6",
    classes
  );
  return <div className={verticalDividerClasses}></div>;
};

export default VerticalDivider;
