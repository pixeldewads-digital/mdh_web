
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { Button } from '../components/ui/button';

import { CheckCircle } from 'lucide-react'; 

const ThankYou = () => { 

 return ( 

   <> 

     <Helmet> 

       <title>Thank You - Maharani Digital Hub</title> 

       <meta name="description" content="Thank you for your purchase" /> 

     </Helmet> 

     <section className="py-24 bg-white min-h-[70vh] flex items-center 

justify-center"> 

       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 

         <motion.div 

           initial={{ opacity: 0, scale: 0.9 }} 

 
 
 
 

           animate={{ opacity: 1, scale: 1 }} 

           transition={{ duration: 0.6 }} 

         > 

           <CheckCircle className="w-20 h-20 text-[#CBB279] mx-auto mb-6" /> 

           <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-6"> 

             Thank You for Your Purchase! 

           </h1> 

           <p className="text-xl text-[#3B3A39]/70 mb-8"> 

             Your order has been confirmed. You'll receive an email with 

your digital products shortly. 

           </p> 

           <div className="flex flex-col sm:flex-row gap-4 justify-center"> 

             <Link to="/shop"> 

               <Button className="bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white px-8 py-6 rounded-2xl"> 

                 Continue Shopping 

               </Button> 

             </Link> 

             <Link to="/"> 

               <Button variant="outline" className="border-[#CBB279] 

text-[#3B3A39] hover:bg-[#CBB279]/10 px-8 py-6 rounded-2xl"> 

                 Back to Home 

               </Button> 

             </Link> 

           </div> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default ThankYou;
