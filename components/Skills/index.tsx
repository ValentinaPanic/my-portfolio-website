import React from "react";
import { motion } from "framer-motion";

const skills = [
  // {
  //   name: "SKILLS",
  //   x: "0",
  //   y: "0",
  // },
  {
    name: "Ruby on Rails",
    x: "-19vw",
    y: "26vw",
  },
  {
    name: "ReactJS",
    x: "0vw",
    y: "-10vw",
  },
  {
    name: "Javascript",
    x: "0vw",
    y: "10vw",
  },
  {
    name: "Typescript",
    x: "20vw",
    y: "-30vw",
  },
  {
    name: "Rest API",
    x: "16vw",
    y: "1vw",
  },
  {
    name: "CSS",
    x: "-15vw",
    y: "0",
  },
  {
    name: "Tailwind CSS",
    x: "-28vw",
    y: "8vw",
  },
  {
    name: "Styled Components",
    x: "29vw",
    y: "7vw",
  },
  {
    name: "Semantic React UI",
    x: "-17vw",
    y: "-30vw",
  },
  {
    name: "Astro",
    x: "19vw",
    y: "-10vw",
  },
  {
    name: "Contentful",
    x: "19vw",
    y: "27vw",
  },
  {
    name: "HTML",
    x: "0vw",
    y: "24vw",
  },
  {
    name: "Jest/Enzyme",
    x: "-20vw",
    y: "-8vw",
  },
  {
    name: "Storybook",
    x: "0vw",
    y: "-25vw",
  },
  {
    name: "Jira",
    x: "-25vw",
    y: "-19vw",
  },
];

const Skill = ({ name = "", x="", y="" }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold px-6 py-3 bg-amber-500 dark:bg-amber-500 absolute text-zinc-700 md:px-3 md:py-1 lg:text-sm sm:text-sm sm:font-bold sm:bg-transparent sm:text-amber-700"
      initial={{ x: "0", y: "0" }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 2 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="w-full">
      <div className="lg:min-h-[calc(100vh_-290px)] lg:mt-4 h-full flex items-center justify-center bg-circuralLight dark:bg-circuralDark shadow-xl rounded-lg self-stretch md:bg-circuralLightMd sm:bg-circuralLightSm ">
        <div className="font-bold text-5xl text-sky-600 md:text-3xl sm:text-[19px] absolute z-50">Skills</div>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
