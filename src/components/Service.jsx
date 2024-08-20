import React from 'react'
import {Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants';


const Service = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg"> What can We Do Together </h2>
          <p className="md:w-1/2 mx-auto">Whether it's building strong connections, tackling challenges, or achieving shared goals, there’s so much we can accomplish together. Let’s explore opportunities for growth, support, and success by working hand in hand. Together, we can create meaningful impact and bring our best ideas to life. </p>
        </motion.div>
        {/* service category */}
         <div className="py-12 md:w-4/5 mx-auto">
         <Tabs>
          <motion.TabList 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
             <Tab> Couple Counseling</Tab>
             <Tab> Parenting Skills</Tab>
             <Tab> Freeling Stuck</Tab>
             <Tab> Self-Confidence</Tab>
          </motion.TabList>

         <TabPanel >
           <motion.div
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.7 }}
             className="flex flex-wrap ">
              <div className="md: w-1/2 bg-white rounded-lg mt-10 p-8  font-semibold">
              <h3 className="text-3xl font-semibold text-primary mb-4"> 
                Couple Counsling
              </h3>
               <p className="mb-8"> Couples counseling is a type of therapy that helps partners work through relationship issues, improve communication, and strengthen their bond. Whether facing conflicts, navigating major life changes, or seeking to enhance their connection, couples counseling provides a safe space to explore feelings and develop healthier patterns.</p>
               <h4 className="text-2xl font-medium text-black pb-1"> Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                   <li> Understanding Relationship Dynamics</li>
                   <li> Power Balance </li>
                   <li> Shared Values and Goals</li>
                   <li> Conflict Triggers and Stressors</li>
                </ul>
              </div>
              <div className="md:w-1/2  mt-10 " >
               <img  className="w-full h-auto rounded-2xl object-cover" src="https://media.istockphoto.com/id/1424397322/photo/senior-couple-visiting-doctor.jpg?s=612x612&w=0&k=20&c=VjM8D8RTRZIbaXgyB8iu69oo86ulyz-FS3-paOenJkI=" alt="" />
              </div>
           </motion.div>
        </TabPanel>
        <TabPanel >
           <motion.div 
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.7 }}
           className="flex flex-wrap ">
              <div className="md: w-1/2 bg-white rounded-lg p-8 mt-10  font-semibold">
              <h3 className="text-3xl font-semibold text-primary mb-4"> 
                  Parenting Skills
              </h3>
               <p className="mb-8"> Positive discipline focuses on setting clear boundaries and using constructive consequences to guide behavior. Instead of punishment, it emphasizes teaching lessons through natural consequences, rewards for good behavior, and consistent rule enforcement.</p>
               <h4 className="text-2xl font-medium text-black pb-1"> Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                   <li> Understanding Relationship Dynamics</li>
                   <li> Power Balance </li>
                   <li> Shared Values and Goals</li>
                   <li> Conflict Triggers and Stressors</li>
                </ul>
              </div>
              <div className="md:w-1/2  mt-10 " >
               <img  className="w-full h-auto rounded-2xl object-cover" src="https://media.istockphoto.com/id/1492726899/photo/a-pretty-overweight-on-a-nutritionist-consultation-talking-about-a-diet-plan.jpg?s=612x612&w=0&k=20&c=bz9Lwj8RgeFwtY3b6Eu3bSGpUP8te1KWyIL6i4LxTUo=" alt="" />
              </div>
           </motion.div>
        </TabPanel>
        <TabPanel >
           <motion.div 
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.7 }}
           className="flex flex-wrap ">
              <div className="md: w-1/2 bg-white rounded-lg p-8 mt-10  font-semibold">
              <h3 className="text-3xl font-semibold text-primary mb-4"> 
                   Freeling Stuck
              </h3>
               <p className="mb-8"> It sounds like you might be looking for a description for your project or portfolio. Can you share more details about what you need the description for? For example, is it for a specific service, your professional bio, or something else.</p>
               <h4 className="text-2xl font-medium text-black pb-1"> Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                   <li> Optimized Performance</li>
                   <li> Brainstorm Freely </li>
                   <li> Look for Inspiration</li>
                   <li>Talk It Out</li>
                </ul>
              </div>
              <div className="md:w-1/2  mt-10 " >
               <img  className="w-full h-auto rounded-2xl object-cover" src="https://image.cnbcfm.com/api/v1/image/107208367-1678804851191-gettyimages-625738384-000110245899_Unapproved.jpeg?v=1678889251&w=929&h=523&vtcrop=y" alt="" />
              </div>
           </motion.div>
        </TabPanel>
        <TabPanel >
           <motion.div 
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.7 }}
           className="flex flex-wrap ">
              <div className="md: w-1/2 bg-white rounded-lg p-8 mt-10  font-semibold">
              <h3 className="text-3xl font-semibold text-primary mb-4"> 
                   Self-Confidence
              </h3>
               <p className="mb-8"> Self-confidence is the belief in your abilities and judgment, empowering you to take on challenges with courage and resilience. It’s the foundation that fuels ambition, drives success, and enables you to embrace opportunities with an open mind.</p>
               <h4 className="text-2xl font-medium text-black pb-1"> Benefits</h4>
                <ul className="list-disc list-inside space-y-3">
                   <li>Belief in Your Abilities</li>
                   <li> Improved Decision-Making</li>
                   <li> Better Relationships</li>
                   <li> Increased Motivation</li>
                </ul>
              </div>
              <div className="md:w-1/2  mt-10 h-[350px]" >
               <img  className="w-full h-auto rounded-2xl object-cover" src="https://www.shutterstock.com/image-photo/young-asian-woman-talks-herself-260nw-2150002035.jpg" alt="" />
              </div>
           </motion.div>
        </TabPanel>
     </Tabs>
         </div>
      </div>
    </div>
  )
}

export default Service