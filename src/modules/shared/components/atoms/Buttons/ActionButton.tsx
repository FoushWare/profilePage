import classNames from "classnames";
import React from "react";
import { ReactSVG } from "react-svg";

interface ActionButtonProps {
  text: string;
  Icon?: string;
  classes?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, Icon, classes }) => {
  const buttonClasses = classNames(
    "bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-xl flex items-center justify-center text-sm",
    classes
  );
  return (
    <button className={buttonClasses}>
      {Icon && <ReactSVG src={Icon} className="mr-2" />}
      {text}
    </button>
  );
};

export default ActionButton;
