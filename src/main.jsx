import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";
// import Layout from "./Layout.jsx";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import SingleProject from "./pages/singleProject/SingleProject.jsx";
import MyProjects from "./pages/projects/MyProjects.jsx";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import Layout from "./pages/Home/Layout.jsx";
import StoreContextProvider from "./context/StoreContext.jsx";
import About from "./pages/About/About.jsx";
const locomotiveScroll = new LocomotiveScroll();
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='' element={<Layout/>}></Route>
            <Route path="projects" element={<MyProjects/>}></Route>
            <Route path="project/:projectId" element={<SingleProject/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Route>
        </Routes>
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);