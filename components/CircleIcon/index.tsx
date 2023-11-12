import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
//@ts-ignore
const CircleIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center center", "end end"],
  });
  return (
    <figure className="absolute left-0 stroke-amber-600">
      <svg className="-rotate-90" width={"75"} height={"75"} viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-sky-600 stroke-1 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
        />
        <circle cx="75" cy="50" r="10" className=" animate-pulse stroke-1 fill-sky-600 " />
      </svg>
    </figure>
  );
};

export default CircleIcon;
