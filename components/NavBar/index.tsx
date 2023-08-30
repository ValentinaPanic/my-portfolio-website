import { NextPage } from "next";
import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import Logo from "../Logo";

const Navbar: NextPage<{
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}> = ({ darkMode, setDarkMode }) => (
  <header>
    <nav className="  text-zinc-700 font-mono dark:text-white bg-gradient-to-r  from-amber-700 to-amber-400 py-5 mb-10 flex items-center justify-between dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-600">
      <Logo />
      <div className="flex justify-around">
        <div
          className="px-4 py-2 cursor-pointer text-2xl"
          onClick={() => setDarkMode(!darkMode)}
        >
          <BsFillMoonStarsFill />
        </div>
        <Link className="mx-4 py-2" href={"/"}>
          Home
        </Link>
        <Link className="mx-4 py-2" href={"/resume"}>
          Resume
        </Link>
        <Link className="mx-4 py-2" href={"/about"}>
          About
        </Link>
        <Link className="mx-4 py-2" href={"/projects"}>
          Projects
        </Link>
      </div>
    </nav>
  </header>
);
export default Navbar;
