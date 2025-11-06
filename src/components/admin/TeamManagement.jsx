
import React from 'react'; 

import { Button } from '../ui/button';

import { Switch } from '../ui/switch';

import { useToast } from '../ui/use-toast';

import { PlusCircle, Trash2 } from 'lucide-react'; 

export const TeamManagement = () => { 

   const { toast } = useToast(); 

   const teamMembers = [ 

       { name: 'Ika Maharani Ratri', role: 'Owner', email: 'ika@mdh.com' }, 

       { name: 'Jane Doe', role: 'Admin', email: 'jane@mdh.com' }, 

       { name: 'John Smith', role: 'Editor', email: 'john@mdh.com' }, 

 
 
 
 
   

   ]; 

   const permissions = { 

       Owner: ['Read', 'Edit', 'Publish', 'Delete'], 

       Admin: ['Read', 'Edit', 'Publish'], 

       Editor: ['Read', 'Edit'], 

       Viewer: ['Read'], 

   }; 

   const handleAction = () => { 

     toast({ 
       title: "🚧 Feature in Progress", 

       description: "This functionality is under construction. You can request it in your next prompt! 🚀",

     }); 

   } 

   return ( 

       <div> 

           <div className="flex justify-between items-center mb-6"> 

               <h3 className="heading-font text-2xl font-bold 

text-[#3B3A39]">Team Management</h3> 

               <Button onClick={handleAction}> 

                   <PlusCircle className="w-4 h-4 mr-2" /> Add Member 

               </Button> 

           </div> 

           <div className="space-y-4"> 

               {teamMembers.map(member => ( 

                   <div key={member.email} className="bg-[#F6F4F0] p-4 

rounded-xl flex items-center justify-between"> 

                       <div> 

                           <p className="font-semibold 

text-[#3B3A39]">{member.name}</p> 

                           <p className="text-sm 

text-[#3B3A39]/70">{member.email} - <span className="font-medium 

text-[#CBB279]">{member.role}</span></p> 

                       </div> 

                       <div className="flex items-center space-x-4"> 

 
 
 

                            <Button onClick={handleAction} variant="ghost" 

size="icon" className="text-gray-500 hover:text-red-500"> 

                               <Trash2 className="w-4 h-4"/> 

                           </Button> 

                       </div> 

                   </div> 

               ))} 

           </div> 

           <div className="mt-12"> 

               <h3 className="heading-font text-2xl font-bold text-[#3B3A39] 

mb-6">Role Permissions</h3> 

               <div className="space-y-6"> 

                   {Object.entries(permissions).map(([role, perms]) => ( 

                       <div key={role} className="bg-[#F6F4F0] p-6 

rounded-xl"> 

                           <h4 className="font-bold text-[#CBB279] text-lg 

mb-4">{role}</h4> 

                           <div className="grid grid-cols-2 md:grid-cols-4 

gap-4"> 

                               {['Read', 'Edit', 'Publish', 'Delete'].map(p => (

                                   <div key={p} className="flex items-center 

space-x-2"> 

                                       <Switch 

                                           id={`${role}-${p}`} 

                                           checked={perms.includes(p)} 

                                           onCheckedChange={handleAction} 

                                       /> 

                                       <label 

htmlFor={`${role}-${p}`}>{p}</label> 

                                   </div> 

                               ))} 

                           </div> 

                       </div> 

                   ))} 

               </div> 

           </div> 

       </div> 

 

   ); 

};
