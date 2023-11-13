"use client";
import { NextPage } from "next";
import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import Logo from "../Logo";
import { FaBars } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const CustomMobileLink = ({href, close, title}:{href: string, close: () => void, title: string}) => {
  const router = useRouter();

  const handleClick = () => {
    close();
    router.push(href);
  };
  return (
    <button onClick={handleClick} className="mx-4 py-2 font-semibold">
     {title}
    </button>
  );
};

const Navbar: NextPage<{
  darkMode: boolean;
  setDarkMode?: (value: boolean) => void;
}> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(!isOpen);
  return (
    <header className="relative">
      <nav className="w-full text-zinc-700 font-mono dark:text-white bg-gradient-to-r from-amber-700 to-amber-400 py-3 flex items-center justify-between dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-600 mb-4">
        <Logo />
        <button
          className="items-center justify-center text-3xl ml-3 text-zinc-700 font-mono dark:text-amber-500 w-16 h-16 rounded-full bg-amber-400 dark:bg-gray-500 hidden md:flex"
          onClick={handleClick}
        >
          <FaBars />
        </button>
        <div className="md:hidden flex justify-around">
          <div
            className="px-4 py-2 cursor-pointer text-2xl"
            onClick={() => console.log("NEED WORK")}
          >
            <BsFillMoonStarsFill />
          </div>
          <Link className="mx-4 py-2" href={"/"}>
            Home
          </Link>
          <Link className="mx-4 py-2" href={"/contact-me"}>
            Contact
          </Link>
          <Link className="mx-4 py-2" href={"/about"}>
            About
          </Link>
          <Link className="mx-4 py-2" href={"/projects"}>
            Projects
          </Link>
        </div>
      </nav>
      {isOpen && (
        <motion.div 
        initial={{scale: 0, opacity: 0, y: "-50%"}}
        animate={{scale: 1, opacity: 1}}
        className="min-w-[50vw] flex flex-col justify-center items-end fixed top-1/4 right-8 -translate-y-1/2 z-50 bg-gradient-to-r from-sky-300 to-sky-600 p-4 rounded-sm">
          <div
            className="px-4 py-2 cursor-pointer text-2xl"
            onClick={() => console.log("NEED WORK")}
          >
            <BsFillMoonStarsFill />
          </div>
          <CustomMobileLink href="/" title={"Home"} close={handleClick}/>
          <CustomMobileLink href="/contact-me" title={"Contact Me"} close={handleClick}/>
          <CustomMobileLink href="/about" title={"About"} close={handleClick}/>
          <CustomMobileLink href="/pprojects" title={"Projects"} close={handleClick}/>
        </motion.div>
      )}
    </header>
  );
};
export default Navbar;
