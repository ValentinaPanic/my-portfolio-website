"use client";
import { NextPage } from "next";
import React from "react";
import { motion } from "framer-motion"

 const Projects: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh_-_154px)] flex items-center justify-center">
    <div className="rounded text-center shadow-lg p-10 mx-5 dark:bg-gray-500 min-h-[680px] w-full self-center">
      <div className="text-5xl py-2 text-zinc-700 dark:text-white font-semibold">My Projects</div>
      <p className="text-2xl py-2 text-zinc-700 dark:text-white font-medium">This Page is in Progress</p>
      <div className="flex items-center justify-center mt-5">
        <div className="w-[450px] h-[70px] flex justify-start items-stretch rounded-[60px] bg-amber-500 overflow-hidden shadow-lg">
          <motion.div animate={{
            width: "75%"
          }} 
          transition={{
            duration: 2
          }}
          className="bg-gradient-to-r from-sky-500 to-sky-600 "/>

        </div>
      </div>
    </div>
  </div>
  );
};
export default Projects;