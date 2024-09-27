import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  )
}

export default App
