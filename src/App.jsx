import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import CharacterPage from './pages/Character';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/character/:characterId' element={<CharacterPage />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
