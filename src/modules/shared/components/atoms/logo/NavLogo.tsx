import Link from "next/link";
import Box from "../Box/Box";
import Image from "next/image";

const NavLogo = () => {
  return (
    <Box>
      <Link href="/">
        <Image
          src="/images/mazaady-logo.svg"
          width={150}
          height={50}
          alt="logo"
          className="w-24 h-12 md:w-36 md:h-16 cursor-pointer"
        />
      </Link>
    </Box>
  );
};

export default NavLogo;
