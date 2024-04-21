import React, { useEffect } from 'react'
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { BiLogoTailwindCss } from "react-icons/bi";
import { MdJavascript } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

function Skills() {
  useEffect(()=>{
    gsap.to(".skbox", {
      scrollTrigger: {
        trigger: ".skbox",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 3,
        // markers:true,
      },
      width:'100%',
      opacity:1,
    });
  })
  return (
    <div className=''>
        <div className='skbox origin-right bg-zinc-900 w-[0] py-2 flex gap-3 text-5xl max-[600px]:text-2xl justify-center items-center rounded-full relative'>
        <MdHtml />
        <MdCss />
        <BiLogoTailwindCss />
        <MdJavascript />
        <DiReact />
        <FaNode />
        <SiExpress />
        <BiLogoMongodb />
        </div>
    </div>
  )
}

export default Skills