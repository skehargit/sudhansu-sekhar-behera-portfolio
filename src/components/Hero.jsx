import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Btn from "./smallComponents/Btn";
import LinesAnimate from "./smallComponents/LinesAnimate";
gsap.registerPlugin(ScrollTrigger);
import { FaArrowDown } from "react-icons/fa";
function Hero() {
  const tl = useRef();
  const [clientX, setClientX] = useState();
  const [clientY, setClientY] = useState();

  function animation() {
    // gsap.to(".char", {

    //   y: 0,
    //   stagger: 0.08,
    // });
    gsap.to(".char2", {
      y: 0,
      stagger: 0.07,
    });
    gsap.to(".char3", {
      y: 0,
      stagger: 0.07,
    });
  }

  useEffect(() => {
    gsap.to(".headingh1", {
      scrollTrigger: {
        trigger: ".stars",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 3,
      opacity: 0,
    });

    animation();
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
  return (
    <div className="h-[200vh] w-full relative bg-black">
      <div className="heroPage overflow-hidden sticky top-0  scale-1 w-full h-[100vh]  z-[5]">
        <div className="absolute text-white w-full flex items-center justify-center flex-col h-full">
          <div>
            <h1
              onMouseEnter={() => {
                gsap.to(".char2", {
                  y: 100,
                  stagger: 0.07,
                });
              }}
              onMouseLeave={() => animation()}
              className="headingh1 scale-1 responsiveFontSize    uppercase leading-none flex relative overflow-hidden hover:cursor-cell"
            >
              {"I'm sudhansu".split("").map((char,index) =>
                char == " " ? (
                  <span key={`headingh1${index}char2`} className="char2 anton translate-y-[100%] ">
                    &nbsp;
                  </span>
                ) : (
                  <span key={`headingh1${index}char2`} className="char2 anton translate-y-[100%]">
                    {char}
                  </span>
                )
              )}
            </h1>
            <hr className="headingHr w-[0%]" />
          </div>
          <div>
            <h1
              onMouseEnter={() => {
                gsap.to(".char3", {
                  y: 100,
                  stagger: 0.07,
                });
              }}
              onMouseLeave={() => animation()}
              className="headingh1 scale-1 responsiveFontSize uppercase leading-none flex relative overflow-hidden hover:cursor-cell"
            >
              {"Learing mern".split("").map((char,index) =>
                char == " " ? (
                  <span key={`headingh1${index}char3`} className="char3 anton translate-y-[100%]">
                    &nbsp;
                  </span>
                ) : (
                  <span key={`headingh1${index}char3`} className="char3 anton translate-y-[100%]">
                    {char}
                  </span>
                )
              )}
            </h1>
            <hr className="headingHr w-[0%]" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-center">
              <p className="text heroPara">
                {'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dicta"'
                  .split("")
                  .map((letter, index) => (
                    <span key={`heroPara${index}heroParaSingleLetter`} className="heroParaSingleLetter opacity-0">
                      {letter}
                    </span>
                  ))}
              </p>
            </div>
            <button
              onMouseEnter={() => {
                gsap.to(".btnChar1", {
                  y: 0,
                  stagger: 0.06,
                });
                gsap.to(".btnChar2", {
                  y: '-100%',
                  stagger: 0.06,
                });
              }}
              onMouseLeave={()=>{
                gsap.to(".btnChar1", {
                  y: '100%',
                  stagger: 0.06,
                });
                gsap.to(".btnChar2", {
                  y: 0,
                  stagger: 0.06,
                });
              }}
              className="circleBtn border relative w-20 h-20 m-5  rounded-full flex items-center justify-center p-2 "
            >
              <div className="absolute   rounded-2xl ">
                <div className="py-1 px-5  uppercase flex items-center  overflow-hidden">
                  {"resume".split("").map((char, index) => (
                    <div key={`heroSection${index}btnChars`} className="flex flex-col relative">
                      <span
                        className="btnChar1 translate-y-[100%]"
                      >
                        {char}
                      </span>
                      <span
                        className="btnChar2 absolute translate-y-[0]"
                      >
                        {char}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </button>
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
