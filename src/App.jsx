import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import FooterUpgrade from './Components/Footer/FooterUpgrade'
import LocomotiveScroll from 'locomotive-scroll';
import Preload from './Components/Preloader/Preload'
import PaperLoader from './Components/Preloader/PaperLoader'
import HeroCarousel from './Components/HeroCarousel'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 overflow-x-hidden'>

      {/* <Preload /> */}
      <PaperLoader />
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <HeroCarousel />
      <Eyes />
      <Featured />
      <Cards />
      {/* <Footer /> */}
      <FooterUpgrade />
    </div>
  )
}

export default App
