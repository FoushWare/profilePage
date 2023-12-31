import React from "react";
import { ReactSVG } from "react-svg";
import { ICircleAvatar } from "./ICircleAvatar";
import classNames from "classnames";

const CircleAvatar = ({
  classes,
  handleDropdownClick,
  openDropdown,
}: ICircleAvatar.IProps) => {
  const toggleDropdown = () => {
    if (handleDropdownClick) {
      handleDropdownClick(openDropdown === "profile" ? null : "profile");
    }
  };
  const CircleAvatarClasses = classNames(classes);

  return (
    <div className={`relative ${CircleAvatarClasses}`}>
      <ReactSVG
        src="/icons/circleavatar.svg"
        className="hover:cursor-pointer rounded-full"
        onClick={toggleDropdown}
      />
      {openDropdown === "profile" && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="px-4 py-3">
            <p className="text-sm leading-5">Profile</p>
          </div>
          <div className="px-4 py-3">
            <p className="text-sm leading-5">Settings</p>
          </div>
          <div className="px-4 py-3">
            <p className="text-sm leading-5">Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CircleAvatar;
