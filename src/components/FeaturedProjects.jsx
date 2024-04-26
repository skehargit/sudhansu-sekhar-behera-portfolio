import React, { useEffect, useState } from "react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GiDuration } from "react-icons/gi";
gsap.registerPlugin(ScrollTrigger);
import { Link } from "react-router-dom";
function FeaturedProjects() {
  const [projects, setProjects] = useState();
  const [bg, setBg] = useState("8");

  const getAllProjects = async () => {
    try {
      const getProjects = await fetch(
        `http://localhost:4000/api/projects1/getAllProjects`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await getProjects.json();
      setProjects(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    for (let i = 0; i <= 2; i++) {
      gsap.to(`.projectChar${i}`, {
        scrollTrigger: {
          trigger: `.projectHeading${i}`,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          // markers:true
        },
        y: 0,
        stagger: 0.1,
      });
    }
  });
  // useEffect(() => {
  //   // getAllProjects();
  // }, []);
  console.log(projects);
  const pj = [
    {
      id: 1,
      title: "zenflavor",
      image:
        "https://i.pinimg.com/originals/21/fe/88/21fe88004c7ff667509290cfd61e65df.jpg",
      link1: "https://skehargit.github.io/ZenFlavor_Reastaurant/",
      link2: "https://github.com/skehargit/ZenFlavor_Reastaurant",
      type: "featured",
      description:
        "🍽️ ZenFlavor a cool frontend design created by me🎨. It's not just a pretty face; it's responsive and comes with some cool animations! 📱",
    },
    {
      id: 2,
      title: "sudoku",
      image:
        "https://i.pinimg.com/originals/14/ac/91/14ac910cddd7da90f6e5259d14ae0614.jpg",
      link1: "https://skehargit.github.io/sudoku/",
      link2: "https://github.com/skehargit/sudoku",
      type: "featured",
      description:
        "Developed a Sudoku game using JavaScript. with simple design there are easy question of sudoku so try it once.📱",
    },
    {
      id: 3,
      title: "Music Player",
      image:
        "https://i.pinimg.com/originals/08/7d/1d/087d1ddd95dae0a3547d2b1e5a2ad47d.jpg",
      link1: "https://skehargit.github.io/music-player/",
      link2: "https://github.com/skehargit/music-player",
      type: "normal",
      description: "A small music player project with responsive design.📱",
    },
  ];
  return (
    <div className="featuredProjectsSection w-full bg-black flex items-center justify-center flex-col relative">
      {pj.map((obj, index) => (
        <Link
          to={`project/${index}`}
          key={`featuredProjectsSection${index}project`}
          className={`group projectBox${index}  border sticky top-0 bg-black z-[2] border-b border-white/20 w-full h-fit overflow-hidden flex flex-col items-center justify-center gap-5  py-5 px-10`}
        >
          <div className="flex justify-between items-center w-full">
            <h3
              className={`projectHeading${index} anton leading-none text-[#d7d7cf] text-9xl max-[600px]:text-2xl overflow-hidden`}
            >
              {obj.title.split("").map((char, idx) => (
                <span
                  key={`featuredProjectsSectionProjectHeading${index}chars${idx}`}
                  className={`projectChar${index} inline-block translate-y-[100%]`}
                >
                  {char}
                </span>
              ))}
            </h3>
            <div className="text-white flex ">
              <button className="bg-zinc-900 border border-white/20 w-1/2">
                GitRepo
              </button>
              <button className="bg-zinc-900 border border-white/20 w-1/2">
                LiveLink
              </button>
            </div>
          </div>
          <div
            className={`aboutProject  duration-300 flex w-full max-[1024px]:flex-col-reverse `}
          >
            <p className="projectPara text-[#a19d99] w-1/2 max-[1024px]:w-full h-fit flex flex-wrap ">
              {obj.description}
            </p>
            <div className="w-1/2 max-[1024px]:w-full">
              <img className=" relative z-[1] w-full" src={obj.image} alt="" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FeaturedProjects;
