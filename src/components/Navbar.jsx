import React, { useState, useRef, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.7, 
      ease: "power3.inOut", 
      onComplete: () => {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      },
    });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      gsap.fromTo(
        overlayRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.7, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-[999] px-4 lg:px-14 backdrop-blur">
        <div className="border-b border-[#3f3c38] py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="marcellus-regular text-white font-semibold text-md tracking-wider"
            >
              SEKHAR
            </Link>
          </div>
          <button
            className="text-2xl text-white"
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="marcellus-regular fixed inset-0 bg-[#0c0c0c] text-white w-screen h-screen flex flex-col items-center justify-center z-[998]"
        >
          <nav className="flex flex-col md:flex-row space-y-6 md:space-y-0 text-lg">
            <ul className="mylink font-bold marcellus-regular flex flex-col md:flex-row">
              <li className="pr-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-5xl md:text-2xl hover:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li className="pr-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                <Link
                  to="/projects"
                  onClick={closeMenu}
                  className="text-5xl md:text-2xl hover:text-gray-400"
                >
                  Projects
                </Link>
              </li>
              <li className="pr-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="text-5xl md:text-2xl hover:text-gray-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
