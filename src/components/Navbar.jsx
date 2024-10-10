import React, { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "./smallComponents/Menu";

function Navbar({ location }) {
  const menu = useRef();
  const [isMenuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible((prev) => !prev);
  }

  return (
    <div className="w-full h-fit box-border absolute z-[999] px-14 bg-[#e6e6e1]">
      <div className="border-b border-[#3f3c38] py-2 flex items-center justify-between">
        <div className="logo flex items-end gap-2">
          <Link to={"/"}>
            <span className="text-[#3f3c38] font-semibold text-2xl tracking-wider">
              SSB.
            </span>
          </Link>
          <span className="text-[#3f3c38] text-sm">{location.pathname}</span>
        </div>
        <div className="" onClick={toggleMenu}>
          <div className="flex text-2xl cursor-pointer relative">
            <Menu />
          </div>
          <div
            ref={menu}
            className={`${
              isMenuVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            } transform transition-all duration-300 ease-in-out flex flex-col absolute items-center pt-1 gap-1 `}
            style={{ top: "100%", right: "0" }}
          >
            <Link
              to={"/"}
              className="capitalize shadow-md px-10 font-semibold text-sm border border-zinc-900 w-full flex justify-center items-center py-2 bg-[#e6e6e1]"
            >
              home
            </Link>
            <Link
              to={"/projects"}
              className="capitalize shadow-md font-semibold text-sm border border-zinc-900 w-full flex justify-center items-center px-10 py-2 bg-[#e6e6e1]"
            >
              projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
