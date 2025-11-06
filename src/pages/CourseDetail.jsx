
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { useParams, Link } from 'react-router-dom'; 

import { Button } from '../components/ui/button';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 

"../components/ui/accordion"

import { Progress } from "../components/ui/progress"

import { useCourses } from '../hooks/useCourses';

import { ArrowLeft, Download, PlayCircle } from 'lucide-react'; 

const CourseDetail = () => { 

 const { id } = useParams(); 

 const { courses } = useCourses(); 

 const course = courses.find(c => c.id === id); 

 if (!course) { 

                 
 
 
 
 

   return <div>Course not found</div>; 

 } 

 return ( 

   <> 

     <Helmet> 

       <title>{course.title} - MDH Academy</title> 

       <meta name="description" content={course.description} /> 

     </Helmet> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <Link to="/academy" className="inline-flex items-center 

text-[#CBB279] hover:underline mb-8"> 

           <ArrowLeft className="w-4 h-4 mr-2" /> 

           Back to Academy 

         </Link> 

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12"> 

           <motion.div 

             className="lg:col-span-2" 

             initial={{ opacity: 0, x: -30 }} 

             animate={{ opacity: 1, x: 0 }} 

             transition={{ duration: 0.6 }} 

           > 

             <div className="relative aspect-video rounded-2xl 

overflow-hidden mb-8 shadow-lg"> 

               <img src={course.image} alt={course.title} className="w-full 

h-full object-cover"/> 

               <div className="absolute inset-0 bg-black/40 flex 

items-center justify-center"> 

                 <PlayCircle className="w-20 h-20 text-white/80"/> 

               </div> 

             </div> 

             <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39] mb-4"> 

               {course.title} 

             </h1> 

             <p className="text-lg text-[#3B3A39]/70 mb-8"> 

 
 
         

               {course.description} 

             </p> 

             <h2 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-6">Course Content</h2> 

             <Accordion type="single" collapsible className="w-full"> 

               {course.lessons.map((lesson, index) => ( 

                 <AccordionItem key={index} value={`item-${index}`}> 

                   <AccordionTrigger className="text-lg 

font-medium">{lesson.title}</AccordionTrigger> 

                   <AccordionContent className="p-4 space-y-2"> 

                     <p>{lesson.content}</p> 

                     <span className="text-sm 

text-[#3B3A39]/60">{lesson.duration}</span> 

                   </AccordionContent> 

                 </AccordionItem> 

               ))} 

             </Accordion> 

           </motion.div> 

           <motion.div 

             className="lg:col-span-1" 

             initial={{ opacity: 0, x: 30 }} 

             animate={{ opacity: 1, x: 0 }} 

             transition={{ duration: 0.6 }} 

           > 

             <div className="bg-[#F6F4F0] p-8 rounded-2xl sticky top-24 

space-y-6"> 

               <Button className="w-full bg-[#CBB279] hover:bg-[#CBB279]/90 

text-white py-6 rounded-2xl text-lg"> 

                 Enroll Now 

               </Button> 

               <div> 

                   <p className="text-sm font-medium mb-2">Your Progress</p> 

                   <Progress value={course.progress} className="w-full 

[&>*]:bg-[#CBB279]" /> 

                   <p className="text-xs text-right mt-1 

text-[#3B3A39]/70">{course.progress}% Complete</p> 

               </div> 

             
 

               <div> 

                 <h3 className="heading-font text-xl font-semibold 

text-[#3B3A39] mb-4"> 

                   Downloadable Files 

                 </h3> 

                 <div className="space-y-3"> 

                   {course.files.map((file, index) => ( 

                     <a href="#" key={index} className="flex items-center 

justify-between p-3 bg-white rounded-lg hover:bg-white/80 transition"> 

                       <div className="flex items-center space-x-3"> 

                         <Download className="w-5 h-5 text-[#CBB279]" /> 

                         <span className="font-medium 

text-sm">{file.name}</span> 

                       </div> 

                       <span className="text-xs 

text-[#3B3A39]/60">{file.size}</span> 

                     </a> 

                   ))} 

                 </div> 

               </div> 

                <div> 

                 <h3 className="heading-font text-xl font-semibold 

text-[#3B3A39] mb-2"> 

                   Instructor 

                 </h3> 

                 <p className="text-[#3B3A39]/80">{course.instructor}</p> 

               </div> 

             </div> 

           </motion.div> 

         </div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default CourseDetail;
