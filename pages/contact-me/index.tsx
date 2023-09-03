"use client";


import { NextPage } from "next";
import React from "react";
import { FaLongArrowAltRight, FaPaperPlane } from "react-icons/fa";
import SocialNetwork from "../../components/SocialNetwork";

const Resume: NextPage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data.get("message"));
  }
  return (
    <div className="flex gap-5 mt-10 h-full">
      <div className="p-4 text-center text-xl">
        <h3 className="text-amber-600 text-6xl">Let&apos;s Get in Touch</h3>
        <p className="text-gray-700 dark:text-white/80 mt-10 p-2">
          Contact me directly at{" "}
          <a className="underline underline-offset-4 font-medium text-amber-600 hover:text-amber-500" href="mailto:valentina.panic87@gmail.com">
            valentina.panic87@gmail.com
          </a><br/>
          <span className="flex items-center justify-center mt-3">or through this form. <FaLongArrowAltRight className="ml-3  text-amber-600" size={"50"}/></span>
        </p>
        <SocialNetwork/>
      </div>
      <div className="grow">
        <form className="flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
            className="h-14 mb-3 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderName"
            type="text"
            required
            maxLength={100}
            placeholder="Your Name"
          />
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-[400px] my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button type="submit" className="bg-amber-600 p-3 w-[190px] rounded-full self-center flex items-center justify-center group hover:scale-110 hover:bg-amber-500" > Send Message <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ml-2" />{" "} </button>
        </form>
      </div>
    </div>
  );
};
export default Resume;
