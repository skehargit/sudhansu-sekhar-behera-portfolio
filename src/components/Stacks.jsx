import React from "react";
import { DiHtml5 } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiJsonwebtokens } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
const Stacks = ({ props }) => {
  console.log(props);
  return (
    <div className="flex flex-wrap gap-2 pt-5">
      {props.map((item, index) => {
        if (item == "html") {
          return (
            <div key={index}>
              <DiHtml5 />
            </div>
          );
        } else if (item == "css") {
          return (
            <div key={index}>
              <DiCss3Full />
            </div>
          );
        } else if (item == "javascript") {
          return (
            <div key={index}>
              <RiJavascriptFill />
            </div>
          );
        } else if (item == "jwt") {
          return (
            <div key={index}>
              <SiJsonwebtokens />
            </div>
          );
        } else if (item == "react") {
          return (
            <div key={index}>
              <FaReact />
            </div>
          );
        } else if (item == "node") {
          return (
            <div key={index}>
              <FaNode />
            </div>
          );
        } else if (item == "mongodb") {
          return (
            <div key={index}>
              <SiMongodb />
            </div>
          );
        } else if (item == "express") {
          return (
            <div key={index}>
              <SiExpress />
            </div>
          );
        } else if (item == "tailwind") {
          return (
            <div key={index}>
              <SiTailwindcss />
            </div>
          );
        }
        return (
          <div
            key={index}
            className="text-sm flex items-center justify-center capitalize font-semibold"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Stacks;
