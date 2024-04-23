import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Layout from "./Layout.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import SingleProject from "./components/SingleProject.jsx";
const locomotiveScroll = new LocomotiveScroll();
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='' element={<Layout/>}></Route>
          <Route path="projects" element={<h2>allprojectsection</h2>}></Route>
          <Route path="project/:projectId" element={<SingleProject/>}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
