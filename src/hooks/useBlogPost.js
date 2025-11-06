
import { useState } from 'react'; 

   
 
 
 
 
 
 

export const useBlogPosts = () => { 

 const [posts] = useState([ 

   { 

     id: 'calm-productivity-guide', 

     title: 'The Ultimate Guide to Calm Productivity', 

     excerpt: 'Discover how to achieve more by doing less, with intentional systems that support sustainable growth.',

     category: 'Calm Productivity', 

     date: 'October 15, 2025', 

     image: 

'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80', 

     content: 'Calm productivity isn\'t about doing more—it\'s about doing what matters with clarity and intention. In this comprehensive guide, we explore the principles of structured workflow design, mindful task management, and creating digital systems that support rather than overwhelm. Learn how to build sustainable habits that lead to consistent results without burnout.'

   }, 

   { 

     id: 'automation-basics', 

     title: 'Automation 101: Where to Start', 

     excerpt: 'A beginner-friendly introduction to workflow automation and how it can transform your daily operations.',

     category: 'Automation', 

     date: 'September 28, 2025', 

     image: 

'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', 

     content: 'Automation doesn\'t have to be complicated. Start with identifying repetitive tasks that consume your time and energy. We\'ll walk through simple automation examples using tools like n8n, Zapier, and Make, showing you how to reclaim hours each week while maintaining quality and consistency in your work.'

   }, 

   { 

     id: 'digital-balance', 

     title: 'Finding Balance in a Digital World', 

     excerpt: 'Practical strategies for maintaining harmony between technology and well-being.',

 

     category: 'Digital Balance', 

     date: 'August 10, 2025', 

     image: 

'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80', 

     content: 'Technology should enhance our lives, not dominate them. This article explores practical approaches to digital wellness—from setting healthy boundaries with notifications to designing workspaces that promote focus and calm. Learn how to leverage digital tools while protecting your mental clarity and personal time.'

   }, 

   { 

     id: 'systemize-success', 

     title: 'How to Systemize Your Success', 

     excerpt: 'Building repeatable processes that scale your productivity without adding stress.',

     category: 'Calm Productivity', 

     date: 'July 22, 2025', 

     image: 

'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', 

     content: 'Success isn\'t random—it\'s systematic. Discover how to document your workflows, create standard operating procedures, and build systems that work even when you\'re not actively managing them. We\'ll cover templates, checklists, and automation strategies that turn one-time wins into repeatable results.'

   }, 

   { 

     id: 'n8n-workflows', 

     title: '5 Essential n8n Workflows for Entrepreneurs', 

     excerpt: 'Ready-to-implement automation workflows that save hours every week.',

     category: 'Automation', 

     date: 'June 15, 2025', 

     image: 

'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', 

     content: 'n8n is a powerful automation platform that puts you in control. In this tutorial, we share five essential workflows every entrepreneur should implement: automated lead capture, social media scheduling, invoice generation, email follow-ups, and data backup. Each workflow includes step-by-step setup instructions and customization tips.'


   }, 

   { 

     id: 'mindful-planning', 

     title: 'Mindful Planning for Maximum Impact', 

     excerpt: 'How intentional planning creates space for both productivity and peace.',

     category: 'Digital Balance', 

     date: 'May 8, 2025', 

     image: 

'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80', 

     content: 'Planning isn\'t just about filling your calendar—it\'s about creating intentional space for what truly matters. Learn the art of mindful planning: prioritizing with purpose, building in buffer time, and designing your days around energy levels rather than arbitrary schedules. Discover how to plan less but achieve more.'

   } 

 ]); 

 return { posts }; 

};
