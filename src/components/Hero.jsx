import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Btn from "./smallComponents/Btn";
import LinesAnimate from "./smallComponents/LinesAnimate";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const tl = useRef();
  useEffect(() => {
    gsap.to(".char", {
      y: 0,
      stagger: 0.08,
    });
    gsap.to(".char2", {
      y: 0,
      stagger: 0.07,
    });
    gsap.to(".char3", {
      y: 0,
      stagger: 0.07,
    });
    tl.current = gsap
      .timeline()
      .to(".headingHr", {
        width: "100%",
        stagger: 0.4,
      })
      .to(".text span", {
        opacity: 1,
        stagger: 0.01,
      });
  });
  useGSAP(() => {
    
  });
  return (
    <div className="h-[300vh] w-full relative bg-black">
      <div className="heroPage overflow-hidden sticky top-0  scale-1 w-full h-[90vh] bg-black z-[2]">
        <div className="absolute text-white w-full flex items-center justify-center flex-col h-full">
          <div>
            <h1 className="headingh1 scale-1 text-[10vw]  max-[600px]:text-[15vw] uppercase leading-none flex relative items-center overflow-hidden">
              {"Hello,".split("").map((char) => (
                <span key={char} className="char anton translate-y-[100%]">
                  {char}
                </span>
              ))}
            </h1>
            <hr className="headingHr w-[0%]" />
          </div>
          <div>
            <h1 className="headingh1 scale-1 text-[10vw]  max-[600px]:text-[15vw] uppercase leading-none flex relative overflow-hidden">
              {"I'm sudhansu".split("").map((char) => (
                char==' '?
                <span key={char} className="char2 anton translate-y-[100%]">
                  &nbsp;
                </span>:
                <span key={char} className="char2 anton translate-y-[100%]">
                  {char}
                </span>
              ))}
            </h1>
            <hr className="headingHr w-[0%]" />
          </div>
          <div>
            <h1 className="headingh1 scale-1 text-[10vw]  max-[600px]:text-[15vw] uppercase leading-none flex relative overflow-hidden">
              {"Learing mern".split("").map((char) => (
                char==' '?
                <span key={char} className="char3 anton translate-y-[100%]">
                  &nbsp;
                </span>:
                <span key={char} className="char3 anton translate-y-[100%]">
                  {char}
                </span>
              ))}
            </h1>
            <hr className="headingHr w-[0%]" />
          </div>
          {/* {["I'm sudhansu", "Learing mern"].map((text, index) => (
            <div key={index}>
              <h1 className="headingh1 scale-1 text-[10vw]  max-[600px]:text-[15vw] uppercase leading-none flex relative">
                {text}
              </h1>
              <hr className="headingHr w-[0%]" />
            </div>
          ))} */}
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text">
              {'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dicta"'
                .split("")
                .map((letter, index) => (
                  <span key={index} className="opacity-0">
                    {letter}
                  </span>
                ))}
            </p>
            <Btn name="resume" />
          </div>
          <div className="w-full mt-5 flex items-center justify-center gap-3">
            <hr className="w-[10%]" />
            <div className="flex items-center gap-3">
              <FaGithub />
              <FaLinkedin />
              <MdAlternateEmail />
            </div>
            <hr className="w-[10%]" />
          </div>
        </div>
      </div>
      <LinesAnimate />
    </div>
  );
}

export default Hero;
