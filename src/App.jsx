
import { Outlet, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './Layout'
import Hero from './components/Hero'
import GrainyBackground from './components/GrainyBackground';
function App() {
  return (
    <div className='relative'>
    {/* <Navbar/> */}
    <GrainyBackground/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
