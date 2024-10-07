import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/layout/Layout";
import Hero from "./pages/layout/Hero";
import GrainyBackground from "./components/GrainyBackground";
import { useState } from "react";
function App() {
  // useLocation
  const location = useLocation();
  // console.log(location)
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById("preloader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 3500);
  }
  return (
    !loading && (
      <div className="relative">
        <Navbar location={location} />
        <GrainyBackground />
        <Outlet />
        <Footer />
      </div>
    )
  );
}

export default App;
