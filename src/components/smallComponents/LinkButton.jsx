import React from "react";
import { IoLinkOutline } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
const LinkButton = ({ name }) => {
  return (
    <div className="relative ">
      <span className="absolute z-[3] bg-zinc-900   hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center capitalize">
        {name}
      </span>
      <span className="relative z-[4]  hover:opacity-0 bg-black  hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center ">
        {name == "git" ? <IoLinkOutline /> : <RiExternalLinkLine />}
      </span>
    </div>
  );
};

export default LinkButton;
