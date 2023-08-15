"use client";
import React, { useState } from "react";
import NavButton from "./NavButton";
import { BsPersonPlusFill } from "react-icons/bs";
import { BiMenu, BiSolidMoviePlay } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

const SideNav = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/home",
      icon: <AiFillHome />,
    },
    {
      name: "Person",
      link: "/person",
      icon: <BsPersonPlusFill />,
    },
    {
      name: "Content",
      link: "/content",
      icon: <BiSolidMoviePlay />,
    },
  ];
  const [navBtn, setNavBtn] = useState(false);
  return (
    <div className="h-fit md:h-full bg-orange-200 w-full md:w-fit">
      <div
        onClick={() => setNavBtn(!navBtn)}
        className="md:hidden p-3 text-2xl"
      >
        <BiMenu />
      </div>
      <div
        className={`h-full md:flex flex-col gap-3 w-full md:w-52 py-12 items-center ${
          navBtn ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((item, index) => (
          <NavButton key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
