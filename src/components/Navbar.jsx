import React from "react";
// import Btn from "./smallComponents/Btn";
// import { Link } from "react-router-dom";
function Navbar({location}) {
  console.log(location.pathname)
  // props.location.pathname
  // var loc=location
  return (
    <div className="w-full h-fit box-border px-14 bg-[#e6e6e1] ">
          <div className="border-b border-[#3f3c38] py-3 flex items-center justify-between">
            <div className="logo flex items-end gap-2">
              <span className="text-[#3f3c38] font-semibold text-4xl tracking-wider">
                SSB.
              </span>
              <span className="text-[#3f3c38]">{location.pathname}</span>
            </div>
          </div>
        </div>
  );
}
export default Navbar;