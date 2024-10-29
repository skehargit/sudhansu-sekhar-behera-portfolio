import React, { useState, useEffect } from "react";
import LinkButton from "./smallComponents/LinkButton";
import Stacks from "./Stacks";
import { Link } from "react-router-dom";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FProject = ({ index, obj }) => {
  const [loading, setLoading] = useState(true);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.projectHeading${index}`,
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
      },
    });
  
    // Animate heading characters
    timeline.to(`.projectChar${index}`, {
      y: 0,
      duration: 0.3,
    });
  
    // Animate each character in the paragraph
    const paragraphText = document.querySelector(`.projectPara${index} p`);
    if (paragraphText) {
      const chars = paragraphText.textContent.split('').map((char) => `<span class="projectParaChar${index}">${char}</span>`);
      paragraphText.innerHTML = chars.join('');
  
      const charElements = document.querySelectorAll(`.projectParaChar${index}`);
      charElements.forEach((char, charIndex) => {
        gsap.fromTo(char,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.05,
            delay: charIndex * 0.005,
            scrollTrigger: {
              trigger: `.projectPara${index}`,
              scroller: "body",
              start: "top 80%",
              end: "bottom 80%",
            },
          });
      });
    }
  
    // Animate opacity for the paragraph as a whole
    gsap.to(`.projectPara${index}`, {
      opacity: 1,
      scrollTrigger: {
        trigger: `.projectPara${index}`,
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
      },
      duration: 0.3,
    });
  }, [index]);

  const cursorMoveHandler = () => {
    gsap.to(`.cursorForindex${index}project`, {
      opacity: 1,
      duration: 0.3,
      x: clientX - 32,
      y: clientY - 32,
    });
  };

  const cursorLeaveHandler = () => {
    gsap.to(`.cursorForindex${index}project`, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <div key={index} className="border-t border-white/20 h-fit text-white">
      <div className="flex justify-between items-center py-4">
        <h3
          className={`projectHeading${index} h-[6rem] anton leading-none text-[#d7d7cf] text-8xl max-[600px]:text-4xl h-fit overflow-hidden`}
        >
          <span
            className={`projectChar${index} marcellus-regular font-semibold inline-block translate-y-[100%]`}
          >
            {obj.title}
          </span>
        </h3>
        <div className="text-white flex gap-3">
          {obj.github && (
            <Link to={obj.github}>
              <LinkButton name="git" />
            </Link>
          )}
          {obj.live && (
            <Link to={obj.live}>
              <LinkButton name="live" />
            </Link>
          )}
        </div>
      </div>
      <div className="aboutProject duration-300 flex w-full max-[1024px]:flex-col-reverse gap-5 py-14 h-full max-[1024px]:h-fit">
        <div className={`projectPara${index} text-[#d0d0c6] w-1/2 max-[1024px]:w-full text-md flex flex-col h-fit opacity-0`}>
          <p className="flex flex-wrap">
            {obj.description.split(" ").map((word, idx) => (
              <span key={idx} className={`projectParaWord${index} font-medium`}>
                {word}
                {idx < obj.description.split(" ").length - 1 && <span>&nbsp;</span>} {/* Add space between words */}
              </span>
            ))}
          </p>
          <div>
            <Stacks props={obj.stacks.split(",")} />
          </div>
        </div>
        <div className="w-1/2 max-[1024px]:w-full">
          <div
            onMouseMove={(event) => {
              setClientX(event.nativeEvent.offsetX);
              setClientY(event.nativeEvent.offsetY);
              cursorMoveHandler();
            }}
            onMouseLeave={cursorLeaveHandler}
            className={`${
              loading
                ? "bg-zinc-900 animate-pulse"
                : "bg-[url(https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]"
            } bg-cover bg-center rounded-2xl relative`}
          >
            <div
              className={`cursorForindex${index}project opacity-0 absolute border bg-white h-[4rem] w-[4rem] rounded-full z-[9] flex items-center justify-center`}
            >
              <h6 className="view text-black font-semibold">view</h6>
            </div>
            <Link to={obj.live}>
              <div className="overlayToPreventCursorGlitch absolute z-[10] h-full w-full" />
            </Link>
            <div className="h-full w-full px-5 py-10 flex items-center justify-center">
              <img
                className="relative z-[1] w-full"
                src={obj.image}
                alt="project image"
                onLoad={() => setLoading(false)}
              />
              {loading && <div className="w-full h-[200px]" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FProject;
