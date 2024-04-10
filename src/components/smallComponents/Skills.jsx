import React from 'react'
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { BiLogoTailwindCss } from "react-icons/bi";
import { MdJavascript } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
function Skills() {
  return (
    <div className='py-5'>
        
        <div className='bg-zinc-900 w-full py-2 flex gap-3 text-5xl justify-center items-center rounded-l-full relative'>
            <h2 className='text-sm text-zinc-600  font-semibold py-2 uppercase absolute left-2 bg-white rounded-full p-3'>Skills</h2>
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