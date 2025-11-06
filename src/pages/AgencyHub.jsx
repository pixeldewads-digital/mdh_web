
import React, { useState, useEffect } from 'react'; 

import { Helmet } from 'react-helmet'; 

import { useNavigate } from 'react-router-dom'; 

import { motion } from 'framer-motion'; 

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

import { Button } from '../components/ui/button';
import { BarChart, FolderKanban, Zap, FileArchive, LogOut, Play, Pause } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const AgencyHub = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem('mdh_admin_role');
    if (userRole !== 'Owner') {
      toast({
        title: 'Access Denied',
        description: 'You must be an Owner to access the Agency Hub.',
        variant: 'destructive',
      });
      navigate('/admin');
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('mdh_admin_role');
    navigate('/admin');
  };

  const genericToast = () => {
    toast({
      title: '🚧 Feature in Progress',
      description: 'This functionality is under construction. You can request it in your next prompt! 🚀',
    });
  };

  const projectTasks = [
    { task: 'Client Onboarding Automation', status: 'In Progress', priority: 'High', deadline: '2025-11-15', pic: 'Ika' },
    { task: 'New Course Content Creation', status: 'Not Started', priority: 'Medium', deadline: '2025-11-20', pic: 'Jane' },
    { task: 'Q4 Financial Report', status: 'Completed', priority: 'High', deadline: '2025-10-30', pic: 'Ika' },
    { task: 'Update Brand Assets', status: 'In Progress', priority: 'Low', deadline: '2025-11-10', pic: 'John' },
  ];

  const automationLogs = [
    { timestamp: '2025-11-05 10:00:15', workflow: 'New Subscriber', status: 'Success' },
    { timestamp: '2025-11-05 09:45:03', workflow: 'Daily Backup', status: 'Success' },
    { timestamp: '2025-11-04 18:30:50', workflow: 'Client Invoice', status: 'Failed' },
  ];

 if (!isLoggedIn) return null; 

 return ( 

   <> 

     <Helmet> 

       <title>Agency Hub - Maharani Digital Hub</title> 

     </Helmet> 

     <section className="py-24 bg-white min-h-screen"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="flex justify-between items-start mb-12"> 

           <motion.div 

             initial={{ opacity: 0, y: 20 }} 

             animate={{ opacity: 1, y: 0 }} 

             transition={{ duration: 0.6 }} 

           > 

             <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39]"> 

               Agency Hub 

             </h1> 

 
 
 
 

             <p className="text-[#3B3A39]/70 mt-2">The calm, powerful core 

of MDH.</p> 

           </motion.div> 

           <Button 

             onClick={handleLogout} 

             variant="outline" 

             className="border-[#CBB279] text-[#3B3A39] 

hover:bg-[#CBB279]/10 rounded-2xl" 

           > 

             <LogOut className="w-4 h-4 mr-2" /> 

             Logout 

           </Button> 

         </div> 

         <Tabs defaultValue="tracker" className="w-full"> 

           <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 

bg-[#F6F4F0] p-2 h-auto rounded-2xl"> 

             <TabsTrigger value="tracker" className="rounded-xl 

data-[state=active]:bg-white data-[state=active]:shadow-md"><FolderKanban 

className="w-4 h-4 mr-2"/>Project Tracker</TabsTrigger> 

             <TabsTrigger value="financials" className="rounded-xl 

data-[state=active]:bg-white data-[state=active]:shadow-md"><BarChart 

className="w-4 h-4 mr-2"/>Financial Overview</TabsTrigger> 

             <TabsTrigger value="automation" className="rounded-xl 

data-[state=active]:bg-white data-[state=active]:shadow-md"><Zap 

className="w-4 h-4 mr-2"/>Automation Control</TabsTrigger> 

             <TabsTrigger value="files" className="rounded-xl 

data-[state=active]:bg-white data-[state=active]:shadow-md"><FileArchive 

className="w-4 h-4 mr-2"/>File Repository</TabsTrigger> 

           </TabsList> 

           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 

1, y: 0 }} transition={{ delay: 0.2 }}> 

             <TabsContent value="tracker" className="mt-8 bg-white p-8 

