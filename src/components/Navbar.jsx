import React from "react";
import Btn from "./smallComponents/Btn";
function Navbar() {
  return (
    <div className="w-full h-fit bg-black box-border px-10">
      <div className="border-b border-zinc-100/30 py-3 flex items-center justify-between">
        <div className="logo flex items-center gap-2">
          <span className="text-white font-semibold text-2xl tracking-wider">
            SSB.
          </span>
        </div>
        <div className="navbtns text-zinc-100/60 flex gap-5">
          <Btn name='view all projects'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
