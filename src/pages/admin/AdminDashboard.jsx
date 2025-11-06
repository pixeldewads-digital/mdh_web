
import React, { useState, useEffect } from 'react'; 

import { Helmet } from 'react-helmet'; 

import { useNavigate } from 'react-router-dom'; 

import { motion } from 'framer-motion'; 

import { LayoutDashboard, Newspaper, Files, Store, Image as ImageIcon, 

Users, Shield, LogOut } from 'lucide-react'; 

import { Button } from '../../components/ui/button';

import { TeamManagement } from '../../components/admin/TeamManagement';

import { useToast } from '../../components/ui/use-toast';

const AdminDashboard = () => { 

 const navigate = useNavigate(); 

 const { toast } = useToast(); 

 const [role, setRole] = useState(null); 

 useEffect(() => { 

   const userRole = localStorage.getItem('mdh_admin_role'); 

   if (!userRole) { 

     navigate('/admin'); 

   } else { 

     setRole(userRole); 

   } 

 }, [navigate]); 

  const handleLogout = () => { 

   localStorage.removeItem('mdh_admin_role'); 

   navigate('/admin'); 

 }; 

 const genericToast = () => { 

   toast({ 
     title: "🚧 Feature in Progress", 

     description: "This module is under construction. You can request it in your next prompt! 🚀",

   }); 

 } 

 
 
 

 const modules = [ 

   { name: 'Blog Posts', icon: Newspaper }, 

   { name: 'Pages', icon: Files }, 

   { name: 'Products', icon: Store }, 

   { name: 'Media Library', icon: ImageIcon }, 

   { name: 'Team Management', icon: Users, component: <TeamManagement /> }, 

   { name: 'Enable 2FA', icon: Shield }, 

 ]; 

 if (!role) return null; 

 return ( 

   <> 

     <Helmet> 

       <title>CMS Dashboard - Maharani Digital Hub</title> 

     </Helmet> 

     <div className="min-h-screen bg-[#F6F4F0]"> 

       <header className="bg-white border-b border-[#CBB279]/20 p-4 flex 

justify-between items-center"> 

         <h1 className="heading-font text-2xl font-bold text-[#3B3A39]">MDH 

CMS</h1> 

         <div className="flex items-center space-x-4"> 

           <span className="text-sm text-[#3B3A39]">Welcome, Ika Maharani 

Ratri ({role})</span> 

           <Button onClick={handleLogout} variant="ghost" size="sm"> 

             <LogOut className="w-4 h-4 mr-2" /> Logout 

           </Button> 

         </div> 

       </header> 

       <main className="p-8"> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6 }} 

         > 

           <h2 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-8">CMS Home Dashboard</h2> 

 
 
 
 

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 

gap-8"> 

             {modules.map((module) => ( 

               <motion.div 

                 key={module.name} 

                 whileHover={{ y: -5 }} 

                 className="bg-white rounded-2xl p-6 shadow-sm 

hover:shadow-lg transition-shadow cursor-pointer" 

                 onClick={module.component ? () => toast({title: "Team Management Loaded!", description: "This module is now active below."}) : genericToast}

               > 

                 <div className="flex items-center space-x-4"> 

                   <div className="bg-[#CBB279]/20 p-3 rounded-full"> 

                     <module.icon className="w-6 h-6 text-[#CBB279]" /> 

                   </div> 

                   <h3 className="heading-font text-xl font-semibold 

text-[#3B3A39]">{module.name}</h3> 

                 </div> 

               </motion.div> 

             ))} 

           </div> 

           <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm"> 

               <TeamManagement /> 

           </div> 

         </motion.div> 

       </main> 

     </div> 

   </> 

 ); 

}; 

export default AdminDashboard;
