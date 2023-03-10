import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import workingWoman from "../public/Images/working-woman.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  console.log(router);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Valentina Panic Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section className="justify-center">
          <nav className="bg-gradient-to-r  from-amber-700 to-amber-400 py-10 mb-10 flex justify-between dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-600">
            <h1 className="text-xl ml-3 text-zinc-700 font-mono dark:text-white">
              Welcome
            </h1>
            <div
              className="flex justify-around"
              onClick={() => setDarkMode(!darkMode)}
            >
              <div className="px-4 py-2 cursor-pointer text-2xl">
                <BsFillMoonStarsFill />
              </div>
              <Link className="mx-4 py-2" href={"/resume"}>Resume</Link>
              <Link className="mx-4 py-2" href={"/about"}>About</Link>
              <Link className="mx-4 py-2" href={"/projects"}>Projects</Link>
            </div>
          </nav>
        </section>

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
      </main>
    </div>
  );
}
