import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Instagram, Linkedin } from 'lucide-react';


const Footer = () => {
 const location = useLocation();


 if (location.pathname.startsWith('/admin')) {
   return null;
 }


 return (
   <footer className="bg-[#3B3A39] text-[#F6F4F0] py-16">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
         <div className="space-y-4">
           <span className="heading-font text-2xl font-bold text-[#CBB279]">MDH</span>
           <p className="text-sm text-[#F6F4F0]/80">
             Elevating Digital Harmony through calm productivity and premium clarity.
           </p>
         </div>


         <div>
           <span className="font-medium text-[#CBB279] block mb-4">Quick Links</span>
           <div className="space-y-2">
             <Link to="/about" className="block text-sm hover:text-[#CBB279] transition-colors">
               About
             </Link>
             <Link to="/shop" className="block text-sm hover:text-[#CBB279] transition-colors">
               Shop
             </Link>
             <Link to="/blog" className="block text-sm hover:text-[#CBB279] transition-colors">
               Blog
             </Link>
             <Link to="/contact" className="block text-sm hover:text-[#CBB279] transition-colors">
               Contact
             </Link>
           </div>
         </div>


         <div>
           <span className="font-medium text-[#CBB279] block mb-4">Resources</span>
           <div className="space-y-2">
             <Link to="/client-portal" className="block text-sm hover:text-[#CBB279] transition-colors">
               Client Portal
             </Link>
             <Link to="/academy" className="block text-sm hover:text-[#CBB279] transition-colors">
               Academy
             </Link>
             <Link to="/agency-hub" className="block text-sm hover:text-[#CBB279] transition-colors">
               Agency Hub
             </Link>
           </div>
         </div>


         <div>
           <span className="font-medium text-[#CBB279] block mb-4">Connect</span>
           <div className="flex space-x-4">
             <a href="mailto:hello@mdh.com" className="hover:text-[#CBB279] transition-colors">
               <Mail className="w-5 h-5" />
             </a>
             <a href="#" className="hover:text-[#CBB279] transition-colors">
               <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="hover:text-[#CBB279] transition-colors">
               <Linkedin className="w-5 h-5" />
             </a>
           </div>
         </div>
       </div>


       <div className="border-t border-[#F6F4F0]/20 mt-12 pt-8 text-center text-sm text-[#F6F4F0]/60">
         <p>© 2025 Maharani Digital Hub. All rights reserved.</p>
         <p className="mt-2">
           <Link to="/admin" className="hover:text-[#CBB279] transition-colors">
             Admin Area
           </Link>
         </p>
       </div>
     </div>
   </footer>
 );
};


export default Footer;
