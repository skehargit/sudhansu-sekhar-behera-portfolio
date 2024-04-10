import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
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
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to("h1", {
        scale: 1,
        stagger: 0.2,
      })
      .to(".headingHr", {
        width: "100%",
        stagger: 0.4,
      })
      .to('.profile',{
        scale:1,
        stagger: 0.2,
      })
      .to(".text span", {
        opacity: 1,
        stagger: 0.01,
      });
  });
  return (
    <div className="heroPage scale-1 w-full h-[90vh] bg-black relative">
      {/* <div className='absolute z-[2] text-white w-full h-full'>
          <BsStars className='scale-[5] left-[30px] absolute' />
          <MdStars />
          </div> */}
      <div className="absolute  text-white w-full flex items-center justify-center flex-col h-full">
        <div>
          <h1 className="text-[10vw] scale-0 max-[600px]:text-[15vw] uppercase leading-none flex relative items-center">
            Hello,
            <div className="profile scale-0 border w-[50px] h-[50px]  rounded-full backdrop-blur border-zinc-100/10 flex items-center justify-center">
              <div className="border w-[50px] h-[50px]  absolute rounded-full backdrop-blur border-zinc-100/50 animate-ping">

              </div>
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
        {["I'm sudhansu","Learing mern"].map((text,index)=><div key={index}>
          <h1 className="text-[10vw] scale-0 max-[600px]:text-[15vw] uppercase leading-none flex relative">
            {text}
          </h1>
          <hr className="headingHr w-[0%]" />
        </div>)}
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text">
            {'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dicta"'
              .split("")
              .map((letter) => (
                <span className="opacity-0">{letter}</span>
              ))}
          </p>
          <Btn name="resume" />

          
        </div>
        <div className="w-full mt-5 flex items-center justify-center gap-3"><hr className="w-[10%]" /><div className="flex items-center gap-3"><FaGithub /><FaLinkedin /><MdAlternateEmail /></div><hr className="w-[10%]" /></div>
      </div>
    </div>
  );
}

export default Hero;
