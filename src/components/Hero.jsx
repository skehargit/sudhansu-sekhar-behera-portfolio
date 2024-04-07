import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Btn from './Btn';
gsap.registerPlugin(ScrollTrigger);
function Hero() {
   const tl = useRef();
  useGSAP(() => {
    //   gsap.to("hr", { width: "100%", duration: 1 });
      
      tl.current = gsap.timeline()
      .to('h1',{
        scale:1,
        stagger:0.2,
      })
      .to("hr", {
        width:'100%',
        stagger:0.4,
      })
    //   .to('.heroPage',{
    //     scrollTrigger: {
    //         trigger: '.heroPage',
    //         start: "50% center",
    //         end: "bottom center",
    //         scrub: true,
    //         markers: true
    //     },
    //     scale:1,
    //   })
    
      
    },
  ); 
  return (
    <div className='heroPage scale-1 w-full h-[90vh] bg-black relative'>
        <div className='absolute  text-white w-full flex items-center justify-center flex-col h-full'>
            <div>
                <h1 className='text-[10vw] scale-0 max-[600px]:text-[15vw] uppercase leading-none'>Hello,</h1>
                <hr className='w-[0%]' />
            </div>
            <div>
                <h1 className='text-[10vw] scale-0 max-[600px]:text-[15vw] uppercase leading-none'>I'm sudhansu</h1>
                <hr className='w-[0%]' />
            </div>
            <div>
                <h1 className='text-[10vw] scale-0 max-[600px]:text-[15vw] uppercase leading-none'>Learing mern</h1>
                <hr className='w-[0%]'/>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dicta.</p>
                <Btn name='resume'/>
            </div>
            
        </div>
    </div>
  )
}

export default Hero