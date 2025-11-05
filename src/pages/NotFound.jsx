
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { Button } from '@/components/ui/button'; 

import { Home } from 'lucide-react'; 

const NotFound = () => { 

 return ( 

   <> 

     <Helmet> 

       <title>404 - Back to Harmony</title> 

       <meta name="description" content="Page not found" /> 

     </Helmet> 

     <section className="py-24 bg-white min-h-[70vh] flex items-center 

justify-center"> 

       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 

         <motion.div 

           initial={{ opacity: 0, scale: 0.9 }} 

           animate={{ opacity: 1, scale: 1 }} 

           transition={{ duration: 0.6 }} 

         > 

           <h1 className="heading-font text-8xl font-bold text-[#CBB279] 

mb-4">404</h1> 

           <h2 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-6"> 

             Back to Harmony 

           </h2> 

           <p className="text-xl text-[#3B3A39]/70 mb-8"> 

             This page seems to have wandered off. Let's guide you back to 

calm clarity. 

           </p> 

           <Link to="/"> 

             <Button className="bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white px-8 py-6 rounded-2xl"> 

               <Home className="w-5 h-5 mr-2" /> 

               Return Home 

 
 

             </Button> 

           </Link> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default NotFound;
