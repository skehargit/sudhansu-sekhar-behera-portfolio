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
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setIsMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      },
    });
  };

  // Animate overlay when `isMenuOpen` changes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");

      // GSAP animation to slide in from the top
      gsap.fromTo(
        overlayRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-[999] px-4 lg:px-14 backdrop-blur">
        <div className="border-b border-[#3f3c38] py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="marcellus-regular text-white font-semibold text-md tracking-wider">
              SEKHAR
            </Link>
          </div>
          <button className="text-2xl text-white" onClick={isMenuOpen ? closeMenu : openMenu}>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="marcellus-regular fixed inset-0 bg-[#0c0c0c] text-white w-screen h-screen flex flex-col items-center justify-center z-[998]"
        >
          <nav className="flex flex-col space-y-6 text-lg">
            <Link to="/" onClick={closeMenu} className="text-5xl hover:text-gray-400">
              Home
            </Link>
            <Link to="/projects" onClick={closeMenu} className="text-5xl hover:text-gray-400">
            Projects
            </Link>
            <Link to="/about" onClick={closeMenu} className="text-5xl hover:text-gray-400">
              About
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
