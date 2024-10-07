import React, { useState, useEffect } from "react";
import LinkButton from "./smallComponents/LinkButton";
import Stacks from "./Stacks";
import { Link } from "react-router-dom";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const FProject = ({ index, obj }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    gsap.to(".myProjectsh1Span", {
      scrollTrigger: {
        trigger: ".myProjectsh1",
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
      },
      y: 0,
      duration: 0.3,
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
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
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
    <div key={index} className={` border-t border-white/20 h-fit text-white  `}>
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
          {obj.github && (
            <Link to={`${obj.github}`}>
              <LinkButton name={"git"} />
            </Link>
          )}

          {obj.live && (
            <Link to={`${obj.live}`}>
              <LinkButton name={"live"} />
            </Link>
          )}
        </div>
      </div>
      <div
        className={`aboutProject  duration-300 flex w-full max-[1024px]:flex-col-reverse gap-5 py-14 h-full max-[1024px]:h-fit `}
      >
        <div
          className={`projectPara${index} text-[#d0d0c6] projectPara w-1/2 max-[1024px]:w-full  text-lg flex flex-col h-fit`}
        >
          <p className="flex flex-wrap">
            {obj.description.split(" ").map((word, idx) => {
              return (
                <span key={idx} className="flex overflow-hidden">
                  <span
                    className={`projectParaWord${index} font-medium translate-y-[110%]`}
                  >
                    {word}
                  </span>
                  <span className="">&nbsp;</span>
                </span>
              );
            })}
          </p>

          <div className="">
            <Stacks props={obj.stacks.split(",")}></Stacks>
          </div>
        </div>
        <div className={` w-1/2 max-[1024px]:w-full`}>
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
            className={`${
              loading
                ? "bg-zinc-900 animate-pulse"
                : "bg-[url(https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"
            } bg-cover bg-center rounded-2xl relative `}
          >
            <div
              className={`cursorForindex${index}project opacity-0 absolute  border bg-white h-[4rem] w-[4rem] rounded-full z-[9] flex items-center justify-center`}
            >
              <h6 className="view text-black font-semibold ">view</h6>
            </div>
            <Link to={`${obj.live}`}>
              <div className="overlayToPriventCursorGlitch absolute z-[10] h-full w-full"></div>
            </Link>
            <div className="h-full w-full px-5 py-10 flex items-center justify-center">
              <img
                className="relative z-[1] w-full"
                src={obj.image}
                alt="project image"
                onLoad={() => setLoading(false)}
              />
              {loading && <div className="w-full h-[200px]"></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FProject;
