
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { useParams, useNavigate } from 'react-router-dom'; 

import { Button } from '../components/ui/button';

import { useProducts } from '../hooks/useProducts';

import { useCart } from '../hooks/useCart';

import { useToast } from '../components/ui/use-toast';

import { Check } from 'lucide-react'; 

const ProductDetail = () => { 

 const { id } = useParams(); 

 const navigate = useNavigate(); 

 const { products } = useProducts(); 

 const { addToCart } = useCart(); 

 const { toast } = useToast(); 

 const product = products.find(p => p.id === id); 

 if (!product) { 

   return <div>Product not found</div>; 

 } 

 const handleAddToCart = () => { 

   addToCart(product); 

   toast({ 

 
 
 
 
 
 

     title: "Added to Cart! ✨", 

     description: `${product.name} has been added to your cart.`, 

   }); 

 }; 

 return ( 

   <> 

     <Helmet> 

       <title>{product.name} - Maharani Digital Hub</title> 

       <meta name="description" content={product.description} /> 

     </Helmet> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> 

           <motion.div 

             initial={{ opacity: 0, x: -30 }} 

             animate={{ opacity: 1, x: 0 }} 

             transition={{ duration: 0.6 }} 

           > 

             <img 

               src={product.image} 

               alt={product.name} 

               className="w-full rounded-2xl shadow-lg" 

             /> 

           </motion.div> 

           <motion.div 

             initial={{ opacity: 0, x: 30 }} 

             animate={{ opacity: 1, x: 0 }} 

             transition={{ duration: 0.6 }} 

             className="space-y-6" 

           > 

             <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39]"> 

               {product.name} 

             </h1> 

             <p className="text-3xl font-bold text-[#CBB279]"> 

               ${product.price} 

 
 
 

             </p> 

             <p className="text-lg text-[#3B3A39]/70"> 

               {product.description} 

             </p> 

             <div className="space-y-3"> 

               <h3 className="font-semibold text-[#3B3A39]">What's 

Included:</h3> 

               {product.features.map((feature, index) => ( 

                 <div key={index} className="flex items-start space-x-3"> 

                   <Check className="w-5 h-5 text-[#CBB279] flex-shrink-0 

mt-0.5" /> 

                   <span className="text-[#3B3A39]/70">{feature}</span> 

                 </div> 

               ))} 

             </div> 

             <div className="flex flex-col sm:flex-row gap-4 pt-6"> 

               <Button 

                 onClick={handleAddToCart} 

                 className="flex-1 bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white py-6 rounded-2xl" 

               > 

                 Add to Cart 

               </Button> 

               <Button 

                 onClick={() => navigate('/shop')} 

                 variant="outline" 

                 className="flex-1 border-[#CBB279] text-[#3B3A39] 

hover:bg-[#CBB279]/10 py-6 rounded-2xl" 

               > 

                 Continue Shopping 

               </Button> 

             </div> 

           </motion.div> 

         </div> 

       </div> 

     </section> 

   </> 

 
 

 ); 

}; 

export default ProductDetail;
