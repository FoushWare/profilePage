import type { ReactElement } from "react";

declare namespace ICircleAvatar {
  export interface IProps {
    classes?: string;
    handleDropdownClick?: (
      dropdown: "menu" | "notification" | "profile" | null
    ) => void;
    openDropdown?: "menu" | "notification" | "profile" | null;
  }
}

export { ICircleAvatar };
