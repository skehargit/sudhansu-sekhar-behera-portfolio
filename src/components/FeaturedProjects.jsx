import React, { useEffect, useState } from "react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    for (let i = 0; i <= 3; i++) {
      gsap.to(`.projectsBox${i}`, {
        scrollTrigger: {
          trigger: `.projectsBox${i}`,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
        scale: 1,
        opacity: 1,
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
    {
      id: 4,
      title: "CatPhotos",
      image:
        "https://i.pinimg.com/originals/ee/c5/be/eec5bed12807e1d385d3c695c04f5db8.jpg",
      link1: "https://skehargit.github.io/catphotos/",
      link2: "https://github.com/skehargit/catphotos",
      type: "normal",
      description:
        "created a web page using HTML and CSS, following lessons from FreeCodeCamp.",
    },
  ];
  return (
    <div
      className={`projectContainer h-[100vh]  w-full bg-black relative overflow-hidden`}
    >
      <div className="h-full w-[100vw] flex items-center justify-center flex-col">
        {pj.map((obj, index) => (
          <div className="relative z-[2] border-b border-white/20 w-full h-[25%] overflow-hidden flex items-center justify-center gap-5">
            <h3 className="projectHeading leading-none text-white text-9xl">
              {obj.title}
            </h3>
            <div className="w-[250px] ">
              <img className=" relative z-[1] w-full" src={obj.image} alt="" />
              <div className="text-white flex w-full">
                <button className="bg-zinc-900 border border-white/20 w-1/2">
                  GitRepo
                </button>
                <button className="bg-zinc-900 border border-white/20 w-1/2">
                  LiveLink
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
