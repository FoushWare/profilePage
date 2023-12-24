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
        />
      </Link>
    </Box>
  );
};

export default NavLogo;
