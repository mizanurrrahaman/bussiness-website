import React, { useState } from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants';



const About = () => {

   const [isVideoPlaying, setIsVideoPlaying] = useState(false)

   const handleVideoPlay =()=>{
    setIsVideoPlaying(true)
   }

   const handleCloseVideo =()=>{
    setIsVideoPlaying(false)
   }
  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <motion.div 
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-[650px] mb-8 md:mb-0">
             {
              !isVideoPlaying ? (
                <div className="relative">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGIs_42MvKKHs4_uRNfdzInUqGF3ZmTSuBw&s" alt="" className="w-full md:h-[450px] h-auto rounded-lg object-cover" />
                   <button onClick={handleVideoPlay} className="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"> <IoIosPlayCircle className="size-12 text-white" /> </button>
                </div>
              ) : (null)
             }
          </div>
           <div className="md:w1/2 w-full">
               <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug capitalize">Individual consult and therapy </h1>
                <p className="text-lg mb-12 md:pr-8"> 
               Embark on a path towards better mental health and emotional well-being. Whether  you're looking to manage stress, improve your mood, or build resilience, this journey is designed to help you achieve balance and inner peace. Take the first step today and discover practical tips, self-care strategies, and mindfulness practices that can guide you towards a healthier and happier mind.
             </p>
             <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90"> 
               <span className="flex gap-1 items-center">
                 <a href="#contact"> Get Started</a>
                 <IoArrowForwardCircle />
               </span>
             </button>
           </div>
        </div>
        {
          isVideoPlaying && (
          <div className=" fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
           <div className="relative w-full h-full flex items-center justify-center z-50">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/awbVzXKr5co?si=omDz4dwiFzEHadOG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             <button onClick={handleCloseVideo} className="absolute top-4 right-4 text-white text-2xl cursor-pointer"> X </button>
           </div>
          </div>
          )
        }
      </motion.div>
    </div>
  )
}

export default About