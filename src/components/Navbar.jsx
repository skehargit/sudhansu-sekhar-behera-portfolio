import React from "react";
import Btn from "./Btn";

function Navbar() {
  return (
    <div className="w-full h-fit bg-black box-border px-10">
      <div className="border-b border-zinc-100/30 py-3 flex items-center justify-between">
        <div className="logo flex items-center gap-2">
          <div className="w-[40px] h-[40px]  rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/36/ea/42/36ea420bda238ecd1818b0f734dbb6f4.webp"
              alt="profile img"
              className="w-[50px] -translate-y-2 "
            />
          </div>

          <span className="text-white font-semibold text-2xl tracking-wider">
            SSB.
          </span>
        </div>
        <div className="navbtns text-zinc-100/60 flex gap-5">
          {/* {["resume", "view all projects"].map((el,index) => (
            <button key={index} className="border border-zinc-100/30 h-10 px-5 ">
              <div className="flex flex-col">{el}</div>
            </button>
          ))} */}
          <Btn name='resume'/>
          <Btn name='view all projects'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
