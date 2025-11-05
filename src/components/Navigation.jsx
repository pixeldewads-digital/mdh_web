
import React, { useState } from 'react'; 

import { Link, useLocation } from 'react-router-dom'; 

import { motion, AnimatePresence } from 'framer-motion'; 

import { Menu, X, ShoppingCart } from 'lucide-react'; 

import { useCart } from '@/hooks/useCart'; 

const Navigation = () => { 

 const [isOpen, setIsOpen] = useState(false); 

 const location = useLocation(); 

 const { cart } = useCart(); 

 const navLinks = [ 

   { name: 'Home', path: '/' }, 

   { name: 'About', path: '/about' }, 

   { name: 'Shop', path: '/shop' }, 

   { name: 'Academy', path: '/academy' }, 

   { name: 'Blog', path: '/blog' }, 

   { name: 'Contact', path: '/contact' }, 

   { name: 'Client Portal', path: '/client-portal' }, 

   { name: 'Agency Hub', path: '/agency-hub' }, 

 ]; 

 const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0); 

 // Hide navigation on admin routes 

 if (location.pathname.startsWith('/admin')) { 

       
 
 
 
 
 
 

   return null; 

 } 

 return ( 

   <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b 

border-[#CBB279]/20"> 

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

       <div className="flex justify-between items-center h-20"> 

         <Link to="/" className="flex items-center space-x-3"> 

           <motion.div 

             whileHover={{ scale: 1.05 }} 

             className="heading-font text-2xl font-bold text-[#3B3A39]" 

           > 

             MDH 

           </motion.div> 

         </Link> 

         <div className="hidden lg:flex items-center space-x-8"> 

           {navLinks.map((link) => ( 

             <Link 

               key={link.path} 

               to={link.path} 

               className={`text-sm transition-colors duration-300 ${ 

                 location.pathname.startsWith(link.path) && link.path !== 

'/' || location.pathname === link.path 

                   ? 'text-[#CBB279] font-medium' 

                   : 'text-[#3B3A39] hover:text-[#CBB279]' 

               }`} 

             > 

               {link.name} 

             </Link> 

           ))} 

           <Link to="/cart" className="relative"> 

             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 

}}> 

               <ShoppingCart className="w-5 h-5 text-[#3B3A39]" /> 

               {cartItemCount > 0 && ( 

                 <span className="absolute -top-2 -right-2 bg-[#CBB279] 

text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"> 

 
 

                   {cartItemCount} 

                 </span> 

               )} 

             </motion.div> 

           </Link> 

         </div> 

         <div className="lg:hidden flex items-center space-x-4"> 

           <Link to="/cart" className="relative"> 

             <ShoppingCart className="w-5 h-5 text-[#3B3A39]" /> 

             {cartItemCount > 0 && ( 

               <span className="absolute -top-2 -right-2 bg-[#CBB279] 

text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"> 

                 {cartItemCount} 

               </span> 

             )} 

           </Link> 

           <button 

             onClick={() => setIsOpen(!isOpen)} 

             className="text-[#3B3A39] focus:outline-none" 

           > 

             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" 

/>} 

           </button> 

         </div> 

       </div> 

     </div> 

     <AnimatePresence> 

       {isOpen && ( 

         <motion.div 

           initial={{ opacity: 0, height: 0 }} 

           animate={{ opacity: 1, height: 'auto' }} 

           exit={{ opacity: 0, height: 0 }} 

           className="lg:hidden bg-white border-t border-[#CBB279]/20" 

         > 

           <div className="px-4 py-6 space-y-4"> 

             {navLinks.map((link) => ( 

               <Link 

 
 

                 key={link.path} 

                 to={link.path} 

                 onClick={() => setIsOpen(false)} 

                 className={`block text-sm transition-colors duration-300 ${ 

                   location.pathname === link.path 

                     ? 'text-[#CBB279] font-medium' 

                     : 'text-[#3B3A39]' 

                 }`} 

               > 

                 {link.name} 

               </Link> 

             ))} 

           </div> 

         </motion.div> 

       )} 

     </AnimatePresence> 

   </nav> 

 ); 

}; 

export default Navigation;
