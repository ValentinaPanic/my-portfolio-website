import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between border-t-[0.2px] border-amber-500 dark:border-slate-600 p-3 max-h-[36px] absolute bottom-0 top-auto left-0">
      <div className="flex items-center justify-center text-zinc-700 font-mono dark:text-amber-500">
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </div>
      <span className="flex items-center justify-center text-zinc-700 font-mono dark:text-amber-500">Build With <span className="text-2xl px-1">&#9825;</span>By Valentina Panic</span>
    </footer>
  );
};

export default Footer;
