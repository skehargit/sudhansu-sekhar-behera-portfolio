import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    getAllProjects();
  },[]);
  console.log(projects);


  // useGSAP(()=>{
  //     gsap.to('')
  // })
  return (
    <div className='h-screen w-full bg-black'>
        
    </div>
  )
}

export default FeaturedProjects