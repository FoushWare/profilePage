import type { ReactElement } from "react";

declare namespace ICircleAvatar {
  export interface IProps {
    classes?: string;
    isMenuOpen?: boolean;
    handleMenuClick?: () => void;
  }
}

export { ICircleAvatar };
