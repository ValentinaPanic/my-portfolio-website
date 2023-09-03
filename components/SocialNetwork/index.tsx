import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const SocialNetwork = () => {
  return (
    <div className="w-full h-full text-5xl flex justify-center gap-2 py-2 text-zinc-700 dark:text-white">
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
  )
};

export default SocialNetwork
