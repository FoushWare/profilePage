import { useState } from "react";

/**
 * Custom hook to manage dropdown state.
 * This Hook is used in the `Navigation` component to manage only showing one dropdown[Menu(header in mobile),notification,profile] at a time.
 * This hook provides a state variable `openDropdown` and a function `handleDropdownClick` to update it.
 * The `openDropdown` state can have one of the following values: "menu", "notification", "profile", or null.
 * The `handleDropdownClick` function takes one of the above values as an argument and updates `openDropdown` accordingly.
 *
 * @returns {Object} The `openDropdown` state and the `handleDropdownClick` function.
 * @property {string|null} openDropdown The current open dropdown.
 * @property {function} handleDropdownClick Function to update the `openDropdown` state.
 */
export const useDropdown = () => {
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

  return { openDropdown, handleDropdownClick };
};
