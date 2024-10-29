import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/Home/Layout";
import Hero from "./pages/Home/Hero";
import GrainyBackground from "./components/GrainyBackground";
import { useState } from "react";
function App() {
  return (
    <div className="relative bg-[#0c0c0c]">
      <Navbar l />
      <GrainyBackground />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
