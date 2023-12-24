import Link from "next/link";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/#" },
  { name: "Gifts", href: "/#" },
];

const NavLinks = ({ classes }: { classes?: string }) => {
  const navLinksClasses = `md:flex ml-6 md:space-x-4 ${classes}`;
  return (
    <ul className={navLinksClasses}>
      {navlinks.map((link) => (
        <li key={link.name} className="px-2 py-3">
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
