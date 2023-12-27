export interface DesktopNavigationProps {
  openDropdown: "menu" | "notification" | "profile" | null;
  handleDropdownClick: (
    dropdown: "menu" | "notification" | "profile" | null
  ) => void;
}

export interface MobileNavProps {
  openDropdown: "menu" | "notification" | "profile" | null;
  handleDropdownClick: (
    dropdown: "menu" | "notification" | "profile" | null
  ) => void;
}
