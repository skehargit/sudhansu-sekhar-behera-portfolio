import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";
import Layout from "./Layout.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import SingleProject from "./components/SingleProject.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
const locomotiveScroll = new LocomotiveScroll();
import {Sugar} from 'react-preloaders';
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='' element={<Layout/>}></Route>
          <Route path="projects" element={<h2>allprojectsection</h2>}></Route>
          <Route path="project/:projectId" element={<SingleProject/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Sugar/>
  </React.StrictMode>
);
