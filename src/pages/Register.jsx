
import React, { useState } from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link, useNavigate } from 'react-router-dom'; 

import { Button } from '../components/ui/button';

import { useToast } from '../components/ui/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Error',
        description: "Passwords don't match",
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Account Created! ✨',
      description: 'Welcome to Maharani Digital Hub.',
    });
    navigate('/login');
  };

  return (
    <>
      <Helmet>
        <title>Register - Maharani Digital Hub</title>
        <meta name="description" content="Create your client account" />
      </Helmet>
      <section className="py-24 bg-white min-h-[80vh] flex items-center justify-center">

       <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

           className="bg-[#F6F4F0] rounded-2xl p-8" 

         > 

           <h1 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-6 text-center"> 

             Create Account 

           </h1> 

           <form onSubmit={handleSubmit} className="space-y-6"> 

             <div> 

               <label className="block text-sm font-medium text-[#3B3A39] 

mb-2"> 

                 Full Name 

               </label> 

               <input 

                 type="text" 

                 required 

                 value={formData.name} 

                 onChange={(e) => setFormData({ ...formData, name: 

e.target.value })} 

                 className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-white" 

               /> 

             </div> 

 
 

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

             <div> 

               <label className="block text-sm font-medium text-[#3B3A39] 

mb-2"> 

                 Confirm Password 

               </label> 

               <input 

                 type="password" 


                 required 

                 value={formData.confirmPassword} 

                 onChange={(e) => setFormData({ ...formData, 

confirmPassword: e.target.value })} 

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

               Create Account 

             </Button> 

           </form> 

           <p className="text-center text-sm text-[#3B3A39]/70 mt-6"> 

             Already have an account?{' '} 

             <Link to="/login" className="text-[#CBB279] hover:underline"> 

               Login here 

             </Link> 

           </p> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default Register;
