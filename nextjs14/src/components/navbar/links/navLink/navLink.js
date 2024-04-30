"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`min-w-[100px] px-2.5 py-2.5 rounded-full text-center font-medium
                  ${pathName === item.path ? 'bg-textColor text-bgColor' : 'text-textColorSoft hover:bg-bgColorSoft hover:text-white'}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
