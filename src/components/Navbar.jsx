import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen ] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const handleToggle =()=>{
    setIsOpen(!isOpen )
  }

  const handleCloseMenu = ()=>{
    setIsOpen(false)
  }
  const handleScroll =()=>{
    const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if(element){
         const offsetTop = element.offsetTop;
         const height = element.offsetHeight;
         if(scrollPosition >= offsetTop && scrollPosition <offsetTop + height){
           setActiveSection(section)
         }
      }
    })

  }

  useEffect(()=>{
     window.addEventListener('scroll', handleScroll);
     return ()=> window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo =(targetId)=>{
     const targetElement = document.getElementById(targetId)
     if(targetElement){
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
       })
     }
  }

    const navLinks =(
        <ul className="font-medium flex flex-col md:flex-row lg:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0 gap-11">
            <li> 
                <motion.a 
                 whileHover={{scale: 1.1}}
                 whileTap={{scale:0.9}}
                 href="#home"
                 onClick={(e)=> {
                  e.preventDefault();
                   handleCloseMenu();
                   handleScrollTo('home')
                 }}
                className={`text-white ${activeSection === "home" ? "isActive":""}`}>Home</motion.a>
            </li>
            <li> 
                <motion.a href="#services"
                   whileHover={{scale: 1.1}}
                   whileTap={{scale:0.9}}
                   onClick={(e)=> {
                    e.preventDefault();
                     handleCloseMenu();
                     handleScrollTo('services')
                   }}
                className={`text-white ${activeSection === "services" ? "isActive":""}`}>Service</motion.a>
            </li>
            <li> 
                <motion.a href="#about"
                   whileHover={{scale: 1.1}}
                   whileTap={{scale:0.9}}
                   onClick={(e)=> {
                    e.preventDefault();
                     handleCloseMenu();
                     handleScrollTo('about')
                   }}
                className={`text-white ${activeSection === "about" ? "isActive":""}`}>About Us</motion.a>
            </li>
            <li> 
                <motion.a  
                   whileHover={{scale: 1.1}}
                   whileTap={{scale:0.9}}
                   onClick={(e)=> {
                   e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('pricing')
                   }}  href="#pricing" className={`text-white ${activeSection === "pricing" ? "isActive":""}`}>Pricing</motion.a>
            </li>
            <li> 
                <motion.a 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale:0.9}}
                  onClick={(e)=> {
                  e.preventDefault();
                   handleCloseMenu();
                   handleScrollTo('testimonial')
                  }} 
                href="#testimonial" className={`text-white ${activeSection === "testimonial" ? "isActive":""}`}>Testimonial</motion.a>
            </li>
        </ul>
    )

  return (
    <div className="bg-black text-white py-6 px-4 fixed top-0 left-0 right-0 x-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
           <a href="/">
             <img src="https://media.istockphoto.com/id/1420172793/vector/connection-logo-business-global-technology-and-network.jpg?s=612x612&w=0&k=20&c=PSDmuJrOSV9k_GxXtvu8jKHLijvsCT9P9iTGXysPPY4=" alt="" width="120px" height="40px" />
           </a>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <nav>
            {navLinks}
          </nav>
        </div>
         {/* Button */}
         <div className="hidden md:block">
            <a onClick={e => {
              e.preventDefault();
              handleScrollTo('contact')
            }} href='#contact' className="text-white bg-primary hover:bg-primary/90 px-10 py-6 rounded">
               Contact Us
            </a>
         </div>
         {/* Menubutton */}
         <div className="block md:hidden">
            <button onClick={handleToggle} className={`text-white focus:outline-none ${isOpen ? " border border-white" : " "}`}>
               <IoMenu className="size-6 "/>
            </button>
         </div>
      </div>

       {/* mobile nav items */}

       {
         isOpen && (
            <nav className="absolute top-full left-0 w-full bg-black z-20 md:hidden">
                <ul className="flex flex-col p-4 space-y-3">
                   {navLinks.props.children}
                   <li className="py-2">
                      <a href="#contact" className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded" onClick={(e) => {
                          e.preventDefault();
                          handleCloseMenu();
                          handleScrollTo('contact')
                       }}
                        >Contact Us </a>
                   </li>
                </ul>
            </nav>
         )
       }

    </div>
  )
}

export default Navbar