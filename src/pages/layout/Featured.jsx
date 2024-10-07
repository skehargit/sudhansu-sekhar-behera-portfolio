import React, { useContext, useEffect, useState } from "react";
import gsap from "https://esm.sh/gsap";

import { Link } from "react-router-dom";

import Stacks from "../../components/Stacks";
import LinkButton from "../../components/smallComponents/LinkButton";
import FProject from "../../components/FProject";

function Featured() {
  
  const featuredProjects = [
    {
      description:
        "WarPoint is a competitive gaming tournament website where players can join, participate, and track their progress in matches. The platform features detailed match listings with key information like entry fees, prizes, and match types. Users can view results, join active matches, and follow leaderboards based on total winnings. WarPoint also offers secure user registration, payment management, and match filtering for a smooth tournament experience.",
      github: "",
      image:
        "https://res.cloudinary.com/db7pikwo4/image/upload/v1728278783/h76rmetcyr3xoxvpyqtd.webp",
      live: "https://warpoint.in",
      stacks:
        "html,css,javascript,gsap,tailwind,react,mongodb,express,node,jwt,bcrypt,",
      title: "WarPoint",
    },
    // {
    //   description:
    //     "It is a modern, responsive music player designed for seamless audio enjoyment across all devices.Enjoy precise control over your music with features like play, pause, skip, shuffle, and repeat.",
    //   github: "https://github.com/skehargit/music-player",
    //   image:
    //     "https://i.pinimg.com/originals/9c/18/cb/9c18cb6e04ccf304843db65052f2f828.jpg",
    //   live: "https://skehargit.github.io/music-player/",
    //   stacks: "html,css,javascript,gsap,tailwind",
    //   title: "music player",
    // },
    {
      description:
        "Studynotion is an innovative education platform designed for students, instructors, and admin. It features authentication system with encrypted passwords to ensure security and some usefull. Key features include a shopping cart, personalized dashboard, user profiles, course creation and uploading, and rating and review functionality.",
      github: "https://github.com/skehargit/StudyNotion",
      image:
        "https://i.pinimg.com/originals/f8/61/fb/f861fb24e090050cb33b69eaa0c29268.jpg",
      live: "https://study-notion-eight-pied.vercel.app/",
      stacks:
        "html,css,javascript,react,node,mongodb,express,jwt,bcrypt,tailwind",
      title: "Studynotion",
    },
    {
      description:
        "Chili is a modern restaurant web application featuring a responsive design for optimal viewing on all devices. It includes authentication and authorization using JSON Web Tokens (JWT) and encrypted passwords for enhanced security. Key features include cart functionality for easy order management.",
      github: "https://github.com/skehargit/Chili",
      image:
        "https://i.pinimg.com/originals/fb/10/61/fb1061cc2d75f576ec3ed9051bdc9440.jpg",
      live: "https://chili-eta.vercel.app/",
      stacks:
        "html,css,javascript,react,node,mongodb,express,jwt,bcrypt,tailwind",
      title: "Chili",
    },
  ];
  

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
  

  return (
    <div className="featuredSection min-h-screen h-fit bg-black w-full relative rounded-t-3xl overflow-x-hidden">
      <div className=" flex flex-col items-center">
        <h3 className="myProjectsh1 text-[#d0d0c6]  text-8xl max-[600px]:text-5xl px-[5vw] pt-[10vh] uppercase anton flex overflow-hidden w-full">
          {"Projects /".split(" ").map((char, index) => {
            return (
              <span key={index} className="myProjectsh1Span translate-y-[100%]">
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
                .map((word, index) => {
                  return (
                    <span key={index} className="overflow-hidden">
                      <span className="flex">
                        <span className="featuredSectionParaSpan font-medium translate-y-[100%]">
                          {word.split("").map((char, index) => {
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
          console.log(obj);
          return (
            <FProject key={index} index={index} obj={obj}/>
          );
        })}
      </div>

    </div>
  );
}

export default Featured;
