
import { useState, useEffect } from 'react'; 

export const useProducts = () => { 

 const [products] = useState([ 

   { 

     id: 'calm-planner', 

     name: 'Calm Productivity Planner', 

     price: 49, 

     description: 'A beautifully designed digital planner that brings structure and serenity to your daily workflow.',

     image: 

'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80', 

     features: [ 

       'Daily, weekly, and monthly planning templates', 

       'Goal tracking and reflection prompts', 

       'Habit tracker with visual progress', 

       'Digital stickers and customization options', 

       'Compatible with GoodNotes, Notability, and PDF readers' 

     ] 

   }, 

   { 

 
 
 

     id: 'harmony-bundle', 

     name: 'Digital Harmony Bundle', 

     price: 99, 

     description: 'Complete collection of templates, planners, and tools for a fully harmonized digital workspace.',

     image: 

'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80', 

     features: [ 

       'Calm Productivity Planner', 

       'Project management templates', 

       'Meeting notes and agenda templates', 

       'Financial tracking spreadsheets', 

       'Lifetime updates and new additions' 

     ] 

   }, 

   { 

     id: 'automation-kit', 

     name: 'Automation Starter Kit', 

     price: 149, 

     description: 'Pre-built n8n workflows and templates to automate your most repetitive tasks instantly.',

     image: 

'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', 

     features: [ 

       '10+ ready-to-use automation workflows', 

       'Email automation templates', 

       'Social media scheduling workflows', 

       'Data sync and backup automations', 

       'Step-by-step setup guides' 

     ] 

   } 

 ]); 

 return { products }; 

};
