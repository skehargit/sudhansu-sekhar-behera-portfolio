import React, { useContext, useEffect, useState } from "react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
import { motion, transform } from "framer-motion";
import { IoLinkOutline } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import { StoreContext } from "../../context/StoreContext";

gsap.registerPlugin(ScrollTrigger);
function Featured() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const {featuredProjects,projects}=useContext(StoreContext);
  // console.log(window.innerWidth);

  // const {contextSafe}=useGSAP();
  // (()=>textanimations)
  useEffect(() => {
    gsap.to(".myProjectsh1Span", {
      scrollTrigger: {
        trigger: ".myProjectsh1",
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
        // scrub: true,
        // markers: true,
      },
      y: 0,
      duration: 0.3,
      // stagger: 0.1,
    });
    gsap.to(".featuredSectionParaSpan", {
      scrollTrigger: {
        trigger: ".projectsPara",
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
        // scrub: true,
        // markers: true,
      },
      y: 0,
      duration: 0.3,
      stagger: 0.01,
    });
    for (let i = 0; i <= 2; i++) {
      gsap.to(`.projectChar${i}`, {
        scrollTrigger: {
          trigger: `.projectHeading${i}`,
          scroller: "body",
          start: "top 80%",
          end: "bottom 80%",
          // scrub: true,
          // markers:true
        },
        y: 0,
        duration: 0.3,
      });
      gsap.to(`.projectParaWord${i}`, {
        scrollTrigger: {
          trigger: `.projectPara${i}`,
          scroller: "body",
          start: "top 80%",
          end: "bottom 80%",
          // scrub: true,
          // markers: true,
        },
        y: 0,
        duration: 0.3,
        stagger: 0.01,
      });
    }
  });

  function elasticMouseLeaveHanler() {
    gsap.to("#path", {
      attr: { d: `M 10 80 Q 250 80 490 80` },
      duration: 3,
      ease: "elastic.out(1,0.1)",
    });
  }
  function elasticMouseMoveHanler(x, y) {
    gsap.to("#path", {
      attr: { d: `M 10 80 Q ${x} ${y} 490 80` },
      duration: 0.3,
      ease: "power3.out",
    });
  }
  function cursorMoveHelndler(index) {
    gsap.to(`.cursorForindex${index}project`, {
      opacity: 1,
      duration: 0.3,
      x: clientX - 32,
      y: clientY - 32,
    });
  }
  function cursorLeaveHelndler(index) {
    gsap.to(`.cursorForindex${index}project`, {
      opacity: 0,
      duration: 0.3,
    });
  }
  
  return (
    <div className="featuredSection min-h-screen h-fit bg-black w-full relative rounded-t-3xl overflow-x-hidden">
      <div className=" flex flex-col items-center">
        <h3 className="myProjectsh1 text-[#d0d0c6]  text-8xl max-[600px]:text-5xl px-[5vw] pt-[10vh] uppercase anton flex overflow-hidden w-full">
          {"Projects /".split(" ").map((char,index) => {
            return (
              <span key={index}  className="myProjectsh1Span translate-y-[100%]">
                {char}
              </span>
            );
          })}
        </h3>
        <div className="w-full justify-end flex p-5">
          <div className=" flex w-[600px]">
            <p className="projectsPara text-[#d0d0c6]  flex flex-wrap">
              {`I have created projects using Html, css, JavaScript,   TailwindCss, react, express, mongoDB, nodejs, gsap,`
                .split(" ")
                .map((word,index) => {
                  return (
                    <span key={index} className="overflow-hidden">
                      <span className="flex">
                        <span className="featuredSectionParaSpan font-medium translate-y-[100%]">
                          {word.split("").map((char,index) => {
                            return <span key={index}>{char}</span>;
                          })}
                        </span>
                        <span>&nbsp;</span>
                      </span>
                    </span>
                  );
                })}
            </p>
          </div>
        </div>
        <div className="w-[100vw] h-[160px] px-[5vw] flex flex-col items-center justify-center overflow-hidden">
          <svg
            onMouseMove={(event) => {
              elasticMouseMoveHanler(
                event.nativeEvent.offsetX,
                event.nativeEvent.offsetY
              );
            }}
            onMouseLeave={() => {
              elasticMouseLeaveHanler();
            }}
            className="overflow-x-hidden"
            width="500"
            height="160"
          >
            <path
              id="path"
              d={`M 10 80 Q 250 80 490 80`}
              stroke="white"
              fill="transparent"
            />
          </svg>
          <svg
            onMouseMove={(event) => {
              elasticMouseMoveHanler(
                event.nativeEvent.offsetX,
                event.nativeEvent.offsetY
              );
            }}
            onMouseLeave={() => {
              elasticMouseLeaveHanler();
            }}
            className="absolute translate-y-5"
            width="500"
            height="160"
          >
            <path
              id="path"
              d={`M 10 80 Q 250 80 490 80`}
              stroke="white"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
      <div className="relative h-fit px-[5vw]">
        {featuredProjects.map((obj, index) => {
          return (
            <div key={index} className={`border-t border-white/20 h-fit text-white  `}>
              <div className="flex justify-between items-center py-4">
                <h3
                  className={`projectHeading${index} h-[6rem] anton leading-none text-[#d7d7cf] text-8xl max-[600px]:text-4xl h-fit overflow-hidden`}
                >
                  <span
                    className={`projectChar${index} inline-block translate-y-[100%]`}
                  >
                    {obj.title}
                  </span>
                </h3>
                <div className="text-white flex gap-3">
                  <Link>
                    <button className="relative ">
                      <span className="absolute z-[3] bg-zinc-900   hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">
                        Git
                      </span>
                      <span className="relative z-[4]  hover:opacity-0 bg-black  hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">
                        <IoLinkOutline />
                      </span>
                    </button>
                  </Link>
                  <Link>
                    <button className="relative ">
                      <span className="absolute z-[3] bg-zinc-900 hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">
                        Live
                      </span>
                      <span className="relative z-[4] hover:opacity-0 bg-black  hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">
                        <RiExternalLinkLine />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className={`aboutProject  duration-300 flex w-full max-[1024px]:flex-col-reverse gap-5 py-14 h-full max-[1024px]:h-fit `}
              >
                <p
                  className={`projectPara${index} text-[#d0d0c6] projectPara w-1/2 max-[1024px]:w-full  flex flex-wrap h-fit`}
                >
                  {obj.description.split(" ").map((word,idx) => {
                    return <span key={idx} className="flex overflow-hidden">
                      <span
                        className={`projectParaWord${index} font-medium translate-y-[110%]`}
                      >
                        {word}
                      </span>
                      <span className="">&nbsp;</span>
                    </span>;
                  })}
                </p>
                <div className="w-1/2 max-[1024px]:w-full ">
                  <div
                    onMouseMove={(event) => {
                      setClientX(event.nativeEvent.offsetX);
                      setClientY(event.nativeEvent.offsetY);
                      cursorMoveHelndler(index);
                    }}
                    onMouseLeave={() => {
                      setClientX(0);
                      setClientY(0);
                      cursorLeaveHelndler(index);
                    }}
                    className="bg-[url(https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center rounded-2xl relative "
                  >
                    <div
                      className={`cursorForindex${index}project opacity-0 absolute  border bg-white h-[4rem] w-[4rem] rounded-full z-[9] flex items-center justify-center`}
                    >
                      <h6 className="view text-black font-semibold ">view</h6>
                    </div>
                    <div className="overlayToPriventCursorGlitch absolute z-[10] h-full w-full"></div>
                    <div className="h-full w-full px-5 py-10 flex items-center justify-center">
                      <img
                        className="relative z-[1] w-full"
                        src={obj.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative h-fit overflow-hidden">
        <div className="flex flex-nowrap w-[200vw] relative ">
          <div className="w-[100vw] min-w-[1024px] max-[1024px]:hidden absolute h-[15vw] z-[5] flex justify-between">
            <div className=" w-[50%] bg-gradient-to-r from-black"></div>
            <div className=" w-[50%] bg-gradient-to-l from-black"></div>
          </div>
          <div
            onMouseMove={(event) => {
              setClientX(event.nativeEvent.offsetX);
              setClientY(event.nativeEvent.offsetY);
              gsap.to(`.viewMoreProjectBtnMoving`, {
                opacity: 1,
                duration: 0.3,
                x: clientX - 80,
                y: clientY - 20,
              });
              gsap.to(".viewMoreProjectBtnFixed", { opacity: 0 });
            }}
            onMouseLeave={() => {
              setClientX(0);
              setClientY(0);
              gsap.to(`.viewMoreProjectBtnMoving`, {
                opacity: 0,
                duration: 0.3,
              });
              gsap.to(".viewMoreProjectBtnFixed", { opacity: 1 });
            }}
            className=" absolute z-[10] text-white w-[100vw]  h-full  "
          >
            <Link to="projects">
              <div className="overlayonscrollingimgs absolute h-full w-full z-[9]"></div>
            </Link>
            <button className="viewMoreProjectBtnFixed absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-black border-2 border-green-500 bg-white  h-[2.5rem] w-[10rem] rounded-full font-semibold uppercase">
              More Projects
            </button>

            <button className="viewMoreProjectBtnMoving opacity-0 absolute text-black border-2 border-green-500 bg-white  h-[2.5rem] w-[10rem] rounded-full font-semibold uppercase">
              More Projects
            </button>
          </div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="flex  py-5 w-[100vw] min-w-[1024px] relative z-[4]"
          >
            <img src={projects[0].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[1].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[2].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[3].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[4].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[5].image} className="w-[15%] mx-[0.7%]" alt="" />
            
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="flex  py-5 w-[100vw] min-w-[1024px] relative z-[4]"
          >
            <img src={projects[6].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[7].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[8].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[9].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[10].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={projects[11].image} className="w-[15%] mx-[0.7%]" alt="" />
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
