import React, { useEffect, useState } from "react";
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function FeaturedProjects() {
  const [projects, setProjects] = useState();

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
  useEffect(()=>{
    for(let i=0;i<=3;i++){
      gsap.to(`.projectsBox${i}`, {
        scrollTrigger: {
          trigger: `.projectsBox${i}`,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers:true,
        },
        scale:1,
        opacity:1,
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
    <div className="projectContainer h-[450vh] w-full bg-black relative">
      {pj.map((obj, index) => (
        <div
          key={index}
          className={` projectsBox${index} scale-0 opacity-0 flex h-[100vh] items-center  justify-center sticky top-0`}
        >
          <div className=" min-w-[300px] w-[40vw] h-fit relative">
            <h1 className="projectHeading tracking-wide font-semibold  text-white text-5xl uppercase text-end pb-2 bg-black">
              {obj.title}
            </h1>
            <div className="group relative ">
              <img className=" relative z-[1] w-full" src={obj.image} alt="" />
              <div className="absolute z-[2] bottom-0 w-full flex flex-col items-center justify-center text-white bg-gradient-to-t from-black ">
                <div></div>
                <p>{obj.description}</p>
              </div>
            </div>
            <div className="text-white w-full grid grid-cols-2 mt-2">
              <div className="flex gap-2">
                <button className="py-2 w-1/2 bg-zinc-900 rounded-full capitalize">
                  git repo
                </button>
                <button className="py-2 bg-zinc-900 w-1/2 rounded-full capitalize">
                  live link
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProjects;
