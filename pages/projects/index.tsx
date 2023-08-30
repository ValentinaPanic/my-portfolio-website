import { NextPage } from "next";
import React from "react";

 const Projects: NextPage = () => {
  return (
    <section className="text-center ">
    <div className="rounded text-center shadow-lg p-10 mx-5  dark:bg-gray-500 min-h-[680px]">
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
  );
};
export default Projects;