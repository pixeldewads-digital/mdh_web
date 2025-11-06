
import { useState } from 'react'; 

export const useCourses = () => { 

 const [courses] = useState([ 

   { 

     id: 'calm-productivity-masterclass', 

     title: 'Calm Productivity Masterclass', 

     description: 'A comprehensive program to master the art of calm productivity, transforming your workflow and mindset.',

     image: 

'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80', 

     instructor: 'Ika Maharani Ratri', 

     lessons: [ 

       { title: 'Module 1: The Philosophy of Calm Productivity', duration: '25 mins', content: 'Understanding the core principles.' },

       { title: 'Module 2: Designing Your Digital Sanctuary', duration: '45 mins', content: 'Setting up your tools for success.' },

       { title: 'Module 3: Intentional Planning & Prioritization', duration: '35 mins', content: 'Focusing on what truly matters.' },

       { title: 'Module 4: Introduction to Automation', duration: '50 mins', content: 'Automating repetitive tasks with n8n.' },

       { title: 'Module 5: Maintaining Digital Harmony', duration: '20 mins', content: 'Long-term strategies for balance.' },

     ], 

     files: [ 

       { name: 'Course Workbook.pdf', size: '2.5 MB' }, 

       { name: 'Productivity Planner Template.zip', size: '5.1 MB' }, 

     ], 

 
 

     progress: 60, 

     badge: null, 

   }, 

   { 

     id: 'n8n-automation-deep-dive', 

     title: 'n8n Automation Deep Dive', 

     description: 'Become an automation expert with this in-depth course on n8n, from basic workflows to advanced techniques.',

     image: 

'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80', 

     instructor: 'Ika Maharani Ratri', 

     lessons: [ 

       { title: 'Module 1: n8n Fundamentals', duration: '30 mins', content: 'Getting started with nodes and workflows.' },

       { title: 'Module 2: Advanced Workflow Logic', duration: '60 mins', content: 'Using functions, loops, and conditional logic.' },

       { title: 'Module 3: API Integrations', duration: '55 mins', content: 'Connecting to third-party services.' },

       { title: 'Module 4: Building a Personal CRM', duration: '75 mins', content: 'A hands-on project.' },

     ], 

     files: [ 

       { name: 'Workflow Cheatsheet.pdf', size: '1.2 MB' }, 

       { name: 'Project Templates.zip', size: '8.3 MB' }, 

     ], 

     progress: 25, 

     badge: null, 

   }, 

    { 

     id: 'digital-minimalism-for-creatives', 

     title: 'Digital Minimalism for Creatives', 

     description: 'Declutter your digital life to create more space for creativity and deep work.',

     image: 

'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80', 

     instructor: 'Ika Maharani Ratri', 

     lessons: [ 

       { title: 'Module 1: The Case for Digital Minimalism', duration: '20 mins', content: 'Why less is more.' },


       { title: 'Module 2: The Digital Declutter Process', duration: '40 mins', content: 'A step-by-step guide.' },

       { title: 'Module 3: Curating Your Digital Toolkit', duration: '30 mins', content: 'Choosing tools with intention.' },

     ], 

     files: [ 

       { name: 'Declutter Checklist.pdf', size: '0.8 MB' }, 

     ], 

     progress: 100, 

     badge: 'Digital Minimalist', 

   }, 

 ]); 

 return { courses }; 

};
