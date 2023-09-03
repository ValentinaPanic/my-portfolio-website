import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "SKILLS",
    x: "0",
    y: "0",
  },
  {
    name: "Ruby on Rails",
    x: "-20vw",
    y: "19vw",
  },
  {
    name: "ReactJS",
    x: "-15vw",
    y: "0",
  },
  {
    name: "Javascript",
    x: "10vw",
    y: "10vw",
  },
  {
    name: "Typescript",
    x: "-29vw",
    y: "4vw",
  },
  {
    name: "Rest API",
    x: "16vw",
    y: "1vw",
  },
  {
    name: "CSS",
    x: "-5vw",
    y: "-10vw",
  },
  {
    name: "Tailwind CSS",
    x: "-22vw",
    y: "-12vw",
  },
  {
    name: "Styled Components",
    x: "-10vw",
    y: "12vw",
  },
  {
    name: "Semantic React UI",
    x: "27vw",
    y: "-5vw",
  },
  {
    name: "Astro",
    x: "12vw",
    y: "-10vw",
  },
  {
    name: "Contentful",
    x: "18vw",
    y: "18vw",
  },
  {
    name: "HTML",
    x: "25vw",
    y: "4vw",
  },
  {
    name: "Jest/Enzyme",
    x: "15vw",
    y: "-17vw",
  },
  {
    name: "Storybook",
    x: "0vw",
    y: "-20vw",
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
      className="flex items-center justify-center rounded-full font-semibold px-6 py-3 bg-amber-500 dark:bg-amber-500 absolute  text-zinc-700"
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
    <div className="grow">
      <div className="w-full h-screen flex items-center justify-center bg-circuralLight dark:bg-circuralDark shadow-xl rounded-[8px] max-h-screen mb-5 mr-å5">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
