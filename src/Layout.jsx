import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
    </>
  );
}

export default Layout;
