import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelopeOpen } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="py-12 bg-gray-100 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div className="space-y-8 mr-14">
          <div className="flex items-center space-x-2">
            <img className="w-[50px] h-[50px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5xGSVUDa-t4t5ZCZSXrMIa4zegCxEIkdvQ_q68Ib3VJSyzwjf-jDAs-oOZ_IAlN0CWo&usqp=CAU" alt="" />
          </div>
           <p className="flex items-center space-x-2"> 
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eligendi, vero ab quisquam unde quis iure dicta nihil architecto asperiores.
           </p>
           <div className="flex space-x-4">
             <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
             <FaFacebookF className="text-xl"/>
             </a>
             <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
             <FaInstagram  className="text-xl"/>
             </a>
             <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
             <FaTwitter  className="text-xl"/>
             </a>
             <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white">
             <FaLinkedinIn className="text-xl"/>
             </a>
           </div>
        </div>
         <div className="space-y-6">
           <h3 className="text-xl font-semibold mb-4"> Quick Links</h3>
            <ul className="space-y-3">
               <li>
                  <a href="#home" className="hover:underline text-gray-700"> Home </a>
               </li> 
               <li>
                  <a href="#about us" className="hover:underline text-gray-700"> About Us </a>
               </li> 
               <li>
                  <a href="#services" className="hover:underline text-gray-700"> Services </a>
               </li> 
               <li>
                  <a href="#contact us" className="hover:underline text-gray-700"> Contact Us </a>
               </li> 
            </ul>
         </div>
         <div className="space-y-6">
           <h3 className="text-xl font-semibold mb-4"> Support</h3>
            <ul className="space-y-3">
               <li>
                  <a href="#" className="hover:underline text-gray-700"> FAQs </a>
               </li> 
               <li>
                  <a href="#" className="hover:underline text-gray-700"> Terms of Services </a>
               </li> 
               <li>
                  <a href="#" className="hover:underline text-gray-700"> Privacy Policy</a>
               </li> 
               <li>
                  <a href="#" className="hover:underline text-gray-700"> Support  Center</a>
               </li> 
            </ul>
         </div>
         <div className="space-y-6">
           <h3 className="text-xl font-semibold mb-4">Contact Info </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                 <FaMapMarker className="text-primary"/>
                 <p className="text-gray-700">123 Street, city, Country  </p>
              </li>
              <li className="flex items-center gap-2">
                 <FaPhone className="text-primary"/>
                 <p className="text-gray-700">123 879 149 </p>
              </li>
              <li className="flex items-center gap-2">
                 <FaRegEnvelopeOpen />
                 <p className="text-gray-700">muradchowdhury@gmail.com</p>
              </li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Footer