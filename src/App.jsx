
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './Layout'
import Hero from './components/Hero'
import GrainyBackground from './components/GrainyBackground';
function App() {
  // useLocation
  const location=useLocation();
console.log(location)
  return (
    <div className='relative'>
    <Navbar location={location}/>
    <GrainyBackground/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
