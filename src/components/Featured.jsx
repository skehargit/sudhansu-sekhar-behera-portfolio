import React, { useEffect, useState } from "react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
import { IoLinkOutline } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
function Featured() {
  const [live,setLive]=useState(false);
  useEffect(() => {
    gsap.to(".myProjectsh1Span", {
      scrollTrigger: {
        trigger: ".myProjectsh1",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      y: 0,
      stagger: 0.1,
    });
    gsap.to(".allProjectsHeadingSpan", {
      scrollTrigger: {
        trigger: ".allProjectsHeading",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      y: 0,
      stagger: 0.1,
    });
    gsap.to(".featuredSectionParaSpan", {
      scrollTrigger: {
        trigger: ".projectsPara",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      y: 0,
      stagger: 0.01,
    });
  });
  useEffect(() => {
    for (let i = 0; i <= 2; i++) {
      gsap.to(`.projectChar${i}`, {
        scrollTrigger: {
          trigger: `.projectHeading${i}`,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          // markers:true
        },
        y: 0,
        stagger: 0.07,
      });
    }
  });
  const pj = [
    {
      id: 1,
      title: "zenflavor",
      image:
        "https://i.pinimg.com/originals/21/fe/88/21fe88004c7ff667509290cfd61e65df.jpg",
      link1: "https://skehargit.github.io/ZenFlavor_Reastaurant/",
      link2: "https://github.com/skehargit/ZenFlavor_Reastaurant",
      type: "featured",
      description:
        "🍽️ ZenFlavor a cool frontend design created by me🎨. It's not just a pretty face; it's responsive and comes with some cool animations! 📱",
    },
    {
      id: 2,
      title: "sudoku",
      image:
        "https://i.pinimg.com/originals/14/ac/91/14ac910cddd7da90f6e5259d14ae0614.jpg",
      link1: "https://skehargit.github.io/sudoku/",
      link2: "https://github.com/skehargit/sudoku",
      type: "featured",
      description:
        "Developed a Sudoku game using JavaScript. with simple design there are easy question of sudoku so try it once.📱",
    },
    {
      id: 3,
      title: "Music Player",
      image:
        "https://i.pinimg.com/originals/08/7d/1d/087d1ddd95dae0a3547d2b1e5a2ad47d.jpg",
      link1: "https://skehargit.github.io/music-player/",
      link2: "https://github.com/skehargit/music-player",
      type: "normal",
      description: "A small music player project with responsive design.📱",
    },
  ];
  return (
    <div className="featuredSection min-h-screen h-fit bg-black w-full relative rounded-3xl">
      <div className=" flex flex-col items-center">
        <h3 className="myProjectsh1 text-[#d0d0c6]  text-8xl px-[5vw] pt-[10vh] uppercase anton flex overflow-hidden w-full">
          {"My Projects /".split("").map((char, index) => (
            <span
              key={`myProjectsh1Span${index}`}
              className="myProjectsh1Span translate-y-[100%]"
            >
              {char}
            </span>
          ))}
        </h3>
        <div className="w-full justify-end flex p-5">
          <div className=" flex w-[600px]">
            <p className="projectsPara text-[#d0d0c6]  flex flex-wrap">
              {`I have created my projects using Html, css, JavaScript,   TailwindCss, react, express, mongoDB, nodejs, gsap,`
                .split(" ")
                .map((word, index) => (
                  <span
                    key={`featuredSectionPara${index}`}
                    className="overflow-hidden"
                  >
                    <span className="flex">
                      <span className="featuredSectionParaSpan font-medium translate-y-[100%]">
                        {word.split("").map((char, idx) => (
                          <span key={`featuredSectionParaSpan${idx}chars`}>{char}</span>
                        ))}
                      </span>
                      <span>&nbsp;</span>
                    </span>
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-fit px-[5vw]">
        {pj.map((obj, index) => (
          <div key={`project${index}about`}
            className={`border-t h-screen text-white sticky top-0 bg-black `}
          >
            <div className="flex justify-between items-center py-4">
              <h3
                className={`projectHeading${index} h-[6rem] anton leading-none text-[#d7d7cf] text-8xl max-[600px]:text-4xl overflow-hidden`}
              >
                {obj.title.split("").map((char, idx) => (
                  <span
                    key={`featuredSectionProjectHeadingSpan${index}${idx}`}
                    className={`projectChar${index} inline-block translate-y-[100%]`}
                  >
                    {char}
                  </span>
                ))}
              </h3>
              <div className="text-white flex gap-3">
                
                <Link>
                  <button className="relative ">
                    <span className="absolute z-[3] bg-zinc-900   hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">Git</span>
                    <span className="relative z-[4]  hover:opacity-0 bg-black  hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">
                    <IoLinkOutline />
                    </span>
                  </button>
                </Link>
                <Link>
                  <button className="relative ">
                    <span className="absolute z-[3] bg-zinc-900 hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">Live</span>
                    <span className="relative z-[4] hover:opacity-0 bg-black  hover:scale-[1.2] duration-300 border border-white/10 text-base w-[3rem] h-[3rem]  rounded-full flex items-center justify-center">
                      <RiExternalLinkLine />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`aboutProject  duration-300 flex w-full max-[1024px]:flex-col-reverse `}
            >
              <p className="projectPara text-[#a19d99] w-1/2 max-[1024px]:w-full h-fit flex flex-wrap ">
                {obj.description}
              </p>
              <div className="w-1/2 max-[1024px]:w-full">
                <img
                  className=" relative z-[1] w-full"
                  src={obj.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden">
        <h3 className="allProjectsHeading text-[#d0d0c6]  text-[5vw] px-[5vw] pt-[10vh] uppercase anton flex overflow-hidden w-full">
          {"Want to see more projects ?".split("").map((char, index) =>
            char == " " ? (
              <span key={`allProjectsHeadingSpan${index}`} className=" ">
                &nbsp;
              </span>
            ) : (
              <span
                key={`allProjectsHeadingSpan${index}`}
                className="allProjectsHeadingSpan translate-y-[100%]"
              >
                {char}
              </span>
            )
          )}
        </h3>
        <div className="flex flex-nowrap w-[200vw] relative ">
          <div className="w-[100vw] absolute h-[15vw] z-[5] flex justify-between">
            <div className=" w-[50%] bg-gradient-to-r from-black"></div>
            <div className=" w-[50%] bg-gradient-to-l from-black"></div>
          </div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="flex  py-5 w-[100vw] relative z-[4]"
          >
            <img src={pj[0].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[1].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="flex   py-5 w-[100vw] relative z-[4]"
          >
            <img src={pj[0].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[1].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
            <img src={pj[2].image} className="w-[15%] mx-[0.7%]" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
