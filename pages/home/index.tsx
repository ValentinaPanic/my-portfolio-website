import { NextPage } from "next";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import workingWoman from "../../public/Images/working-woman.png";

 const Home = () => {
  return (
    <div className="lg:flex gap-5">
    <section>
      <div className="shadow-lg text-center p-10 m-10 dark:bg-gray-500">
        <h1 className="text-5xl py-2 text-amber-500">Valentina Panic</h1>
        <h2 className="text-2xl py-2">Software Engineer</h2>
        <p className="text-md py5 leading-8">
          Me introducing here in one sentence
        </p>
        <div>
          Contact me section
          <div className="text-5xl flex justify-center gap-2 py-2 text-gray-800">
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
        <div className="relative mx-auto bg-radient-to-b  from-red-500 rounded-full w-80 h-80">
          <Image src={workingWoman} alt={""} />
        </div>
      </div>
    </section>
    <section className="text-center">
      <div className="text-center shadow-lg p-10 m-10 dark:bg-gray-500">
        <h3>My Skills</h3>
        <p>small paragraphr on my background</p>
        <div>
          What tools I have used:
          <ul>
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>Javascript</li>
            <li>REST API</li>
            <li>Typescript</li>
            <li>HTML</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="text-center">
      <div className="text-center shadow-lg p-10 m-10 dark:bg-gray-500">
        <h3>My Projects</h3>
        <p>small paragraphr on my background</p>
        <div>
          What tools I have used:
          <ul>
            <li>ResuplyZ</li>
            <li>Coctail Bible</li>
            <li>BabyEats</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  );
};
export default Home;