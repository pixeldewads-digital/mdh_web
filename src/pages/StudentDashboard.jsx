
import React from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Link } from 'react-router-dom'; 

import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { useCourses } from '../hooks/useCourses';
import { BookOpen, Award } from 'lucide-react';

const StudentDashboard = () => {
  const { courses } = useCourses();

  return (
    <>
      <Helmet>
        <title>My Dashboard - MDH Academy</title>
        <meta name="description" content="Track your course progress and achievements." />
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
              My Dashboard
            </h1>
            <p className="text-xl text-[#3B3A39]/70 max-w-3xl mx-auto">
              Welcome back! Here's an overview of your learning journey.

           </p> 

         </motion.div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> 

           <div className="lg:col-span-2 space-y-8"> 

             <h2 className="heading-font text-3xl font-bold 

text-[#3B3A39]">My Courses</h2> 

             {courses.map((course, index) => ( 

               <motion.div 

                 key={course.id} 

                 initial={{ opacity: 0, y: 20 }} 

                 whileInView={{ opacity: 1, y: 0 }} 

                 viewport={{ once: true }} 

                 transition={{ duration: 0.6, delay: index * 0.1 }} 

               > 

                 <Link to={`/academy/courses/${course.id}`}> 

                   <div className="bg-[#F6F4F0] rounded-2xl p-6 flex 

flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 

hover:shadow-md transition-shadow"> 

                     <img 

                       src={course.image} 

                       alt={course.title} 

                       className="w-full md:w-48 h-32 object-cover 

rounded-xl" 

                     /> 

                     <div className="flex-grow w-full"> 

 

                       <h3 className="heading-font text-xl font-semibold 

text-[#3B3A39] mb-2"> 

                         {course.title} 

                       </h3> 

                       <div className="flex items-center text-sm 

text-[#3B3A39]/60 mb-3"> 

                         <BookOpen className="w-4 h-4 mr-2"/> 

{course.lessons.length} Lessons 

                       </div> 

                       <Progress value={course.progress} className="w-full 

[&>*]:bg-[#CBB279]" /> 

                       <p className="text-xs text-right mt-1 

text-[#3B3A39]/70">{course.progress}% Complete</p> 

                     </div> 

                   </div> 

                 </Link> 

               </motion.div> 

             ))} 

           </div> 

           <div className="lg:col-span-1"> 

             <div className="bg-[#F6F4F0] p-8 rounded-2xl sticky top-24"> 

               <h2 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-6">Achievements</h2> 

               <div className="space-y-4"> 

                 {courses.filter(c => c.badge).map(course => ( 

                   <div key={course.id} className="bg-white p-4 rounded-xl 

flex items-center space-x-4"> 

                     <div className="w-12 h-12 bg-[#CBB279] rounded-full 

flex items-center justify-center"> 

                       <Award className="w-6 h-6 text-white" /> 

                     </div> 

                     <div> 

                       <p className="font-semibold 

text-[#3B3A39]">{course.badge}</p> 

                       <p className="text-sm text-[#3B3A39]/60">Awarded for 

completing "{course.title}"</p> 

                     </div> 

                   </div> 

           

                 ))} 

                  {courses.filter(c => c.badge).length === 0 && ( 

                    <p className="text-center text-[#3B3A39]/70 

py-8">Complete a course to earn your first badge!</p> 

                  )} 

               </div> 

             </div> 

           </div> 

         </div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default StudentDashboard;
