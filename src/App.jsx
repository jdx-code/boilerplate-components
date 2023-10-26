import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';

initFontAwesome();

function App() {  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/about" element={<About />} /> 
      </Routes> 
    </>
  )

}

export default App
