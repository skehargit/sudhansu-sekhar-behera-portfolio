import React, { useEffect, useRef } from "react";
import Btn from "./smallComponents/Btn";
import EducationDate from "./smallComponents/EducationDate";
import CourseAndCollegeName from "./smallComponents/CourseAndCollegeName";
import Skills from "./smallComponents/Skills";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import { PiBracketsCurly } from "react-icons/pi";
import { HiArrowTrendingDown } from "react-icons/hi2";
function About() {
  useEffect(() => {
    gsap.to(".aboutPara span", {
      scrollTrigger: {
        trigger: ".aboutPara",
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
        // markers: true,
      },
      y:0,
      opacity: 1,
      stagger: 0.01,
    });
  });
  return (
    <div className="aboutSection w-full bg-black relative flex max-[1200px]:flex-col">
      {/* <div className="absolute noise3 top-0 z-[99] h-[100vh] opacity-[0.07] pointer-events-none w-[100vw] bg-transparent"></div> */}
      <div className=" w-full text-white relative z-[2] border-t  px-5 py-10 overflow-hidden">
        <h2 className="text-2xl font-semibold py-5 flex items-center ">
          ABOUT{" "}
          <span>
            <HiArrowTrendingDown />
          </span>
        </h2>

        <div className="grid grid-cols-2 max-[1024px]:grid-cols-1  w-full">
          <div className="">
            <div className="group w-[300px] max-[500px]:w-[250px] flex relative">
              <div className="text-8xl flex translate-x-[50px]">
                <PiBracketsCurly />
              </div>
              <img
                src="https://i.pinimg.com/originals/36/ea/42/36ea420bda238ecd1818b0f734dbb6f4.webp"
                alt=""
              />
              <div className="text-8xl flex items-end  -translate-x-[50px]">
                <PiBracketsCurly />
              </div>
            </div>
          </div>
          <div className="grid ">
            <p className="aboutPara py-2 flex flex-wrap">
              {`I'm passionate about designing websites and continuously learning web development online. I can craft responsive and dynamic designs. Currently seeking opportunities to grow and contribute my skills.`
                .split("")
                .map((letter, index) => (
                  letter == " " ? (
                    <span key={`aboutSectionAboutPara${index}letter`} className="opacity-0 translate-y-[100%] ">
                      &nbsp;
                    </span>
                  ) : (
                    <span key={`aboutSectionAboutPara${index}letter`} className="opacity-0 translate-y-[100%] ">
                      {letter}
                    </span>
                  )
                ))}
            </p>
            <button
              onMouseEnter={() => {
                gsap.to(".btnChar3", {
                  y: 0,
                  stagger: 0.06,
                });
                gsap.to(".btnChar4", {
                  y: '-100%',
                  stagger: 0.06,
                });
              }}
              onMouseLeave={()=>{
                gsap.to(".btnChar3", {
                  y: '100%',
                  stagger: 0.06,
                });
                gsap.to(".btnChar4", {
                  y: 0,
                  stagger: 0.06,
                });
              }}
              className="circleBtn border relative w-20 h-20 m-5  rounded-full flex items-center justify-center p-2 "
            >
              <div className="absolute  rounded-2xl ">
                <div className="py-1.5 px-5  uppercase flex items-center  overflow-hidden">
                  {"resume".split("").map((char, index) => (
                    <div key={`aboutSectionCircleBtns${index}btnChars`} className="flex flex-col relative">
                      <span
                        className="btnChar3 translate-y-[100%]"
                      >
                        {char}
                      </span>
                      <span
                        className="btnChar4 absolute translate-y-[0]"
                      >
                        {char}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 max-[1400px]:grid-cols-1 max-[1400px]:gap-5 py-7">
          {[
            {
              date: "2024",
              fullDate: "---",
              collegeName: "Code Help, Youtube, Udemy, online",
              courseName: "MERN Stack development, Web Designing",
            },

            {
              date: "2025",
              fullDate: "2022-2025",
              collegeName:
                "Vignan Institute Of Technology And Management, Berhampur",
              courseName: "Btech in Mechanical Engineering",
            },
            {
              date: "2022",
              fullDate: "2019-2022",
              collegeName:
                "Aum Sai Institute Of Technical Education, Berhampur",
              courseName: "Diploma in Mechanical Engineering",
            },
          ].map((obj, index) => (
            <div
              key={`aboutSectionEductionBox${obj.fullDate}${index}`}
              className="w-full px-5 max-[600px]:px-0 flex items-center justify-center"
            >
              <div className="flex items-center w-full  relative">
                <EducationDate date={obj.date} fullDate={obj.fullDate} />
                <CourseAndCollegeName
                  collegeName={obj.collegeName}
                  courseName={obj.courseName}
                  textPosition="end"
                />
                <div className="w-[88%] absolute bg-zinc-900/20 h-full z-[1] right-0"></div>
              </div>
            </div>
          ))}
        </div>
        {/* <Skills /> */}
      </div>
    </div>
  );
}

export default About;
