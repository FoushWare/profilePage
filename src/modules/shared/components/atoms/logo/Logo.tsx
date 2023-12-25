import Link from "next/link";
import Box from "../Box/Box";
import Image from "next/image";
import classNames from "classnames";

interface LogoType {
  classes?: string;
}
const Logo = ({ classes }: LogoType) => {
  const logoClasses = classNames("w-24 h-12 md:w-36 md:h-16 cursor-pointer", {
    [`${classes}`]: classes,
  });
  return (
    <Box>
      <Link href="/">
        <Image
          src="/images/mazaady-logo.svg"
          width={150}
          height={50}
          alt="logo"
          className={logoClasses}
        />
      </Link>
    </Box>
  );
};

export default Logo;
