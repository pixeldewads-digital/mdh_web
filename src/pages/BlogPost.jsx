
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { useParams, Link } from 'react-router-dom'; 

import { ArrowLeft } from 'lucide-react'; 

 
 

import { useBlogPosts } from '../hooks/useBlogPost';

const BlogPost = () => { 

 const { id } = useParams(); 

 const { posts } = useBlogPosts(); 

 const post = posts.find(p => p.id === id); 

 if (!post) { 

   return <div>Post not found</div>; 

 } 

 return ( 

   <> 

     <Helmet> 

       <title>{post.title} - Maharani Digital Hub</title> 

       <meta name="description" content={post.excerpt} /> 

     </Helmet> 

     <section className="py-24 bg-white"> 

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <Link to="/blog" className="inline-flex items-center text-[#CBB279] 

hover:underline mb-8"> 

           <ArrowLeft className="w-4 h-4 mr-2" /> 

           Back to Blog 

         </Link> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

         > 

           <span className="text-sm text-[#CBB279] 

font-medium">{post.category}</span> 

           <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mt-2 mb-4"> 

             {post.title} 

           </h1> 

           <p className="text-[#3B3A39]/60 mb-8">{post.date}</p> 

 
 
 
 
 
 

           <img 

             src={post.image} 

             alt={post.title} 

             className="w-full rounded-2xl mb-8" 

           /> 

           <div className="prose prose-lg max-w-none"> 

             <p className="text-lg text-[#3B3A39]/80 leading-relaxed"> 

               {post.content} 

             </p> 

           </div> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default BlogPost;
