import React, { useEffect } from 'react'
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function LinesAnimate() {
    
    useEffect(()=>{
        for (let i = 1; i <= 20; i++) {
            gsap.to(`.circle${[i]}`, {
              scrollTrigger: {
                trigger: `.circle${[i]}`,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
              },
              height: "20px",
              opacity: 0,
            });
          }
    })
  return (
    <div className=''>
      <div className="linersAnimation top-0 absolute h-[100vh] w-full bg-transeparent z-[3] overflow-hidden">
        <div className="absolute z-[3] text-white w-full h-full flex justify-between">
          <div
            className={`circle1 circleLine opacity-1 w-[10px] h-[150px] absolute right-[10%] top-[20%] rounded-full   bg-red-600 flex justify-center`}
          ></div>
          <div
            className={`circle2 circleLine w-[10px] h-[200px] absolute right-[40%] top-[10%] rounded-full  bg-green-600 flex justify-center`}
          ></div>
          <div
            className={`circle3 circleLine w-[10px] h-[250px] absolute right-[60%] top-[70%] rounded-full  bg-yellow-600 flex justify-center`}
          ></div>
          <div
            className={`circle4 circleLine w-[10px] h-[150px] absolute right-[20%] top-[40%] rounded-full  bg-blue-600 flex justify-center`}
          ></div>
          <div
            className={`circle5 circleLine w-[10px] h-[170px] absolute right-[80%] top-[30%] rounded-full  bg-orange-600 flex justify-center`}
          ></div>
          <div
            className={`circle6 circleLine w-[10px] h-[140px] absolute right-[70%] top-[50%] rounded-full  bg-pink-600 flex justify-center`}
          ></div>
          <div
            className={`circle7 circleLine w-[10px] h-[100px] absolute right-[90%] top-[80%] rounded-full  bg-yellow-600 flex justify-center`}
          ></div>
          <div
            className={`circle8 circleLine w-[10px] h-[180px] absolute right-[30%] top-[70%] rounded-full  bg-red-600 flex justify-center`}
          ></div>
          <div
            className={`circle9 circleLine w-[10px] h-[150px] absolute right-[5%] top-[60%] rounded-full  bg-green-600 flex justify-center`}
          ></div>
          <div
            className={`circle10 circleLine w-[10px] h-[190px] absolute right-[90%] top-[10%] rounded-full  bg-orange-600 flex justify-center`}
          ></div>
        </div>
      </div>
      <div className="stars linersAnimation relative h-[100vh] w-full bg-transeparent z-[3] overflow-hidden">
        <div className="absolute z-[3] text-white w-full h-full flex justify-between">
          <div
            className={`circle11 circleLine opacity-1 w-[10px] h-[150px] absolute right-[10%] top-[20%] rounded-full  bg-yellow-600 flex justify-center`}
          ></div>
          <div
            className={`circle12 circleLine w-[10px] h-[200px] absolute right-[40%] top-[10%] rounded-full  bg-orange-600 flex justify-center`}
          ></div>
          <div
            className={`circle13 circleLine w-[10px] h-[250px] absolute right-[60%] top-[70%] rounded-full  bg-blue-600 flex justify-center`}
          ></div>
          <div
            className={`circle14 circleLine w-[10px] h-[150px] absolute right-[20%] top-[40%] rounded-full  bg-green-600 flex justify-center`}
          ></div>
          <div
            className={`circle15 circleLine w-[10px] h-[170px] absolute right-[80%] top-[30%] rounded-full  bg-pink-600 flex justify-center`}
          ></div>
          <div
            className={`circle16 circleLine w-[10px] h-[140px] absolute right-[70%] top-[50%] rounded-full  bg-green-600 flex justify-center`}
          ></div>
          <div
            className={`circle17 circleLine w-[10px] h-[100px] absolute right-[90%] top-[80%] rounded-full  bg-red-600 flex justify-center`}
          ></div>
          <div
            className={`circle18 circleLine w-[10px] h-[180px] absolute right-[30%] top-[70%] rounded-full  bg-blue-600 flex justify-center`}
          ></div>
          <div
            className={`circle19 circleLine w-[10px] h-[150px] absolute right-[5%] top-[60%] rounded-full  bg-pink-600 flex justify-center`}
          ></div>
          <div
            className={`circle20 circleLine w-[10px] h-[190px] absolute right-[90%] top-[10%] rounded-full  bg-yellow-600 flex justify-center`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LinesAnimate