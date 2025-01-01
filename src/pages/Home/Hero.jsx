import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const [imgLoading, setImgLoading] = useState(true);
  const paragraphRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const characters = paragraphRef.current.children;
    gsap.fromTo(
      characters,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3, 
        stagger: 0.03,
        ease: "power2.out",
      }
    );
  }, []);
  

  return (
    <div className="min-h-screen h-fit w-full bg-[#0c0c0c] overflow-x-hidden flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start gap-6">
          <div className="text-white">
            <ul className="mylink font-bold marcellus-regular flex flex-wrap">
              <li className="pr-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                I'm
              </li>
              <li className="pr-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Sudhansu
              </li>
              <li className="pr-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Sekhar
              </li>
              <li className="pr-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Behera
              </li>
            </ul>
          </div>

          <div className="text-md sm:text-lg md:text-xl font-medium text-gray-400">
            <Typewriter
              options={{
                strings: [
                  "a MERN stack developer",
                  "a frontend developer",
                  "a backend developer",
                  "a full stack developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <p
            ref={paragraphRef}
            className="text-sm sm:text-md md:text-lg font-medium text-gray-400 max-w-md leading-relaxed"
          >
            {`I love building websites that are responsive and animated. I have worked on many projects using both frontend and backend skills. I enjoy learning new things to create great online experiences.`
              .split("")
              .map((char, index) => (
                <span key={index}>{char}</span>
              ))}
          </p>

          <div className="flex gap-4 items-center justify-between w-full">
            <div className="flex items-center text-gray-400 font-medium">
              <img
                className="w-6 h-6 mr-2"
                src="https://img.icons8.com/external-justicon-flat-justicon/64/external-india-flag-countrys-flags-justicon-flat-justicon.png"
                alt="India Flag"
              />
              <span>Odisha, India</span>
            </div>
            <div className="flex gap-4 font-bold">
              <ul className="mylink text-gray-400">
                <li className="pr-4 py-1" onClick={() => navigate("/about")}>
                  About Me
                </li>
                <li className="pr-4 py-1">
                  <Link
                    to="https://drive.google.com/file/d/1GLLb9OxcvdgSbIno7bZVtfCt7bJpCfkp/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-white text-center w-fit grid grid-cols-3 gap-2 items-center">
            <p className="font-bold text-sm text-white text-nowrap">
              Follow Me
            </p>
            <div className="border-b border-white"></div>
            <div className="flex gap-2">
              <Link
                to={"https://github.com/skehargit"}
                className="hover:scale-[1.4] duration-300"
              >
                <FaGithub />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/sudhansu-sekhar-behera/"}
                className="hover:scale-[1.4] duration-300"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            className="w-64 md:w-80 shadow-lg animate-wave"
            src="https://i.pinimg.com/originals/36/ea/42/36ea420bda238ecd1818b0f734dbb6f4.webp"
            alt="Profile"
            onLoad={() => setImgLoading(false)}
          />
          {imgLoading && (
            <div className="absolute top-0 w-64 md:w-80 h-full bg-gray-800 animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
