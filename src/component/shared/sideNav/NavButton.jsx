import Link from "next/link";
import React from "react";

const NavButton = ({ item, currentLink }) => {
  return (
    <Link
      className={`hover:bg-slate-50 w-[80%] font-semibold text-xl p-3 rounded-lg transition-all text-orange-700 flex gap-4 items-center ${
        currentLink === item.link && "bg-slate-50"
      }`}
      href={item ? item.link : ""}
    >
      {item.icon}
      {item?.name}
    </Link>
  );
};

export default NavButton;
