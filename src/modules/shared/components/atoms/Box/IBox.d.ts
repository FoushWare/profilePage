import type { ReactElement } from "react";

declare namespace IBox {
  export interface IProps {
    classes?: string;
    isGreyColor?: boolean;
    isWhiteColor?: boolean;
    children: ReactElement[] | ReactElement; // Accept an array of ReactElements or a single ReactElement
  }
}

export { IBox };
