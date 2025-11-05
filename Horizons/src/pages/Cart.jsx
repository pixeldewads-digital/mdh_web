
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link, useNavigate } from 'react-router-dom'; 

import { Button } from '@/components/ui/button'; 

import { useCart } from '@/hooks/useCart'; 

import { Trash2, Plus, Minus } from 'lucide-react'; 

const Cart = () => { 

 const navigate = useNavigate(); 

 const { cart, removeFromCart, updateQuantity, getTotal } = useCart(); 

 if (cart.length === 0) { 

   return ( 

     <> 

       <Helmet> 

         <title>Cart - Maharani Digital Hub</title> 

 
 
 
 
 

         <meta name="description" content="Your shopping cart" /> 

       </Helmet> 

       <section className="py-24 bg-white min-h-[60vh] flex items-center 

justify-center"> 

         <div className="text-center"> 

           <h2 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-4"> 

             Your cart is empty 

           </h2> 

           <Link to="/shop"> 

             <Button className="bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white rounded-2xl"> 

               Continue Shopping 

             </Button> 

           </Link> 

         </div> 

       </section> 

     </> 

   ); 

 } 

 return ( 

   <> 

     <Helmet> 

       <title>Cart - Maharani Digital Hub</title> 

       <meta name="description" content="Review your cart and proceed to 

checkout" /> 

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

             Shopping Cart 

 
 

           </h1> 

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> 

             <div className="lg:col-span-2 space-y-4"> 

               {cart.map((item) => ( 

                 <div 

                   key={item.id} 

                   className="bg-[#F6F4F0] rounded-2xl p-6 flex items-center 

space-x-6" 

                 > 

                   <img 

                     src={item.image} 

                     alt={item.name} 

                     className="w-24 h-24 object-cover rounded-xl" 

                   /> 

                   <div className="flex-grow"> 

                     <h3 className="heading-font text-xl font-semibold 

text-[#3B3A39] mb-2"> 

                       {item.name} 

                     </h3> 

                     <p className="text-[#CBB279] 

font-bold">${item.price}</p> 

                   </div> 

                   <div className="flex items-center space-x-3"> 

                     <button 

                       onClick={() => updateQuantity(item.id, item.quantity 

- 1)} 

                       className="w-8 h-8 rounded-full bg-white flex 

items-center justify-center hover:bg-[#CBB279]/10 transition-colors" 

                     > 

                       <Minus className="w-4 h-4 text-[#3B3A39]" /> 

                     </button> 

                     <span className="w-8 text-center 

font-medium">{item.quantity}</span> 

                     <button 

                       onClick={() => updateQuantity(item.id, item.quantity 

+ 1)} 

                       className="w-8 h-8 rounded-full bg-white flex 

items-center justify-center hover:bg-[#CBB279]/10 transition-colors" 

 

                     > 

                       <Plus className="w-4 h-4 text-[#3B3A39]" /> 

                     </button> 

                   </div> 

                   <button 

                     onClick={() => removeFromCart(item.id)} 

                     className="text-red-500 hover:text-red-600 

transition-colors" 

                   > 

                     <Trash2 className="w-5 h-5" /> 

                   </button> 

                 </div> 

               ))} 

             </div> 

             <div className="lg:col-span-1"> 

               <div className="bg-[#F6F4F0] rounded-2xl p-8 sticky top-24"> 

                 <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-6"> 

                   Order Summary 

                 </h3> 

                 <div className="space-y-4 mb-6"> 

                   <div className="flex justify-between"> 

                     <span className="text-[#3B3A39]/70">Subtotal</span> 

                     <span 

className="font-medium">${getTotal().toFixed(2)}</span> 

                   </div> 

                   <div className="flex justify-between"> 

                     <span className="text-[#3B3A39]/70">Tax</span> 

                     <span className="font-medium">$0.00</span> 

                   </div> 

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

                 <Button 

                   onClick={() => navigate('/checkout')} 

                   className="w-full bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white py-6 rounded-2xl" 

                 > 

                   Proceed to Checkout 

                 </Button> 

               </div> 

             </div> 

           </div> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default Cart;
