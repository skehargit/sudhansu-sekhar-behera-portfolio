import React, { useEffect } from "react";
import gsap from "https://esm.sh/gsap";
function Btn(props) {
  return (
    <button className="group btn border border-zinc-100/30 h-10  relative overflow-hidden">
      <div className="group-hover:-translate-y-[100%] duration-300 h-full w-full flex items-center justify-center uppercase text-sm text-white px-10">
        {props.name.split("").map((letter,index) => (
          letter==' '?
          <span key={index+letter} className="">&nbsp;</span>:
          <span key={index+letter} className="">{letter}</span>
        ))}
      </div>
      <div className="group-hover:-translate-y-[100%] duration-300 h-full w-full flex items-center justify-center uppercase text-sm text-white px-10">
        {props.name.split("").map((letter,index) => (
          letter==' '?
          <span key={letter+index} className="">&nbsp;</span>:
          <span key={letter+index} className="">{letter}</span>
        ))}
      </div>
    </button>
  );
}

export default Btn;
