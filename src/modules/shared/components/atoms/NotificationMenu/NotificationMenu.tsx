import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { NotificationIconProps } from "./types";

const NotificationMenu = ({
  handleDropdownClick,
  openDropdown,
}: NotificationIconProps) => {
  const toggleDropdown = () => {
    handleDropdownClick(
      openDropdown === "notification" ? null : "notification"
    );
  };

  const notifications = [
    { id: 1, text: "Notification 1" },
    { id: 2, text: "Notification 2" },
    // Add more notifications as needed
  ];

  return (
    <div className="relative">
      <ReactSVG
        src="/icons/notification.svg"
        className="hover:cursor-pointer"
        data-testid="notification-icon"
        onClick={toggleDropdown}
      />
      {openDropdown === "notification" && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="px-4 py-3 text-sm leading-5 hover:bg-gray-100 hover:cursor-pointer"
              data-testid="notification-message"
            >
              {notification.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;