rounded-2xl shadow-sm"> 

               <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-6">Project Tracker</h3> 

               <div className="overflow-x-auto"> 

                 <table className="w-full text-left"> 

 
           

                   <thead> 

                     <tr className="border-b border-[#CBB279]/30"> 

                       <th className="p-4">Task</th><th 

className="p-4">Status</th><th className="p-4">Priority</th><th 

className="p-4">Deadline</th><th className="p-4">PIC</th> 

                     </tr> 

                   </thead> 

                   <tbody> 

                     {projectTasks.map((item, index) => ( 

                       <tr key={index} className="border-b 

border-[#F6F4F0]"> 

                         <td className="p-4 font-medium">{item.task}</td> 

                         <td className="p-4"><span className={`px-2 py-1 text-xs rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{item.status}</span></td>

                         <td className="p-4"><span 

className={`${item.priority === 'High' ? 'text-red-600' : 

'text-gray-500'}`}>{item.priority}</span></td> 

                         <td className="p-4">{item.deadline}</td> 

                         <td className="p-4">{item.pic}</td> 

                       </tr> 

                     ))} 

                   </tbody> 

                 </table> 

               </div> 

             </TabsContent> 

             <TabsContent value="financials" className="mt-8 bg-white p-8 

rounded-2xl shadow-sm"> 

               <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-6">Financial Overview</h3> 

               <div className="text-center p-16 bg-[#F6F4F0] rounded-xl"> 

                 <BarChart className="mx-auto w-16 h-16 text-[#CBB279]/50 

mb-4"/> 

                 <p className="text-[#3B3A39]/70">Chart visualization is in 

progress.</p> 

               </div> 

             </TabsContent> 


             <TabsContent value="automation" className="mt-8 bg-white p-8 

rounded-2xl shadow-sm"> 

               <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-6">Automation Control</h3> 

               <div className="space-y-4 mb-8"> 

                 <div className="flex justify-between items-center 

bg-[#F6F4F0] p-4 rounded-xl"> 

                   <p className="font-medium">New Subscriber Workflow</p> 

                   <div className="flex space-x-2"> 

                     <Button onClick={genericToast} size="icon" 

variant="ghost" className="text-green-600"><Play /></Button> 

                     <Button onClick={genericToast} size="icon" 

variant="ghost" className="text-red-600"><Pause /></Button> 

                   </div> 

                 </div> 

                  <div className="flex justify-between items-center 

bg-[#F6F4F0] p-4 rounded-xl"> 

                   <p className="font-medium">Daily Database Backup</p> 

                    <div className="flex space-x-2"> 

                     <Button onClick={genericToast} size="icon" 

variant="ghost" className="text-green-600"><Play /></Button> 

                     <Button onClick={genericToast} size="icon" 

variant="ghost" className="text-red-600"><Pause /></Button> 

                   </div> 

                 </div> 

               </div> 

               <h4 className="heading-font text-xl font-semibold 

text-[#3B3A39] mb-4">Automation Logs</h4> 

               <div className="bg-[#3B3A39] text-white/80 font-mono text-sm 

p-4 rounded-xl h-48 overflow-y-auto"> 

                   {automationLogs.map((log, index) => ( 

                       <p key={index}>[{log.timestamp}] <span 

className={log.status === 'Success' ? 'text-green-400' : 

'text-red-400'}>[{log.status}]</span> {log.workflow}</p> 

                   ))} 

               </div> 

             </TabsContent> 

             <TabsContent value="files" className="mt-8 bg-white p-8 

rounded-2xl shadow-sm"> 


               <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-6">File Repository</h3> 

               <div className="text-center p-16 bg-[#F6F4F0] rounded-xl 

border-2 border-dashed border-[#CBB279]/30"> 

                 <FileArchive className="mx-auto w-16 h-16 text-[#CBB279]/50 

mb-4"/> 

                 <p className="text-[#3B3A39]/70 mb-4">Drag and drop files 

here or</p> 

                 <Button onClick={genericToast}>Upload Files</Button> 

               </div> 

             </TabsContent> 

           </motion.div> 

         </Tabs> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default AgencyHub;
