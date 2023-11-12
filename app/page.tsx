"use client";
import SocialNetwork from "../components/SocialNetwork";
import Image from "next/image";
import workingWoman from "../public/Images/working-woman.png";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="h-[calc(100vh_-_154px)] w-full flex gap-5 px-4">
      <div className="w-[500px] shadow-mainPageShadow text-center dark:bg-slate-700 rounded-lg dark:shadow-none font-extralight justify-between items-center py-4">
        <div className="block items-center justify-center">
          <h1 className="text-5xl py-2 text-amber-500 font-semibold">
            Valentina Panic
          </h1>
          <h2 className="text-2xl py-2 text-zinc-700 dark:text-white font-medium">
            Software Engineer
          </h2>
          <p className="font-semibold text-md py-5 leading-8 text-zinc-700 dark:text-white">
            Dependable.
            <br />
            Unwavering Preseverance.
            <br />
            Strong Commitment to Self-Improvement.
          </p>

          <SocialNetwork />
        </div>
        <div className="mx-auto flex items-center justify-center">
          <Image
            src={workingWoman}
            alt={"Working woman"}
            width={350}
            height={380}
          />
        </div>
      </div>

      <Skills />
    </div>
  );
}
