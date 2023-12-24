import React, { useState } from "react";
import { ReactSVG } from "react-svg";
interface NotificationIconProps {
  handleMenuClick?: () => void;
  isMenuOpen?: boolean;
}
const NotificationIcon = ({
  handleMenuClick,
  isMenuOpen,
}: NotificationIconProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    if (isMenuOpen && handleMenuClick) handleMenuClick();
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
        onClick={toggleDropdown}
      />
      {dropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          {notifications.map((notification) => (
            <div key={notification.id} className="px-4 py-3">
              <p className="text-sm leading-5">{notification.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;
