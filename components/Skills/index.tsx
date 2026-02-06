import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Ruby on Rails",
    x: "-19vw",
    y: "16vw",
  },
  {
    name: "ReactJS",
    x: "0vw",
    y: "-8vw",
  },
  {
    name: "Javascript",
    x: "0vw",
    y: "8vw",
  },
  {
    name: "Typescript",
    x: "20vw",
    y: "-17vw",
  },
  {
    name: "Rest API",
    x: "14vw",
    y: "0vw",
  },
  {
    name: "CSS",
    x: "-10vw",
    y: "0",
  },
  {
    name: "Astro",
    x: "16vw",
    y: "-9vw",
  },
  {
    name: "Tailwind CSS",
    x: "-28vw",
    y: "8vw",
  },
  {
    name: "Storybook",
    x: "16vw",
    y: "9vw",
  },
  {
    name: "Styled Components",
    x: "0vw",
    y: "-19vw",
  },
  {
    name: "Semantic React UI",
    x: "0vw",
    y: "18vw",
  },
 
  {
    name: "Contentful",
    x: "19vw",
    y: "17vw",
  },
  {
    name: "HTML",
    x: "-17vw",
    y: "-14vw",
  },
  {
    name: "Jest/Enzyme",
    x: "-19vw",
    y: "-5vw",
  },
  {
    name: "Jira",
    x: "-25vw",
    y: "-19vw",
  },
];
const mobileViewVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skill = ({ name = "", x = "", y = "" }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full h-30 w-30 font-semibold px-6 py-3 bg-amber-500 dark:bg-amber-500 absolute text-zinc-700 md:px-3 md:py-1 lg:text-sm"
      initial={{ x: "0", y: "0" }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 2 }}
    >
      {name}
    </motion.div>
  );
};

const MobileSkills = ({ name = "", index = 0 }) => (
  <motion.li
    variants={mobileViewVariant}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={index}
    className="text-md text-gray-900 shadow-xl font-medium w-fit bg-gradient-to-r from-sky-300 to-sky-500 px-3 py-1 rounded"
  >
    {name}
  </motion.li>
);

const Skills = () => {
  return (
    <div className="w-full h-[cacl(100vh_-_430px)]">
      <div className="sm:hidden visible lg:mt-4 h-full flex items-center justify-center bg-circuralLight dark:bg-circuralDark shadow-xl rounded-lg md:bg-circuralLightMd">
        <div className="font-bold text-5xl text-sky-600 md:text-3xl absolute z-50">
          Skills
        </div>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
      <div className="sm:visible hidden shadow-mainPageShadow rounded-lg p-4 sm:flex flex-col justify-center items-center h-[cacl(100vh_-_430px)]">
        <div className="font-bold text-sky-600 text-3xl self-center mb-8">
          Skills
        </div>
        <ul className="flex flex-wrap gap-3 mb-8 h-full overflow-scroll">
          {skills.map((skill, index) => (
            <MobileSkills
              key={index}
              name={skill.name}
              index={index}
            ></MobileSkills>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Skills;
