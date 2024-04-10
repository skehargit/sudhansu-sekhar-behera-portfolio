import React, { useRef } from "react";
import Btn from "./smallComponents/Btn";
import EducationDate from "./smallComponents/EducationDate";
import CourseAndCollegeName from "./smallComponents/CourseAndCollegeName";
import Skills from "./smallComponents/Skills";
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
                {[
                  ["age:", " 23"],
                  ["from:", " odisha(india)"],
                ].map((el, index) => (
                  <div key={index}>
                    <span className="font-semibold text-white capitalize">
                      {el[0]}
                    </span>
                    <span className=" text-green-500">{el[1]}</span>
                  </div>
                ))}
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
          <h2 className=" text-2xl font-semibold py-2 uppercase">Education</h2>
          {[
            {
              date: "2024",
              fullDate: "---",
              collegeName: "Code Help, Youtube, Udemy, online",
              courseName: "MERN Stack development, Web Designing",
            },

            {
              date: "2025",
              fullDate: "2022-2025",
              collegeName:
                "Vignan Institute Of Technology And Management, Berhampur",
              courseName: "Btech in Mechanical Engineering",
            },
            {
              date: "2022",
              fullDate: "2019-2022",
              collegeName:
                "Aum Sai Institute Of Technical Education, Berhampur",
              courseName: "Diploma in Mechanical Engineering",
            },
          ].map((obj, index) =>
            index%2 != 0 ? (
              <div
                key={index}
                className="w-full px-5 flex items-center justify-center"
              >
                <div className="flex items-center w-[70%]  relative">
                  <CourseAndCollegeName
                    collegeName={obj.collegeName}
                    courseName={obj.courseName}
                    textPosition="start"
                  />
                  <EducationDate date={obj.date} fullDate={obj.fullDate} />
                  <div className="w-[88%] absolute bg-zinc-900 h-full z-[1] left-0"></div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="w-full px-5 flex items-center justify-center"
              >
                <div className="flex items-center w-[70%]  relative">
                  <EducationDate date={obj.date} fullDate={obj.fullDate} />
                  <CourseAndCollegeName
                    collegeName={obj.collegeName}
                    courseName={obj.courseName}
                    textPosition="end"
                  />
                  <div className="w-[88%] absolute bg-zinc-900 h-full z-[1] right-0"></div>
                </div>
              </div>
            )
          )}
        </div>
        <Skills/>
      </div>
    </div>
  );
}

export default About;
