import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants';



const WorkingStap = () => {
  return (
    <motion.div 
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="relative bg-cover bg-center py-12 bg-working-img">
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>
       <div className="relative container mx-auto px-4 py-20">
         <h2 className="text-4xl font-bold font-secondary mb-4"> How It Work's</h2>
         <p className="text-lg md:w-1/2 w-full mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas id quibusdam rerum facere, veniam delectus. Asperiores, mollitia quaerat dicta soluta temporibus dolor totam quas voluptatem reprehenderit blanditiis est tempora quis. </p>
       </div>
        <div>
          <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
            <div className="relative bg-white text-center rounded-lg p-6 flex-1">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
                 1
              </div>
                <h3 className='text-lg font-medium mt-8'> Fill a Form</h3>
                 <p  className="my-2"> Could you please provide more details about the form you need to fill? I can help you generate code for a form, fill out a form online, or provide guidance on how to handle a specific form-related task. Let me know what you need</p>
            </div>
            <div className="relative bg-white text-center rounded-lg p-6 flex-1">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
                 2
              </div>
                <h3 className='text-lg font-medium mt-8'> Get Matched </h3>
                 <p  className="my-2"> Our intelligent system quickly connects you with the right options tailored to your needs. Whether you're searching for [specific service/product/job], our matching algorithm simplifies the process by recommending the best fit for you.</p>
            </div>
            <div className="relative bg-white text-center rounded-lg p-6 flex-1">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
                 1
              </div>
                <h3 className='text-lg font-medium mt-8'> Schedule </h3>
                 <p  className="my-2">  Keep your day organized with our easy-to-use scheduling tool. Whether it’s managing daily tasks, booking appointments, or setting up reminders, our feature makes it simple to stay on top of your commitments.</p>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default WorkingStap