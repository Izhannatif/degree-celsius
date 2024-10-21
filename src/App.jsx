import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About';
import CharacterPage from './pages/Character';
import ChapterPage from './pages/Chapters';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import Comics from './pages/Comics';
import Wiki from './pages/Wiki';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='/wiki' element={<Wiki />} />
          <Route path='/character/:characterId' element={<CharacterPage />} />
          <Route path='/chapter/:chapterId' element={<ChapterPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>

  )
}
export default App
