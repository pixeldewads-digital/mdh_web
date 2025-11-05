
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { Button } from '@/components/ui/button'; 

import { Heart, Lightbulb, Target } from 'lucide-react'; 

const About = () => { 

 const timeline = [ 

   { year: '2020', event: 'Founded MDH with a vision for digital harmony' }, 

   { year: '2021', event: 'Launched first digital planner collection' }, 

   { year: '2022', event: 'Expanded into automation systems and consulting' 

}, 

   { year: '2023', event: 'Served 500+ clients across 20 countries' }, 

   { year: '2024', event: 'Introduced premium client solutions and LMS 

platform' } 

 ]; 

 const values = [ 

   { 

     icon: Heart, 

     title: 'Calm', 

     description: 'We believe productivity should feel peaceful, not 

frantic. Every solution we create prioritizes mental clarity.' 

   }, 

   { 

     icon: Lightbulb, 

     title: 'System', 

     description: 'Structure brings freedom. Our systematic approach ensures 

consistency, reliability, and sustainable growth.' 

   }, 

   { 

     icon: Target, 

     title: 'Harmony', 

 
 

     description: 'Balance is everything. We design digital experiences that 

integrate seamlessly into your life and work.' 

   } 

 ]; 

 return ( 

   <> 

     <Helmet> 

       <title>About - Maharani Digital Hub</title> 

       <meta name="description" content="Learn about Ika Maharani Ratri and 

the philosophy behind Maharani Digital Hub. Calm productivity, systematic 

excellence, and digital harmony." /> 

     </Helmet> 

     <section className="py-20 bg-gradient-to-br from-[#F6F4F0] 

to-[#CBB279]/10"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 30 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

           className="text-center" 

         > 

           <h1 className="heading-font text-5xl md:text-6xl font-bold 

text-[#3B3A39] mb-6"> 

             Our Story 

           </h1> 

           <p className="text-xl text-[#3B3A39]/70 max-w-3xl mx-auto"> 

             Building digital sanctuaries where productivity meets peace 

           </p> 

         </motion.div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 

items-center"> 

           <motion.div 

 
 
 

             initial={{ opacity: 0, x: -30 }} 

             whileInView={{ opacity: 1, x: 0 }} 

             viewport={{ once: true }} 

             transition={{ duration: 0.6 }} 

           > 

             <img alt="Ika Maharani Ratri, founder of Maharani Digital Hub" 

className="rounded-2xl shadow-lg w-full" 

src="https://images.unsplash.com/photo-1694564717876-7436bdf6a236" /> 

           </motion.div> 

           <motion.div 

             initial={{ opacity: 0, x: 30 }} 

             whileInView={{ opacity: 1, x: 0 }} 

             viewport={{ once: true }} 

             transition={{ duration: 0.6 }} 

           > 

             <h2 className="heading-font text-4xl font-bold text-[#3B3A39] 

mb-6"> 

               Meet Ika Maharani Ratri 

             </h2> 

             <div className="space-y-4 text-[#3B3A39]/80"> 

               <p> 

                 After years of navigating the chaos of digital overwhelm, I 

founded Maharani Digital Hub with a simple mission: to create digital 

experiences that feel like a breath of fresh air. 

               </p> 

               <p> 

                 I believe that technology should serve us, not stress us. 

Every product, system, and solution we create is designed to bring calm 

clarity to your workflow—helping you work smarter, not harder. 

               </p> 

               <p> 

                 Through thoughtful design, intelligent automation, and a 

commitment to premium quality, we're building a community of professionals 

who value both productivity and peace of mind. 

               </p> 

             </div> 

           </motion.div> 

         </div> 

 

       </div> 

     </section> 

     <section className="py-24 bg-[#F6F4F0]"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           whileInView={{ opacity: 1, y: 0 }} 

           viewport={{ once: true }} 

           transition={{ duration: 0.6 }} 

           className="text-center mb-16" 

         > 

           <h2 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-4"> 

             Our Core Values 

           </h2> 

           <p className="text-lg text-[#3B3A39]/70"> 

             Three principles that guide everything we do 

           </p> 

         </motion.div> 

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 

           {values.map((value, index) => ( 

             <motion.div 

               key={value.title} 

               initial={{ opacity: 0, y: 20 }} 

               whileInView={{ opacity: 1, y: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

               className="bg-white p-8 rounded-2xl text-center" 

             > 

               <value.icon className="w-12 h-12 text-[#CBB279] mx-auto mb-4" 

/> 

               <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-3"> 

                 {value.title} 

               </h3> 

               <p className="text-[#3B3A39]/70"> 

                 {value.description} 

 
 

               </p> 

             </motion.div> 

           ))} 

         </div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           whileInView={{ opacity: 1, y: 0 }} 

           viewport={{ once: true }} 

           transition={{ duration: 0.6 }} 

           className="text-center mb-16" 

         > 

           <h2 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-4"> 

             Our Journey 

           </h2> 

         </motion.div> 

         <div className="space-y-8"> 

           {timeline.map((item, index) => ( 

             <motion.div 

               key={item.year} 

               initial={{ opacity: 0, x: -30 }} 

               whileInView={{ opacity: 1, x: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

               className="flex items-start space-x-6" 

             > 

               <div className="flex-shrink-0 w-20 h-20 bg-[#CBB279] 

rounded-full flex items-center justify-center"> 

                 <span className="heading-font text-white 

font-bold">{item.year}</span> 

               </div> 

               <div className="flex-grow pt-4"> 

                 <p className="text-lg text-[#3B3A39]">{item.event}</p> 

 
 

               </div> 

             </motion.div> 

           ))} 

         </div> 

       </div> 

     </section> 

     <section className="py-24 bg-[#3B3A39] text-white"> 

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           whileInView={{ opacity: 1, y: 0 }} 

           viewport={{ once: true }} 

           transition={{ duration: 0.6 }} 

         > 

           <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6"> 

             Ready to Experience Digital Harmony? 

           </h2> 

           <p className="text-xl text-white/80 mb-8"> 

             Let's transform your workflow into a sanctuary of calm 

productivity 

           </p> 

           <Link to="/contact"> 

             <Button className="bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white px-8 py-6 text-lg rounded-2xl"> 

               Get in Touch 

             </Button> 

           </Link> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default About;
