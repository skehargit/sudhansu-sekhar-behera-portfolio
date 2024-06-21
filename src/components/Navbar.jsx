import React, { useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
function Navbar({location}) {
  const menu = useRef()
  function hide(){
    let menuClasses = menu.current.className.split(' ');
    if(menu.current.className.split(' ')[menuClasses.length-1]!="hidden"){
      menuClasses.push("hidden")
    }else{
      menuClasses.pop();
    }
    menuClasses =menuClasses.join(" ")
    menu.current.className = menuClasses;
  }
  return (
    <div className="w-full h-fit box-border absolute  z-[999]  px-14 bg-[#e6e6e1] ">
          <div className="border-b border-[#3f3c38] py-2 flex items-center justify-between">
            <div className="logo flex items-end gap-2">
              <Link to={"/"}><span className="text-[#3f3c38] font-semibold text-2xl tracking-wider">
                SSB.
              </span></Link>
              <span className="text-[#3f3c38] text-sm">{location.pathname}</span>
            </div>
            <div className=""  onClick={hide}>
              <div className="flex text-2xl cursor-pointer">
              <IoMenu />
              </div>
              <div ref={menu} className="flex gap-1 flex-col absolute items-center pt-3 hidden">

                <Link to={'/'} className="capitalize font-semibold text-sm border border-zinc-900 w-full flex justify-center items-center px-2 py-1 bg-[#e6e6e1]">home</Link>
                {/* <div className="capitalize font-semibold text-sm border border-zinc-900 w-full flex justify-center items-center px-2 py-1 bg-[#e6e6e1]">about</div> */}
                <Link to={"/projects"} className="capitalize font-semibold text-sm border border-zinc-900 w-full flex justify-center items-center px-2 py-1 bg-[#e6e6e1]">projects</Link>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
  );
}
export default Navbar;