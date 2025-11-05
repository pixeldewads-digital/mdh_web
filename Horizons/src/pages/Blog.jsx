
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { useBlogPosts } from '@/hooks/useBlogPosts'; 

const Blog = () => { 

 const { posts } = useBlogPosts(); 

 return ( 

   <> 

     <Helmet> 

       <title>Blog - Maharani Digital Hub</title> 

       <meta name="description" content="Insights on calm productivity, 

automation, and digital balance" /> 

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

             Blog 

           </h1> 

           <p className="text-xl text-[#3B3A39]/70 max-w-3xl mx-auto"> 

             Insights on calm productivity, automation, and digital balance 

           </p> 

         </motion.div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 

gap-8"> 

           {posts.map((post, index) => ( 

             <motion.div 

               key={post.id} 

               initial={{ opacity: 0, y: 20 }} 

               whileInView={{ opacity: 1, y: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

             > 

               <Link to={`/blog/${post.id}`}> 

                 <div className="bg-[#F6F4F0] rounded-2xl overflow-hidden 

hover:shadow-lg transition-shadow group"> 

                   <div className="aspect-video overflow-hidden"> 

                     <img 

                       src={post.image} 

 
 

                       alt={post.title} 

                       className="w-full h-full object-cover 

group-hover:scale-105 transition-transform duration-300" 

                     /> 

                   </div> 

                   <div className="p-6"> 

                     <span className="text-sm text-[#CBB279] font-medium"> 

                       {post.category} 

                     </span> 

                     <h3 className="heading-font text-xl font-semibold 

text-[#3B3A39] mt-2 mb-3"> 

                       {post.title} 

                     </h3> 

                     <p className="text-[#3B3A39]/70 text-sm line-clamp-3"> 

                       {post.excerpt} 

                     </p> 

                     <p className="text-xs text-[#3B3A39]/50 

mt-4">{post.date}</p> 

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

export default Blog;
