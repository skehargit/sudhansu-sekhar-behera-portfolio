import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";
import Layout from "./Layout.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import SingleProject from "./components/SingleProject.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import MyProjects from "./components/MyProjects.jsx";
const locomotiveScroll = new LocomotiveScroll();
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='' element={<Layout/>}></Route>
          <Route path="projects" element={<MyProjects/>}></Route>
          <Route path="project/:projectId" element={<SingleProject/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);