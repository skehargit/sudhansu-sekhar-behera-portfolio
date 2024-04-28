import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import GrainyBackground from "./components/GrainyBackground";
import Featured from "./components/Featured";
import ElasticLine from "./components/smallComponents/ElasticLine";

function Layout() {
  return (
    <>
      <Hero />
      
      <Featured />
      <ElasticLine/>
      {/* <About /> */}
      {/* <FeaturedProjects /> */}
      
    </>
  );
}

export default Layout;
