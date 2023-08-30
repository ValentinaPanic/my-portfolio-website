import { NextPage } from "next";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import workingWoman from "../../public/Images/working-woman.png";
import Skills from "../../components/Skills";

 const Home = () => {
  return (
    <div className="lg:flex gap-5">
    <section>
      <div className="shadow-[0px_10px_70px_5px_rgba(180,83,9,0.3)]  text-center p-10 mx-5 mb-5 dark:bg-gray-500 rounded">
        <h1 className="text-5xl py-2 text-amber-500">Valentina Panic</h1>
        <h2 className="text-2xl py-2 text-zinc-700">Software Engineer</h2>
        <p className="text-md py-5 leading-8">
          Me introducing here in one sentence
        </p>
        <div>
          Contact me section
          <div className="text-5xl flex justify-center gap-2 py-2 text-zinc-700">
            <a
              href="https://www.linkedin.com/in/valentina-panic-405254162/"
              className="cursor-pointer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/ValentinaPanic"
              className="cursor-pointer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="relative mx-auto bg-radient-to-b  from-red-500 rounded-full w-80 h-85">
          <Image src={workingWoman} alt={""} />
        </div>
      </div>
    </section>
    <Skills/>
  </div>
  );
};
export default Home;