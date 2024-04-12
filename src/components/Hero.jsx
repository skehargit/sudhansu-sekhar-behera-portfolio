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
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const tl = useRef();
  useEffect(() => {
    gsap.to(".headingh1", {
      scrollTrigger: {
        trigger: ".stars",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      scale: 3,
      opacity: 0,
    });
    for (let i = 1; i <= 20; i++) {
      gsap.to(`.circle${[i]}`, {
        scrollTrigger: {
          trigger: `.circle${[i]}`,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        height: "20px",
        opacity: 0,
      });
    }
  });
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to(".headingHr", {
        width: "100%",
        stagger: 0.4,
      })
      .to(".profile", {
        scale: 1,
        stagger: 0.2,
      })
      .to(".text span", {
        opacity: 1,
        stagger: 0.01,
      });
  });
  return (
    <div className="h-[300vh] w-full relative bg-black">
      <div className="heroPage overflow-hidden sticky top-0  scale-1 w-full h-[90vh] bg-black z-[2]">
        <div className="absolute text-white w-full flex items-center justify-center flex-col h-full">
          <div>
            <h1 className="headingh1 scale-1 text-[10vw]  max-[600px]:text-[15vw] uppercase leading-none flex relative items-center">
              Hello,
              <div className="profile scale-0 border w-[50px] h-[50px]  rounded-full backdrop-blur border-zinc-100/10 flex items-center justify-center">
                <div className="border w-[50px] h-[50px]  absolute rounded-full backdrop-blur border-zinc-100/50 animate-ping"></div>
                <div className="w-[40px] h-[40px]   rounded-full overflow-hidden">
                  <img
                    src="https://i.pinimg.com/originals/36/ea/42/36ea420bda238ecd1818b0f734dbb6f4.webp"
                    alt="profile img"
                    className="w-[50px] -translate-y-2 "
                  />
                </div>
              </div>
            </h1>
            <hr className="headingHr w-[0%]" />
          </div>
          {["I'm sudhansu", "Learing mern"].map((text, index) => (
            <div key={index}>
              <h1 className="headingh1 scale-1 text-[10vw]  max-[600px]:text-[15vw] uppercase leading-none flex relative">
                {text}
              </h1>
              <hr className="headingHr w-[0%]" />
            </div>
          ))}
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
      <div className="relative h-[100vh] w-full bg-transeparent z-[3] overflow-hidden">
        <div className="absolute z-[3] text-white w-full h-full flex justify-between">
          <div
            className={`circle1 opacity-1 w-[10px] h-[150px] absolute right-[10%] top-[20%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle2 w-[10px] h-[200px] absolute right-[40%] top-[10%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle3 w-[10px] h-[250px] absolute right-[60%] top-[70%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle4 w-[10px] h-[150px] absolute right-[20%] top-[40%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle5 w-[10px] h-[170px] absolute right-[80%] top-[30%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle6 w-[10px] h-[140px] absolute right-[70%] top-[50%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle7 w-[10px] h-[100px] absolute right-[90%] top-[80%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle8 w-[10px] h-[180px] absolute right-[30%] top-[70%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle9 w-[10px] h-[150px] absolute right-[5%] top-[60%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle10 w-[10px] h-[190px] absolute right-[90%] top-[10%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
        </div>
      </div>
      <div className="stars relative h-[100vh] w-full bg-transeparent z-[3] overflow-hidden">
        <div className="absolute z-[3] text-white w-full h-full flex justify-between">
          <div
            className={`circle11 opacity-1 w-[10px] h-[150px] absolute right-[10%] top-[20%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle12 w-[10px] h-[200px] absolute right-[40%] top-[10%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle13 w-[10px] h-[250px] absolute right-[60%] top-[70%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle14 w-[10px] h-[150px] absolute right-[20%] top-[40%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle15 w-[10px] h-[170px] absolute right-[80%] top-[30%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle16 w-[10px] h-[140px] absolute right-[70%] top-[50%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle17 w-[10px] h-[100px] absolute right-[90%] top-[80%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle18 w-[10px] h-[180px] absolute right-[30%] top-[70%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle19 w-[10px] h-[150px] absolute right-[5%] top-[60%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
          <div
            className={`circle20 w-[10px] h-[190px] absolute right-[90%] top-[10%] rounded-full bg-white flex justify-center`}
          >
            <MdStars className="text-zinc-900 rounded-full absolute bottom-[-2px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
