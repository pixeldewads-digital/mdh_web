
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'; 

import { Button } from '../components/ui/button';

import NewsletterSignup from '../components/NewsLetterSignUp';

const Home = () => {
  const offerings = [
    {
      title: 'Digital Products',
      description: 'Thoughtfully designed planners, templates, and tools to bring calm structure to your workflow.',
      icon: Sparkles,
    },
    {
      title: 'Automation Systems',
      description: 'Custom n8n workflows that eliminate repetitive tasks and create seamless digital harmony.',
      icon: Zap,
    },
    {
      title: 'Client Solutions',
      description: 'Tailored digital strategies and systems designed to elevate your business operations.',
      icon: Target,
    },
  ];

  const features = [
    { title: 'Simplify', description: 'Strip away complexity and focus on what truly matters' },
    { title: 'Systemize', description: 'Build structured workflows that work effortlessly' },
    { title: 'Perform', description: 'Execute with clarity and consistent excellence' },
    { title: 'Thrive', description: 'Achieve sustainable growth through digital harmony' },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      text: 'MDH transformed our chaotic workflow into a calm, productive system. The automation alone saved us 15 hours per week.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Entrepreneur',
      text: 'The digital planner is a game-changer. It brings structure without feeling restrictive—exactly what I needed.',
    },
    {
      name: 'Amelia Foster',
      role: 'Consultant',
      text: 'Working with Ika was like finding a digital sanctuary. Her approach to automation is both elegant and effective.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Maharani Digital Hub - Elevating Digital Harmony</title>
        <meta name="description" content="Transform your digital workflow with calm productivity, premium clarity, and structured harmony. Digital products, automation systems, and client solutions." />

     </Helmet> 

     <section className="relative min-h-[90vh] flex items-center 

justify-center overflow-hidden"> 

       <div className="absolute inset-0 bg-gradient-to-br from-[#F6F4F0] 

via-[#CBB279]/10 to-[#F6F4F0]" /> 

 
 
 

       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 

text-center"> 

         <motion.div 

           initial={{ opacity: 0, y: 30 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

         > 

           <h1 className="heading-font text-5xl md:text-7xl font-bold 

text-[#3B3A39] mb-6"> 

             Elevating Digital Harmony 

           </h1> 

           <p className="text-xl md:text-2xl text-[#3B3A39]/70 mb-12 

max-w-3xl mx-auto"> 

             Where calm productivity meets premium clarity. Transform your 

digital workflow into a sanctuary of structured excellence. 

           </p> 

           <div className="flex flex-col sm:flex-row gap-4 justify-center"> 

             <Link to="/shop"> 

               <Button className="bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white px-8 py-6 text-lg rounded-2xl"> 

                 Explore Products 

                 <ArrowRight className="ml-2 w-5 h-5" /> 

               </Button> 

             </Link> 

             <Link to="/about"> 

               <Button variant="outline" className="border-[#CBB279] 

text-[#3B3A39] hover:bg-[#CBB279]/10 px-8 py-6 text-lg rounded-2xl"> 

                 Our Story 

               </Button> 

             </Link> 

           </div> 

         </motion.div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

 

           whileInView={{ opacity: 1, y: 0 }} 

           viewport={{ once: true }} 

           transition={{ duration: 0.6 }} 

           className="text-center mb-16" 

         > 

           <h2 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-4"> 

             About MDH 

           </h2> 

           <p className="text-lg text-[#3B3A39]/70 max-w-2xl mx-auto"> 

             Founded by Ika Maharani Ratri, Maharani Digital Hub is 

dedicated to creating digital experiences that blend calm productivity with 

systematic excellence. 

           </p> 

         </motion.div> 

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 

           {offerings.map((offering, index) => ( 

             <motion.div 

               key={offering.title} 

               initial={{ opacity: 0, y: 20 }} 

               whileInView={{ opacity: 1, y: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

               className="bg-[#F6F4F0] p-8 rounded-2xl shadow-sm 

hover:shadow-md transition-shadow" 

             > 

               <offering.icon className="w-12 h-12 text-[#CBB279] mb-4" /> 

               <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-3"> 

                 {offering.title} 

               </h3> 

               <p className="text-[#3B3A39]/70"> 

                 {offering.description} 

               </p> 

             </motion.div> 

           ))} 

         </div> 

       </div> 

 

     </section> 

     <section className="py-24 bg-[#F6F4F0]"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           whileInView={{ opacity: 1, y: 0 }} 

           viewport={{ once: true }} 

           transition={{ duration: 0.6 }} 

           className="text-center mb-16" 

         > 

           <h2 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-4"> 

             Our Philosophy 

           </h2> 

           <p className="text-lg text-[#3B3A39]/70 max-w-2xl mx-auto"> 

             Four pillars that guide everything we create 

           </p> 

         </motion.div> 

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 

gap-6"> 

           {features.map((feature, index) => ( 

             <motion.div 

               key={feature.title} 

               initial={{ opacity: 0, y: 20 }} 

               whileInView={{ opacity: 1, y: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

               className="bg-white p-6 rounded-2xl text-center" 

             > 

               <h3 className="heading-font text-2xl font-semibold 

text-[#CBB279] mb-2"> 

                 {feature.title} 

               </h3> 

               <p className="text-sm text-[#3B3A39]/70"> 

                 {feature.description} 

               </p> 

             </motion.div> 

 
 

           ))} 

         </div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           whileInView={{ opacity: 1, y: 0 }} 

           viewport={{ once: true }} 

           transition={{ duration: 0.6 }} 

           className="text-center mb-16" 

         > 

           <h2 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-4"> 

             What Our Clients Say 

           </h2> 

         </motion.div> 

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 

           {testimonials.map((testimonial, index) => ( 

             <motion.div 

               key={testimonial.name} 

               initial={{ opacity: 0, y: 20 }} 

               whileInView={{ opacity: 1, y: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

               className="bg-[#F6F4F0] p-8 rounded-2xl" 

             > 

               <p className="text-[#3B3A39]/80 mb-6 

italic">"{testimonial.text}"</p> 

               <div> 

                 <p className="font-medium 

text-[#3B3A39]">{testimonial.name}</p> 

                 <p className="text-sm 

text-[#3B3A39]/60">{testimonial.role}</p> 

               </div> 

             </motion.div> 

 
 

           ))} 

         </div> 

       </div> 

     </section> 

     <NewsletterSignup /> 

   </> 

 ); 

}; 

export default Home;
