import React from "react";
import NavLinks from "@/modules/shared/components/atoms/NavLinks/NavLinks";
import ActionButton from "@/modules/shared/components/atoms/Buttons/ActionButton";
import Box from "@/modules/shared/components/atoms/Box/Box";
import LanguageSwitcher from "../atoms/LanguageSwitcher/LanguageSwitcher";
import HorizontalDivider from "../atoms/Divider/HorizontalDivider/HorizontalDivider";

interface MobileNavProps {
  openDropdown: "menu" | "notification" | "profile" | null;
  handleDropdownClick: (
    dropdown: "menu" | "notification" | "profile" | null
  ) => void;
}

const MobileNav = ({ openDropdown }: MobileNavProps) => {
  if (openDropdown !== "menu") return null;
  return (
    <header className="absolute z-10 bg-white text-black w-full md:hidden pb-4">
      <NavLinks />
      <HorizontalDivider classes="mt-4 w-5/6 mx-auto " />
      <Box classes="mt-4 mx-4 ">
        <ActionButton text="Add New Product" Icon="/icons/add-circle.svg" />
      </Box>
      <LanguageSwitcher classes="mt-4 mx-4" />
    </header>
  );
};

export default MobileNav;
