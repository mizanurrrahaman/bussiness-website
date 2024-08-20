import React from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from 'framer-motion';
import { fadeIn } from '/src/utills/animationVariants.js';
//import { fadeIn } from '../utills/animationVariants';


// Define the fadeIn function


const Hero = () => {
  return (
    <section id='home' className="bg-heroBg text-white flex items-center pt-28 md:h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* left side */}
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
      
        className="md:w-1/2">
            <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">Start Your Journey to Mental Wellness </h1>
             <p className="text-lg mb-12 md:pr-8"> 
             Embark on a path towards better mental health and emotional well-being. Whether you're looking to manage stress, improve your mood, or build resilience, this journey is designed to help you achieve balance and inner peace. Take the first step today and discover practical tips, self-care strategies, and mindfulness practices that can guide you towards a healthier and happier mind.
             </p>
             <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90"> 
               <span className="flex gap-1 items-center">
                 <a href="#contact"> Get Started</a>
                 <IoArrowForwardCircle />
               </span>
             </button>
        </motion.div>
        {/* Right side */}
         <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}

         lassName="md:w-1/2 h-full">
           <img src="https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg"  width="650px" height="450px" alt="" className="rounded-[40px] object-cover items-center box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"/>
        </motion.div> 
 
      </div>
    </section>
  )
}

export default Hero