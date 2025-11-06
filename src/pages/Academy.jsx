
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { Button } from '../components/ui/button';

import { useCourses } from '../hooks/useCourses';

import { BookOpen } from 'lucide-react';

const Academy = () => {
  const { courses } = useCourses();

  return (
    <>
      <Helmet>
        <title>Academy - Maharani Digital Hub</title>
        <meta name="description" content="Master calm productivity, automation, and digital harmony with our expert-led courses." />
      </Helmet>

      <section className="py-20 bg-gradient-to-br from-[#F6F4F0] to-[#CBB279]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-[#3B3A39] mb-6">
              MDH Academy
            </h1>
            <p className="text-xl text-[#3B3A39]/70 max-w-3xl mx-auto">
              Master new skills with calm clarity. Our courses are designed to empower you, not overwhelm you.

           </p> 

            <div className="mt-8 flex justify-center"> 

               <Link to="/academy/dashboard"> 

 
 
 

                 <Button className="bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white px-8 py-6 text-lg rounded-2xl"> 

                   My Dashboard 

                 </Button> 

               </Link> 

             </div> 

         </motion.div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 

gap-8"> 

           {courses.map((course, index) => ( 

             <motion.div 

               key={course.id} 

               initial={{ opacity: 0, y: 20 }} 

               whileInView={{ opacity: 1, y: 0 }} 

               viewport={{ once: true }} 

               transition={{ duration: 0.6, delay: index * 0.1 }} 

             > 

               <Link to={`/academy/courses/${course.id}`}> 

                 <div className="bg-[#F6F4F0] rounded-2xl overflow-hidden 

hover:shadow-lg transition-shadow group"> 

                   <div className="aspect-video overflow-hidden"> 

                     <img 

                       src={course.image} 

                       alt={course.title} 

                       className="w-full h-full object-cover 

group-hover:scale-105 transition-transform duration-300" 

                     /> 

                   </div> 

                   <div className="p-6"> 

                     <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-2 line-clamp-2"> 

                       {course.title} 

                     </h3> 

                     <p className="text-[#3B3A39]/70 mb-4 line-clamp-3"> 

 

                       {course.description} 

                     </p> 

                      <div className="flex items-center text-sm 

text-[#3B3A39]/60"> 

                       <BookOpen className="w-4 h-4 mr-2"/> 

{course.lessons.length} Lessons 

                     </div> 

                     <div className="flex items-center justify-between 

mt-4"> 

                       <span className="text-sm font-medium text-[#CBB279]"> 

                         By {course.instructor} 

                       </span> 

                       <Button variant="link" className="text-[#CBB279] 

p-0"> 

                         View Course 

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

export default Academy;
