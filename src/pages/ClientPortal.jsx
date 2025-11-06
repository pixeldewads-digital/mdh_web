
import React, { useState, useEffect } from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { useNavigate } from 'react-router-dom'; 

import { FileText, DollarSign, LogOut } from 'lucide-react'; 

import { Button } from '../components/ui/button';

const ClientPortal = () => { 

 const navigate = useNavigate(); 

 const [isLoggedIn, setIsLoggedIn] = useState(false); 

 useEffect(() => { 

   const loggedIn = localStorage.getItem('mdh_client_logged_in'); 

   if (!loggedIn) { 

     navigate('/login'); 

   } else { 

     setIsLoggedIn(true); 

   } 

 }, [navigate]); 

 const handleLogout = () => { 

   localStorage.removeItem('mdh_client_logged_in'); 

   navigate('/login'); 

 }; 

 
 
 
 
 
 

 if (!isLoggedIn) { 

   return null; 

 } 

 const mockReports = [ 

   { id: 1, title: 'Monthly Performance Report', date: '2025-10-15', status: 

'Completed' }, 

   { id: 2, title: 'Automation Audit', date: '2025-09-20', status: 

'Completed' }, 

   { id: 3, title: 'Q3 Analytics Summary', date: '2025-08-10', status: 

'Completed' } 

 ]; 

 const mockBilling = [ 

   { id: 1, invoice: 'INV-001', amount: 299, date: '2025-10-01', status: 

'Paid' }, 

   { id: 2, invoice: 'INV-002', amount: 299, date: '2025-09-01', status: 

'Paid' }, 

   { id: 3, invoice: 'INV-003', amount: 299, date: '2025-08-01', status: 

'Paid' } 

 ]; 

 return ( 

   <> 

     <Helmet> 

       <title>Client Portal - Maharani Digital Hub</title> 

       <meta name="description" content="Access your reports and billing 

information" /> 

     </Helmet> 

     <section className="py-24 bg-white min-h-screen"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="flex justify-between items-center mb-12"> 

           <motion.div 

             initial={{ opacity: 0, y: 20 }} 

             animate={{ opacity: 1, y: 0 }} 

             transition={{ duration: 0.6 }} 

           > 

 
 
 
 
 

             <h1 className="heading-font text-4xl md:text-5xl font-bold 

text-[#3B3A39]"> 

               Client Portal 

             </h1> 

             <p className="text-[#3B3A39]/70 mt-2">Welcome back!</p> 

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

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 

           <motion.div 

             initial={{ opacity: 0, x: -30 }} 

             animate={{ opacity: 1, x: 0 }} 

             transition={{ duration: 0.6 }} 

             className="bg-[#F6F4F0] rounded-2xl p-8" 

           > 

             <div className="flex items-center space-x-3 mb-6"> 

               <FileText className="w-6 h-6 text-[#CBB279]" /> 

               <h2 className="heading-font text-2xl font-semibold 

text-[#3B3A39]"> 

                 Reports 

               </h2> 

             </div> 

             <div className="space-y-4"> 

               {mockReports.map((report) => ( 

                 <div 

                   key={report.id} 

                   className="bg-white p-4 rounded-xl flex justify-between 

items-center" 

                 > 

                   <div> 

 

                     <p className="font-medium 

text-[#3B3A39]">{report.title}</p> 

                     <p className="text-sm 

text-[#3B3A39]/60">{report.date}</p> 

                   </div> 

                   <span className="text-sm text-[#CBB279] font-medium"> 

                     {report.status} 

                   </span> 

                 </div> 

               ))} 

             </div> 

           </motion.div> 

           <motion.div 

             initial={{ opacity: 0, x: 30 }} 

             animate={{ opacity: 1, x: 0 }} 

             transition={{ duration: 0.6 }} 

             className="bg-[#F6F4F0] rounded-2xl p-8" 

           > 

             <div className="flex items-center space-x-3 mb-6"> 

               <DollarSign className="w-6 h-6 text-[#CBB279]" /> 

               <h2 className="heading-font text-2xl font-semibold 

text-[#3B3A39]"> 

                 Billing 

               </h2> 

             </div> 

             <div className="space-y-4"> 

               {mockBilling.map((bill) => ( 

                 <div 

                   key={bill.id} 

                   className="bg-white p-4 rounded-xl flex justify-between 

items-center" 

                 > 

                   <div> 

                     <p className="font-medium 

text-[#3B3A39]">{bill.invoice}</p> 

                     <p className="text-sm 

text-[#3B3A39]/60">{bill.date}</p> 

                   </div> 

 

                   <div className="text-right"> 

                     <p className="font-bold 

text-[#CBB279]">${bill.amount}</p> 

                     <p className="text-sm text-green-600">{bill.status}</p> 

                   </div> 

                 </div> 

               ))} 

             </div> 

           </motion.div> 

         </div> 

         <motion.div 

           initial={{ opacity: 0, y: 20 }} 

           animate={{ opacity: 1, y: 0 }} 

           transition={{ duration: 0.6, delay: 0.2 }} 

           className="mt-8 bg-gradient-to-br from-[#CBB279]/20 to-[#F6F4F0] 

rounded-2xl p-8 text-center" 

         > 

           <h3 className="heading-font text-2xl font-semibold text-[#3B3A39] 

mb-4"> 

             Looker Studio Dashboard 

           </h3> 

           <div className="bg-white rounded-xl overflow-hidden" style={{ 

height: '500px' }}> 

             <iframe 

               src="https://lookerstudio.google.com/embed/reporting/sample" 

               width="100%" 

               height="100%" 

               style={{ border: 0 }} 

               allowFullScreen 

               title="Analytics Dashboard" 

             /> 

           </div> 

         </motion.div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

 

export default ClientPortal;
