import React, { useRef } from "react";
import Btn from "./Btn";
function About() {
  return (
    <div className="w-full bg-black relative flex ">
      <div className=" w-1/2 sticky top-0 p-5 h-fit flex justify-center">
        <div className=" w-[300px] h-fit relative flex">
          <img
            className="w-full"
            src="https://i.pinimg.com/originals/36/ea/42/36ea420bda238ecd1818b0f734dbb6f4.webp"
            alt=""
          />
          <div className="w-full absolute h-full bg-gradient-to-t from-black to-50%">
            <div className="absolute bottom-0 p-3">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Sudhansu Sekhar Behera
                </h2>
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-semibold text-green-500">
                    #Web Designer
                  </h3>
                  <h3 className="text-md font-semibold text-green-500">
                    #MERN Developer
                  </h3>
                </div>
              </div>
              <div className="flex justify-between ">
                <div>
                  <span className="font-semibold text-white">Age:</span>
                  <span className=" text-green-500"> 23</span>
                </div>
                <div>
                  <span className="font-semibold text-white">From:</span>
                  <span className=" text-green-500"> Odisha(india)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 text-white">
        <div className="mt-28">
          <h2 className="text-2xl font-semibold py-2">ABOUT :</h2>
          <p className="text-lg py-2">
            I'm passionate about designing websites and continuously learning
            web development online. I can craft responsive and dynamic designs.
            Currently seeking opportunities to grow and contribute my skills.
          </p>

          <Btn name="resume" />
        </div>
        <div className="Education flex flex-col gap-3 items-center">
          <h2 className=" text-2xl font-semibold py-2 uppercase">
            Education 
          </h2>
          <div className="w-full px-5 flex items-center justify-center">
            <div className=" flex items-center w-[70%]  relative">
              <div className="flex flex-col w-1/4   items-center py-2 relative z-[2]">
                <span className="text-5xl font-semibold text-zinc-700">2024</span>  
                <span className="text-zinc-600 font-semibold">--</span>
              </div>
              <div className="w-3/4 flex flex-col text-end px-5 relative z-[2]">
                <p className="">MERN Stack development, Web Designing</p>
                <p className="text-sm text-zinc-400">Code Help, Youtube, Udemy, online</p>
              </div>
              <div className="w-[88%] absolute bg-zinc-900 h-full z-[1] right-0"></div>
            </div>
          </div>
          <div className="w-full px-5 flex items-center justify-center">
            <div className=" flex items-center w-[70%]  relative">
              <div className="w-3/4 flex flex-col text-start px-5 relative z-[2]">
                <p>Btech in Mechanical Engineering</p>
                <p className="text-sm text-zinc-400">Vignan Institute Of Technology And Management, Berhampur</p>
              </div>
              <div className="flex flex-col w-1/4   items-center py-2 relative z-[2]">
                <span className="text-5xl font-semibold text-zinc-700">2025</span>  
                <span className="text-zinc-600 font-semibold">2022-2025</span>
              </div>
              
              <div className="w-[88%] absolute bg-zinc-900 h-full z-[1] left-0"></div>
            </div>
          </div>
          <div className="w-full px-5 flex items-center justify-center">
            <div className=" flex items-center w-[70%]  relative">
              <div className="flex flex-col w-1/4   items-center py-2 relative z-[2]">
                <span className="text-5xl font-semibold text-zinc-700">2022</span>  
                <span className="text-zinc-600 font-semibold">2019-2022</span>
              </div>
              <div className="w-1/2 relative z-[2]">
                <p>Diploma in Mechanical Engineering</p>
                <p className="text-sm text-zinc-400">Aum Sai Institute Of Technical Education, Berhampur</p>
              </div>
              <div className="w-[88%] absolute bg-zinc-900 h-full z-[1] right-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
