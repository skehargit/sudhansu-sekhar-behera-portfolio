import React, { useRef } from "react";
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
                    #Web Developer
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
      <div className="border w-1/2">
        <div className="text-white pt-20">
          <h2>ABOUT :</h2>
          <h3>
            I'm passionate about designing websites and continuously learning
            web development online. I can craft responsive and dynamic designs.
            Currently seeking opportunities to grow and contribute my skills.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
