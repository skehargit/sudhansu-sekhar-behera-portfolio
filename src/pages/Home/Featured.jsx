// Featured.js
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featuredProjects from "../../assets/featuredProjects.js";
import FProject from "../../components/FProject";
import ElasticPath from "../../components/ElasticPath.jsx";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Featured = () => {
  useEffect(() => {
    const animateElement = (selector, fromProps, toProps) => {
      gsap.fromTo(selector, fromProps, {
        ...toProps,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "top 60%",
          // Remove scrub for smoother animation
          // The animation will play once when the element enters the viewport
        },
      });
    };

    // Animate project words with a faster stagger
    animateElement(".project-words span", { opacity: 0 }, { opacity: 1, stagger: 0.001 });

    // Animate the project title
    animateElement(".projectTitle", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
  }, []);

  return (
    <div className="featuredSection min-h-screen bg-black w-full relative rounded-t-3xl overflow-hidden">
      <div className="flex flex-col">
        <h3 className="projectTitle marcellus-regular font-semibold text-[#d0d0c6] text-8xl max-[600px]:text-5xl px-[5vw] pt-[10vh] uppercase flex overflow-hidden">
          {"Projects /".split(" ").map((char, index) => (
            <span key={index} className="projectTitleSpan ">
              {char}
            </span>
          ))}
        </h3>
        <div className="w-full flex justify-end p-5">
          <div className="flex w-[600px]">
            <p className="project-words text-[#d0d0c6] text-lg flex flex-wrap">
              {`I have developed various projects using technologies such as HTML, CSS, JavaScript, Tailwind CSS, React, Express, MongoDB, Node.js, GSAP, Framer Motion, Socket.io, etc. My experience ranges from deploying websites on free servers to setting them up on paid VPS servers.`.split(" ")
                .map((word, index) => (
                  <span key={index} className="overflow-hidden flex">
                    <span className="word-animation font-medium">
                      {word.split("").map((char, charIndex) => (
                        <span key={charIndex}>{char}</span>
                      ))}
                    </span>
                    <span>&nbsp;</span>
                  </span>
                ))}
            </p>
          </div>
        </div>
        <ElasticPath />
      </div>
      <div className="relative h-fit px-[5vw]">
        {featuredProjects.map((project, index) => (
          <FProject key={index} index={index} obj={project} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
