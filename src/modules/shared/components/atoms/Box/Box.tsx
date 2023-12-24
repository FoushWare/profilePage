import classNames from "classnames";
import type { IBox } from "./IBox";
import type { ReactElement } from "react";

const Box = ({
  classes,
  isGreyColor,
  isWhiteColor,
  children,
}: IBox.IProps): ReactElement => {
  const boxClasses = classNames(
    {
      "bg-grey-bg": isGreyColor,
      "bg-white": isWhiteColor,
    },
    classes
  );
  return <div className={boxClasses}>{children}</div>;
};
export default Box;
