
import React, { useState } from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link, useNavigate } from 'react-router-dom'; 

import { Button } from '../components/ui/button';

import { useToast } from '../components/ui/use-toast';

const Login = () => { 

 const navigate = useNavigate(); 

 const { toast } = useToast(); 

 const [formData, setFormData] = useState({ 

   email: '', 

   password: '' 

 }); 

 const handleSubmit = (e) => { 

   e.preventDefault(); 

   localStorage.setItem('mdh_client_logged_in', 'true'); 

   toast({ 
     title: "Welcome Back! ✨", 

     description: "You've successfully logged in.", 

   }); 

   navigate('/client-portal'); 

 }; 

 
 
 
 
 
 

 return ( 

   <> 

     <Helmet> 

       <title>Login - Maharani Digital Hub</title> 

       <meta name="description" content="Login to your client portal" /> 

     </Helmet> 

     <section className="py-24 bg-white min-h-[80vh] flex items-center 

justify-center"> 

       <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

           className="bg-[#F6F4F0] rounded-2xl p-8" 

         > 

           <h1 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-6 text-center"> 

             Client Login 

           </h1> 

           <form onSubmit={handleSubmit} className="space-y-6"> 

             <div> 

               <label className="block text-sm font-medium text-[#3B3A39] 

mb-2"> 

                 Email 

               </label> 

               <input 

                 type="email" 

                 required 

                 value={formData.email} 

                 onChange={(e) => setFormData({ ...formData, email: 

e.target.value })} 

                 className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-white" 

               /> 

             </div> 

             <div> 

 

               <label className="block text-sm font-medium text-[#3B3A39] 

mb-2"> 

                 Password 

               </label> 

               <input 

                 type="password" 

                 required 

                 value={formData.password} 

                 onChange={(e) => setFormData({ ...formData, password: 

e.target.value })} 

                 className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-white" 

               /> 

             </div> 

             <Button 

               type="submit" 

               className="w-full bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white py-6 rounded-2xl" 

             > 

               Login 

             </Button> 

           </form> 

           <p className="text-center text-sm text-[#3B3A39]/70 mt-6"> 

             Don't have an account?{' '} 

             <Link to="/register" className="text-[#CBB279] 

hover:underline"> 

               Register here 

             </Link> 

           </p> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default Login;
