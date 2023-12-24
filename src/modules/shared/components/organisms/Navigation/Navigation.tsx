import { useState } from "react";
import DesktopNavigation from "@/modules/shared/components/molecules/DesktopNavigation";
import MobileNavigation from "@/modules/shared/components/molecules/MobileNavigation";

const Navigation = () => {
  // control priority which dropdown menu to show [menu Header, notification, profile]
  const [openDropdown, setOpenDropdown] = useState<
    "menu" | "notification" | "profile" | null
  >(null);
  const handleDropdownClick = (
    dropdown: "menu" | "notification" | "profile" | null
  ) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <>
      <DesktopNavigation
        openDropdown={openDropdown}
        handleDropdownClick={handleDropdownClick}
      />
      <MobileNavigation
        openDropdown={openDropdown}
        handleDropdownClick={handleDropdownClick}
      />
    </>
  );
};

export default Navigation;
