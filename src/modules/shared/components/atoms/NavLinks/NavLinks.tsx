import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "./types";
import { useEffect, useState } from "react";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/#" },
  { name: "Gifts", href: "/##" },
];

const NavLink = ({
  name,
  href,
  isActive,
}: NavLinkProps & { isActive: boolean }) => (
  <li className="px-3 py-4 pb-0">
    <Link href={href}>
      <div className="pb-2">{name}</div>
      <div
        className={`md:block w-1/6 md:w-full h-1 mt-2 ${
          isActive ? "bg-red-500 rounded-tl rounded-tr" : "bg-transparent"
        }`}
      ></div>
    </Link>
  </li>
);

const NavLinks = ({ classes }: { classes?: string }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.asPath);

  useEffect(() => setActiveLink(router.asPath), [router.asPath]);

  return (
    <ul className={`md:flex ml-6 md:space-x-4 ${classes}`}>
      {navlinks.map((link) => (
        <NavLink
          key={link.name}
          {...link}
          isActive={link.href === activeLink}
        />
      ))}
    </ul>
  );
};
export default NavLinks;
