import { useState } from "react";
import NavLinks from "@/modules/shared/components/atoms/NavLinks/NavLinks";
import NavSearch from "@/modules/shared/components/atoms/NavSearch/NavSearch";
import NavLogo from "@/modules/shared/components/atoms/logo/NavLogo";
import NotificationIcon from "@/modules/shared/components/atoms/NotificationIcon/NotificationIcon";
import VerticalDivider from "@/modules/shared/components/atoms/VerticalDivider/VerticalDivider";
import CircleAvatar from "@/modules/shared/components/atoms/Avatar/circleAvatar";
import ActionButton from "@/modules/shared/components/atoms/Buttons/ActionButton";
import LanguageSwitcher from "@/modules/shared/components/atoms/LanguageSwitcher/LanguageSwitcher";
import { ReactSVG } from "react-svg";

interface DesktopNavigationProps {
  isMenuOpen: boolean;
  handleMenuClick: () => void;
}
const Navigation = ({
  handleMenuClick,
  isMenuOpen,
}: DesktopNavigationProps) => {
  return (
    <nav className="relative  w-full bg-white text-black border-b-2 p-4">
      <div className="container mx-auto px-0 md:px-4 flex items-center justify-between">
        {/* Left Navbar */}
        <div className="flex items-center">
          <ReactSVG
            src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
            className="md:hidden mr-4 cursor-pointer"
            onClick={handleMenuClick}
          />
          <NavLogo />
          <NavLinks classes="hidden md:flex" />
        </div>
        {/* Right Navbar */}
        <div className="flex items-center gap-5 md:gap-0">
          <NavSearch />
          <VerticalDivider classes="hidden md:block" />
          <NotificationIcon
            handleMenuClick={handleMenuClick}
            isMenuOpen={isMenuOpen}
          />
          <VerticalDivider classes="hidden md:block" />
          <CircleAvatar
            classes="mr-0 md:mr-6"
            handleMenuClick={handleMenuClick}
            isMenuOpen={isMenuOpen}
          />
          <ActionButton
            text="Add New Product"
            Icon="/icons/add-circle.svg"
            classes="hidden md:flex"
          />
          <LanguageSwitcher classes="hidden md:block" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
