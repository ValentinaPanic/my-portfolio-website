import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CircleIcon from "../CircleIcon";

const List = ({
  position = "",
  company = "",
  companyLink = "",
  time = "",
  roleDescription = "",
}) => {
  const ref = useRef(null);
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between">
      <CircleIcon reference={ref} />
      <motion.div initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className="font-bold text-2xl">
          {position}{" "}
          <a href={companyLink} target="_blank" className="text-sky-600" rel="noreferrer">
            @{company}
          </a>
        </h3>
        <span className="font-medium">{time}</span>
      </motion.div>
      <p className="font-medium w-full">{roleDescription}</p>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  return (
    <div className="my-[50px] dark:text-light">
      <div className="font-bold w-full text-center text-7xl text-amber-600 mb-20">
        Experience / Education
      </div>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full bg-amber-600 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <List
            position="Software Engineer"
            company="StackHawk"
            companyLink="https://www.stackhawk.com/"
            time={"04/2021 - PRESENT"}
            roleDescription="I have worked on multiple UI projects at StackHawk and successfully led several projects that I planned out with the team. Not only do I help set sprint goals, but I also lead sprints with other team members, give roadmap updates, and demo at company share-outs. I am dedicated to writing efficient code that is tested. I release features into production frequently using our agile process."
          />
          <List
            position="Software Engineer"
            company="StackHawk"
            companyLink="www.stackhawk.com"
            time={"04/2021 - PRESENT"}
            roleDescription=" have worked on multiple UI projects at StackHawk and successfully led several projects that I planned out with the team. Not only do I help set sprint goals, but I also lead sprints with other team members, give roadmap updates, and demo at company share-outs. I am dedicated to writing efficient code that is tested. I release features into production frequently using our agile process."
          />
          <List
            position="Software Engineer"
            company="StackHawk"
            companyLink="www.stackhawk.com"
            time={"04/2021 - PRESENT"}
            roleDescription=" have worked on multiple UI projects at StackHawk and successfully led several projects that I planned out with the team. Not only do I help set sprint goals, but I also lead sprints with other team members, give roadmap updates, and demo at company share-outs. I am dedicated to writing efficient code that is tested. I release features into production frequently using our agile process."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
