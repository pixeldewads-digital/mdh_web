
import React, { useState } from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { useNavigate } from 'react-router-dom'; 

import { Button } from '@/components/ui/button'; 

import { useCart } from '@/hooks/useCart'; 

import { useToast } from '@/components/ui/use-toast'; 

const Checkout = () => { 

 const navigate = useNavigate(); 

 const { cart, getTotal, clearCart } = useCart(); 

 const { toast } = useToast(); 

 const [formData, setFormData] = useState({ 

   name: '', 

   email: '', 

 
 
 
 

   address: '', 

   city: '', 

   country: '', 

   zip: '' 

 }); 

 const handleSubmit = (e) => { 

   e.preventDefault(); 

   const order = { 

     ...formData, 

     items: cart, 

     total: getTotal(), 

     timestamp: new Date().toISOString(), 

     orderId: `MDH-${Date.now()}` 

   }; 

   const orders = JSON.parse(localStorage.getItem('mdh_orders') || '[]'); 

   orders.push(order); 

   localStorage.setItem('mdh_orders', JSON.stringify(orders)); 

   clearCart(); 

   navigate('/thank-you'); 

 }; 

 if (cart.length === 0) { 

   navigate('/shop'); 

   return null; 

 } 

 return ( 

   <> 

     <Helmet> 

       <title>Checkout - Maharani Digital Hub</title> 

       <meta name="description" content="Complete your purchase" /> 

     </Helmet> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

 
 
 
 
 
 
 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

         > 

           <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-12"> 

             Checkout 

           </h1> 

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> 

             <div className="lg:col-span-2"> 

               <form onSubmit={handleSubmit} className="space-y-6"> 

                 <div className="bg-[#F6F4F0] rounded-2xl p-8"> 

                   <h2 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-6"> 

                     Billing Information 

                   </h2> 

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 

                     <div className="md:col-span-2"> 

                       <label className="block text-sm font-medium 

text-[#3B3A39] mb-2"> 

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

                     <div className="md:col-span-2"> 

                       <label className="block text-sm font-medium 

text-[#3B3A39] mb-2"> 

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

                     <div className="md:col-span-2"> 

                       <label className="block text-sm font-medium 

text-[#3B3A39] mb-2"> 

                         Address 

                       </label> 

                       <input 

                         type="text" 

                         required 

                         value={formData.address} 

                         onChange={(e) => setFormData({ ...formData, 

address: e.target.value })} 

                         className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-white" 

                       /> 

                     </div> 

                     <div> 

                       <label className="block text-sm font-medium 

text-[#3B3A39] mb-2"> 

                         City 

                       </label> 

                       <input 

                         type="text" 

                         required 

                         value={formData.city} 

                         onChange={(e) => setFormData({ ...formData, city: 

e.target.value })} 


                         className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-white" 

                       /> 

                     </div> 

                     <div> 

                       <label className="block text-sm font-medium 

text-[#3B3A39] mb-2"> 

                         ZIP Code 

                       </label> 

                       <input 

                         type="text" 

                         required 

                         value={formData.zip} 

                         onChange={(e) => setFormData({ ...formData, zip: 

e.target.value })} 

                         className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-white" 

                       /> 

                     </div> 

                     <div className="md:col-span-2"> 

                       <label className="block text-sm font-medium 

text-[#3B3A39] mb-2"> 

                         Country 

                       </label> 

                       <input 

                         type="text" 

                         required 

                         value={formData.country} 

                         onChange={(e) => setFormData({ ...formData, 

country: e.target.value })} 

                         className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-white" 

                       /> 

                     </div> 

                   </div> 

                 </div> 


                 <Button 

                   type="submit" 

                   className="w-full bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white py-6 rounded-2xl" 

                 > 

                   Complete Purchase 

                 </Button> 

               </form> 

             </div> 

             <div className="lg:col-span-1"> 

               <div className="bg-[#F6F4F0] rounded-2xl p-8 sticky top-24"> 

                 <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-6"> 

                   Order Summary 

                 </h3> 

                 <div className="space-y-4 mb-6"> 

                   {cart.map((item) => ( 

                     <div key={item.id} className="flex justify-between 

text-sm"> 

                       <span className="text-[#3B3A39]/70"> 

                         {item.name} x {item.quantity} 

                       </span> 

                       <span className="font-medium"> 

                         ${(item.price * item.quantity).toFixed(2)} 

                       </span> 

                     </div> 

                   ))} 

                   <div className="border-t border-[#CBB279]/20 pt-4"> 

                     <div className="flex justify-between"> 

                       <span className="font-semibold 

text-[#3B3A39]">Total</span> 

                       <span className="font-bold text-[#CBB279] text-xl"> 

                         ${getTotal().toFixed(2)} 

                       </span> 

                     </div> 

                   </div> 

                 </div> 

 
 

               </div> 

             </div> 

           </div> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default Checkout;
