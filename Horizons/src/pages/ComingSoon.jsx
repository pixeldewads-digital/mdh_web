
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Sparkles } from 'lucide-react'; 

const ComingSoon = () => { 

 return ( 

   <> 

     <Helmet> 

       <title>Coming Soon - Maharani Digital Hub</title> 

       <meta name="description" content="Exciting new features coming soon" 

/> 

     </Helmet> 

     <section className="py-24 bg-white min-h-[70vh] flex items-center 

justify-center"> 

       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 

         <motion.div 

           initial={{ opacity: 0, scale: 0.9 }} 

           animate={{ opacity: 1, scale: 1 }} 

           transition={{ duration: 0.6 }} 

         > 

           <Sparkles className="w-20 h-20 text-[#CBB279] mx-auto mb-6" /> 

           <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-6"> 

             Coming Soon 

           </h1> 

           <p className="text-xl text-[#3B3A39]/70"> 

             Something beautiful is on the way. Stay tuned for new features 

that will elevate your digital harmony. 

           </p> 

         </motion.div> 

       </div> 

     </section> 

 
 
 
 

   </> 

 ); 

}; 

export default ComingSoon;
