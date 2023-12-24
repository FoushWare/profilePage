import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "./types";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/#" },
  { name: "Gifts", href: "/##" },
];

const NavLink = ({ name, href, isActive }: NavLinkProps) => (
  <li className="px-3 py-4 pb-0">
    <Link href={href}>
      <div className="pb-2">{name}</div>
      <div
        className={` md:block w-1/4 md:w-full h-1 mt-2 ${
          isActive ? "bg-red-500 rounded-tl rounded-tr" : "bg-transparent"
        }`}
      ></div>
    </Link>
  </li>
);

const NavLinks = ({ classes }: { classes?: string }) => {
  const router = useRouter();
  const navLinksClasses = `md:flex ml-6 md:space-x-4 ${classes}`;

  return (
    <ul className={navLinksClasses}>
      {navlinks.map((link) => (
        <NavLink
          key={link.name}
          {...link}
          isActive={router.pathname === link.href}
        />
      ))}
    </ul>
  );
};

export default NavLinks;
