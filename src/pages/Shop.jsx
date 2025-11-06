
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { Button } from '../components/ui/button';

 
 

import { useProducts } from '../hooks/useProducts';

const Shop = () => { 

 const { products } = useProducts(); 

 return ( 

   <> 

     <Helmet> 

       <title>Shop - Maharani Digital Hub</title> 

       <meta name="description" content="Explore our collection of premium 

digital products designed to bring calm structure and harmony to your 

workflow." /> 

     </Helmet> 

     <section className="py-20 bg-gradient-to-br from-[#F6F4F0] 

to-[#CBB279]/10"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 30 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

           className="text-center" 

         > 

           <h1 className="heading-font text-5xl md:text-6xl font-bold 

text-[#3B3A39] mb-6"> 

             Digital Products 

           </h1> 

           <p className="text-xl text-[#3B3A39]/70 max-w-3xl mx-auto"> 

             Thoughtfully designed tools to elevate your productivity with 

calm clarity 

           </p> 

         </motion.div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 

gap-8"> 

 
 
 
 

           {products.map((product, index) => ( 

             <motion.div 

               key={product.id} 

               initial={{ opacity: 0, y: 20 }} 

               whileInView={{ opacity: 1, y: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

             > 

               <Link to={`/shop/${product.id}`}> 

                 <div className="bg-[#F6F4F0] rounded-2xl overflow-hidden 

hover:shadow-lg transition-shadow group"> 

                   <div className="aspect-square overflow-hidden"> 

                     <img 

                       src={product.image} 

                       alt={product.name} 

                       className="w-full h-full object-cover 

group-hover:scale-105 transition-transform duration-300" 

                     /> 

                   </div> 

                   <div className="p-6"> 

                     <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-2"> 

                       {product.name} 

                     </h3> 

                     <p className="text-[#3B3A39]/70 mb-4 line-clamp-2"> 

                       {product.description} 

                     </p> 

                     <div className="flex items-center justify-between"> 

                       <span className="text-2xl font-bold text-[#CBB279]"> 

                         ${product.price} 

                       </span> 

                       <Button className="bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white rounded-2xl"> 

                         View Details 

                       </Button> 

                     </div> 

                   </div> 

                 </div> 

               </Link> 


             </motion.div> 

           ))} 

         </div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default Shop;
