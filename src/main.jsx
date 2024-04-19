import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import Layout from './Layout.jsx'
import Footer from './components/Footer.jsx'
const locomotiveScroll = new LocomotiveScroll();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Layout/>
    <Footer/>
  </React.StrictMode>,
)
