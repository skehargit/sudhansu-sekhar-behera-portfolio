import React from "react";
function Navbar() {
  return (
    <div className="w-full h-fit bg-black box-border px-14">
      <div className="border-b border-zinc-100/30 py-5 flex items-center justify-between">
        <div className="logo flex items-center gap-2">
          <span className="text-white font-semibold text-4xl tracking-wider">
            SSB.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
