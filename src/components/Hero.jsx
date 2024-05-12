import { useGSAP } from "@gsap/react";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LinesAnimate from "./smallComponents/LinesAnimate";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const tl = useRef();
  const { contextSafe }=useGSAP();
  useEffect(()=>loading);
  const loading=contextSafe(() => {
    gsap.to('.heroSection',{
      scrollTrigger:{
        trigger:'.featuredSection',
        start:'top bottom',
        end:'bottom top',
        scrub:true,
        // markers:true,
      },
      opacity:0,
    })
    tl.current = gsap
      .timeline()
      .to(".heroSectionLoadingH2One", {
        y: 0,
        stagger: 0.03,
      })
      .to(".heroSectionLoadingH2Two", {
        y: 0,
        stagger: 0.03,
      })
      .to(".heroSectionLoadingPolygon", {
        scale: 10,
        duration: 0.5,
      })
      .to(".heroSectionLoading", {
        y: "-250%",
        duration: 1,
      })
      .to(
        ".char2",
        {
          y: 0,
          stagger: 0.05,
        },
        "start"
      )
      .to(
        ".heroSectionProfileImg",
        {
          y: 0,
        },
        "start"
      )
      .to(
        ".word",
        {
          y: 0,
        },
        "start"
      )
      .to(
        ".aboutParaBtns",
        {
          y: 0,
        },
        "start"
      );
  });
  return (
    <div className="heroSection min-h-[100vh] h-fit w-full sticky top-0 bg-[#e6e6e1] overflow-hidden ">
      <div className="heroSectionLoading z-[5] absolute h-[100vh] w-full bg-[#e6e6e1]">
        <div className="heroSectionLoadingPolygon  h-[100vh] w-full bg-[#3f3c38] flex items-center justify-center flex-col">
          <h2 className="heroSectionLoadingHeadings scale-1 text-[100%] text-white uppercase leading-none flex relative overflow-hidden hover:cursor-cell">
            {"Welcome to".split("").map((char, index) =>
              char == " " ? (
                <span
                  key={`heroSectionLoadingH2${index}chars`}
                  className="heroSectionLoadingH2One anton translate-y-[100%]"
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  key={`heroSectionLoadingH2${index}chars`}
                  className="heroSectionLoadingH2One anton translate-y-[100%]"
                >
                  {char}
                </span>
              )
            )}
          </h2>
          <h2 className="heroSectionLoadingHeadings scale-1 text-[100%] text-white uppercase leading-none flex relative overflow-hidden hover:cursor-cell">
            {"my Portfolio".split("").map((char, index) =>
              char == " " ? (
                <span
                  key={`heroSectionLoadingH2${index}chars`}
                  className="heroSectionLoadingH2Two anton translate-y-[100%]"
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  key={`heroSectionLoadingH2${index}chars`}
                  className="heroSectionLoadingH2Two anton translate-y-[100%]"
                >
                  {char}
                </span>
              )
            )}
          </h2>
        </div>
      </div>
      <div className="relative z-[2] heroContentent h-[100vh]  w-full bg-[#e6e6e1]">
        <div className="w-full h-fit box-border px-14 bg-[#e6e6e1] ">
          <div className="border-b border-[#3f3c38] py-3 flex items-center justify-between">
            <div className="logo flex items-center gap-2">
              <span className="text-[#3f3c38] font-semibold text-4xl tracking-wider">
                SSB.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 max-[600px]:h-full">
          <h1
            onMouseEnter={() => {
              gsap.to(".char2", {
                y: 100,
                stagger: 0.07,
              });
            }}
            onMouseLeave={() => {
              gsap.to(".char2", {
                y: 0,
                stagger: 0.07,
              });
            }}
            className="responsiveFontSize uppercase w-fit leading-none flex overflow-hidden  justify-center text-[#3f3c38]"
          >
            {"I'm sudhansu".split("").map((char, index) =>
              char == " " ? (
                <span
                  key={`headingh1${index}char2`}
                  className="char2 anton translate-y-[100%] "
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  key={`headingh1${index}char2`}
                  className="char2 anton translate-y-[100%]"
                >
                  {char}
                </span>
              )
            )}
          </h1>
          <div className="w-full h-fit flex max-[900px]:flex-col max-[900px]:items-center gap-5 justify-center">
            <div className="overflow-hidden">
              <img
                className="heroSectionProfileImg w-[250px] rounded-2xl translate-y-[100%] "
                src="https://i.pinimg.com/originals/36/ea/42/36ea420bda238ecd1818b0f734dbb6f4.webp"
                alt=""
              />
            </div>
            <div className="relative px-[5vw] flex flex-col justify-between">
              <h6 className="aboutPara  max-w-[600px] font-semibold text-[#6a635c] text-right flex flex-wrap">
                {`I'm passionate about designing websites and continuously learning web development online. Currently seeking opportunities to grow and contribute my skills.`
                  .split(" ")
                  .map((word, index) => (
                    <span
                      key={`heroSectionPara${index}words`}
                      className="words overflow-hidden "
                    >
                      <div className="word translate-y-[100%]">
                        <span className="">{word}</span>
                        <span>&nbsp;</span>
                      </div>
                    </span>
                  ))}
              </h6>
              <div className=" overflow-hidden  w-full">
                <div className="aboutParaBtns translate-y-[100%] flex justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/external-justicon-flat-justicon/64/external-india-flag-countrys-flags-justicon-flat-justicon.png"
                        alt="external-india-flag-countrys-flags-justicon-flat-justicon"
                      />
                    </span>
                    <span className="font-semibold text-[#6a635c]">Odisha</span>
                  </div>
                  <button
                  onMouseEnter={(event) => {
                    gsap.to(".heroSectionBtnChar1", {
                      y: 0,
                      stagger: 0.06,
                    });
                    gsap.to(".heroSectionBtnChar2", {
                      y: '-100%',
                      stagger: 0.06,
                    });
                  }}
                  onMouseLeave={()=>{
                    gsap.to(".heroSectionBtnChar1", {
                      y: '100%',
                      stagger: 0.06,
                    });
                    gsap.to(".heroSectionBtnChar2", {
                      y: 0,
                      stagger: 0.06,
                    });
                  }} className="h-8 px-5  uppercase flex items-center  overflow-hidden border border-zinc-900 rounded-full font-semibold text-[#3f3c38]">
                  {"resume".split("").map((char, index) => (
                          <div
                            key={`heroSectionBtns${index}btnChars`}
                            className="flex flex-col relative"
                          >
                            <span className="heroSectionBtnChar1 translate-y-[100%]">
                              {char}
                            </span>
                            <span className="heroSectionBtnChar2 absolute translate-y-[0]">
                              {char}
                            </span>
                          </div>
                        ))}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;