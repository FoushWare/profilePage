import NavLinks from "@/modules/shared/components/atoms/NavLinks/NavLinks";
import NavSearch from "@/modules/shared/components/atoms/NavSearch/NavSearch";
import NavLogo from "@/modules/shared/components/atoms/logo/Logo";
import NotificationMenu from "@/modules/shared/components/atoms/NotificationMenu/NotificationMenu";
import VerticalDivider from "@/modules/shared/components/atoms/Divider/VerticalDivider/VerticalDivider";
import CircleAvatar from "@/modules/shared/components/atoms/Avatar/circleAvatar";
import ActionButton from "@/modules/shared/components/atoms/Buttons/ActionButton";
import LanguageSwitcher from "@/modules/shared/components/atoms/LanguageSwitcher/LanguageSwitcher";
import { ReactSVG } from "react-svg";
import { DesktopNavigationProps } from "./types";

const Navigation = ({
  openDropdown,
  handleDropdownClick,
}: DesktopNavigationProps) => {
  return (
    <nav className="relative  w-full bg-white text-black p-1 pb-0 md:px-0 px-4 py-2">
      <div className="container mx-auto px-0 md:px-4 flex items-center justify-between">
        {/* Left Navbar */}
        <div className="flex items-center gap-2">
          <ReactSVG
            src="/icons/menu.svg"
            className="md:hidden  cursor-pointer"
            onClick={() =>
              handleDropdownClick(openDropdown === "menu" ? null : "menu")
            }
          />

          <NavLogo />
          <NavLinks classes="hidden md:flex" />
        </div>
        {/* Right Navbar */}
        <div className="flex items-center gap-5 md:gap-2">
          <NavSearch />
          <VerticalDivider classes="hidden md:block" />
          <NotificationMenu
            handleDropdownClick={handleDropdownClick}
            openDropdown={openDropdown}
          />
          <VerticalDivider classes="hidden md:block" />
          <CircleAvatar
            classes="mr-0 md:mr-6"
            handleDropdownClick={handleDropdownClick}
            openDropdown={openDropdown}
          />
          <ActionButton
            text="Add New Product"
            Icon="/icons/add-circle.svg"
            classes="hidden lg:flex"
          />
          <LanguageSwitcher classes="hidden md:block" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
