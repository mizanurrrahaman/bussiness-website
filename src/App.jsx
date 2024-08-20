import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import WorkingStap from './components/WorkingStap'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
 

  return (
    <>
      <h1 className="font-primary overflow-x-hidden">
        <Navbar/>
        <Hero/>
        <Service/>
        <About/>
        <WorkingStap/>
        <Pricing/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </h1>
    </>
  )
}

export default App
