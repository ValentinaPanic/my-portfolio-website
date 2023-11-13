"use client"
import { NextPage } from "next";
import React from "react";
// import profilePicture from "../../public/images/portrait-image.JPG";
// import Image from "next/image";
import Experience from "../../components/Experience";

const About: NextPage = () => {
  const colSpan =
    "col-span-4 flex flex-col items-start justify-start shadow-lg p-8 h-full text-zinc-700 text-[15px] dark:text-white border-r-[1px] border-amber-600 dark:border-slate-600 rounded-xl dark:bg-slate-800";
  const pTagStyle = "mb-2";
  
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div className="mb-5 text-amber-500 text-2xl">
        &apos;It&apos;s not what you achieve, it&apos;s what you overcome.
        That&apos;s what defines your career.&apos; — Carlton Fisk
      </div>

      <div className="grid w-full grid-cols-8 gap-5 items-center justify-center mb-10">
        <div
          className={`col-span-8 flex flex-row gap-4 items-normal border-[1px] border-amber-600 dark:border-slate-600 rounded-xl p-8 dark:text-white shadow-inner dark:bg-slate-800`}
        >
          {/* <Image
            className={`relative rounded-2xl border-2 border-solid border-amber-500 p-4 self-center shadow-xl m-r-4`}
            src={profilePicture}
            alt={"ValentinaPanic"}
            width={300}
            height={350}
          />  */}
          <div className={`col-span-2 shadow-lg py-8 px-20 text-left text-zinc-700 text-lg dark:text-white border-r-[1px] border-amber-600 dark:border-slate-600 rounded-xl dark:bg-slate-800`}>
            <p className={`${pTagStyle}`}>
              I am a dedicated front-end engineer with a deep passion for
              crafting user-friendly and visually pleasing interfaces. My
              expertise lies in JavaScript and various JavaScript frameworks,
              and I&apos;m a strong proponent of TypeScript. While I have
              beginner-level knowledge in Kotlin, I&apos;ve collaborated with
              senior engineers on projects involving this language.
            </p>
            <p className={`${pTagStyle}`}>
              Additionally, in my current role, I&apos;ve successfully completed
              the migration of a project from CodeBuild to GitHub Actions and
              Gradle, guided and mentored by senior engineers.
            </p>
            <p>
              I take great pleasure in conducting demos for the various features
              I&apos;ve contributed to, and I&apos;ve had the privilege of
              serving as the engineering lead on multiple projects.
            </p>
          </div>
        </div>
        <div className={`${colSpan}`}>
          <h3 className="text-amber-600 pb-2 text-lg font-semibold">
            Professional Journey
          </h3>{" "}
          <div>
            <p className={`${pTagStyle}`}>
              {" "}
              I began my professional journey by earning a cum laude degree in
              Hospitality Management in Serbia, which laid a strong foundation
              for my former career. For over a decade, I thrived in the
              restaurant industry, particularly in the realm of bar programs and
              mixology. My passion for crafting unique cocktails even earned me
              several awards.
            </p>
            <p className={`${pTagStyle}`}>
              {" "}
              However, when I became a mother, I yearned for a career that would
              provide more time for my family while allowing me to harness my
              creativity and continue learning. It was during this
              transformative period that I discovered software engineering and
              decided to embark on a new path. With my son just two months old,
              I enrolled in a software engineering bootcamp, dedicating myself
              to mastering this new skill. Remarkably, I completed the bootcamp
              in just 10 months and swiftly secured a position as a junior
              software engineer.
            </p>
            <p className={`${pTagStyle}`}>
              {" "}
              Over the past two years in this field, I take immense pride in my
              perseverance through the challenges and in the vast knowledge
              I&apos;ve gained since May 2020. My career transition has been a
              testament to my determination and commitment to personal growth.
            </p>
          </div>
        </div>
        <div className={`${colSpan}`}>
          <h3 className="text-amber-600 pb-2 text-lg font-semibold">
            Personal Journey
          </h3>
          <div>
            <p className={`${pTagStyle}`}>
              I was born in Bosnia and Herzegovina and raised in Serbia. At the
              age of 26, I embarked on a life-changing journey to the United
              States, armed with just a single suitcase.
            </p>
            <p className={`${pTagStyle}`}>
              {" "}
              Leaving behind my family, friends, and the comfort of my familiar
              surroundings, I ventured into the unknown in search of a place to
              call home. Adapting to a new culture while holding onto cherished
              memories of my homeland proved to be a formidable challenge, but
              it was on this path that I encountered incredible individuals who
              helped me discover my inner strength.
            </p>
          </div>
          <p className={`${pTagStyle}`}>
            After several years of exploration, fate introduced me to my
            husband, with whom I now share the joy of parenthood. Our wonderful
            son, fluent in both Serbian and English, shares our passion for
            music. Together, we enjoy in the simple pleasures of dance, play,
            and laughter.
          </p>
          <p>
            Family, friends,our two fluffy cats, resilience, and the love are
            pillars of my life, driving me to cherish every moment and celebrate
            the connections that make it all worthwhile.
          </p>
        </div>
      </div>
      <Experience />
    </main>
  );
};
export default About;
