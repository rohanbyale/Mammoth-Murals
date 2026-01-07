import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Showcase from './components/Showcase'
import OurWork from './components/OurWork'
import Projects from './components/Projects'
import Services from './components/Services'
import Testomonials from './components/Testomonials'
import Test from './components/Test'
import Quote from './components/Quote'
import Aboutus from './components/Aboutus'
import Approach from './components/Approach'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Work from './components/Work'
import About from './components/About'
import MainService from './components/MainService'


const Home = () => (
  <>
    <Herosection />
    <Showcase />
    <OurWork />
    <Projects />
    <Services />
    <Testomonials />
    <Test />
    <Aboutus />
    <Quote />
    <Approach />
  </>
)

const App = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true,
    })

    return () => scroll.destroy()
  }, [])

  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
     <Route path="/MainService" element={<MainService />} />

        <Route path="/about" element={<About />} />
      
      </Routes>

      <Nav />
      <Footer />
      
    </>
  )
}

export default App
