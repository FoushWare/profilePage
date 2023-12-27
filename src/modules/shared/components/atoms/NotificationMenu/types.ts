export interface NotificationIconProps {
  handleDropdownClick: (
    dropdown: "menu" | "notification" | "profile" | null
  ) => void;
  openDropdown?: "menu" | "notification" | "profile" | null;
}
