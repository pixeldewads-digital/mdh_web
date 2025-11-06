
import React, { useState } from 'react'; 

import { motion } from 'framer-motion'; 

import { Button } from './ui/button';

import { useToast } from './ui/use-toast';

const NewsletterSignup = () => { 

 const { toast } = useToast(); 

 const [email, setEmail] = useState(''); 

 const handleSubmit = (e) => { 

   e.preventDefault(); 

   const subscribers = JSON.parse(localStorage.getItem('mdh_newsletter') || 

'[]'); 

   subscribers.push({ 

 
 
 
 
   

     email, 

     timestamp: new Date().toISOString() 

   }); 

   localStorage.setItem('mdh_newsletter', JSON.stringify(subscribers)); 

   toast({ 
     title: "Subscribed! ✨", 

     description: "Welcome to our community of calm productivity.", 

   }); 

   setEmail(''); 

 }; 

 return ( 

   <section className="py-24 bg-[#3B3A39] text-white"> 

     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 

       <motion.div 

         initial={{ opacity: 0, y: 20 }} 

         whileInView={{ opacity: 1, y: 0 }} 

         viewport={{ once: true }} 

         transition={{ duration: 0.6 }} 

       > 

         <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6"> 

           Join Our Community 

         </h2> 

         <p className="text-xl text-white/80 mb-8"> 

           Get weekly insights on calm productivity and digital harmony 

         </p> 

         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row 

gap-4 max-w-md mx-auto"> 

           <input 

             type="email" 

             required 

             value={email} 

             onChange={(e) => setEmail(e.target.value)} 

             placeholder="Enter your email" 

             className="flex-1 px-6 py-4 rounded-2xl text-[#3B3A39] 

focus:outline-none focus:ring-2 focus:ring-[#CBB279]" 

           /> 

 
 
 

           <Button 

             type="submit" 

             className="bg-[#CBB279] hover:bg-[#CBB279]/90 text-white px-8 

py-4 rounded-2xl whitespace-nowrap" 

           > 

             Subscribe 

           </Button> 

         </form> 

       </motion.div> 

     </div> 

   </section> 

 ); 

}; 

export default NewsletterSignup;
