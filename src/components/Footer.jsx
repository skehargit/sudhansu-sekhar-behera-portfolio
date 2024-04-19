import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="w-full ">
      <div className="py-10 w-full bg-black/95 text-white flex flex-col items-center justify-center">
        <h3 className="anton tracking-wider text-9xl text-white/10 font-semibold">
          SSB.
        </h3>

        <div className="w-full mt-5 flex items-center justify-center gap-3">
          <hr className="w-[10%]" />
          <div className="flex gap-2">
            <div className="p-2 border rounded-full backdrop-blur border-white/20">
              <FaGithub />
            </div>
            <div className="p-2 border rounded-full backdrop-blur border-white/20">
              <FaLinkedin />
            </div>
            <div className="p-2 border rounded-full backdrop-blur border-white/20">
              <MdAlternateEmail />
            </div>
          </div>
          <hr className="w-[10%]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
