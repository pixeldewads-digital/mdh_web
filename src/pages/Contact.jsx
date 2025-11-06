
import React, { useState } from 'react'; 

import { Helmet } from 'react-helmet'; 

import { motion } from 'framer-motion'; 

import { Mail, MapPin, Phone } from 'lucide-react'; 

import { Button } from '../components/ui/button';

import { useToast } from '../components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem('mdh_contacts') || '[]');
    contacts.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('mdh_contacts', JSON.stringify(contacts));
    toast({
      title: 'Message Sent! ✨',
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact - Maharani Digital Hub</title>
        <meta name="description" content="Get in touch with Maharani Digital Hub. Let's discuss how we can bring digital harmony to your workflow." />
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
              Let's Connect
            </h1>
            <p className="text-xl text-[#3B3A39]/70 max-w-3xl mx-auto">
              Ready to elevate your digital workflow? We'd love to hear from you.

           </p> 

         </motion.div> 

       </div> 

     </section> 

     <section className="py-24 bg-white"> 

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> 

           <motion.div 

             initial={{ opacity: 0, x: -30 }} 

             whileInView={{ opacity: 1, x: 0 }} 

             viewport={{ once: true }} 

 
 
 

             transition={{ duration: 0.6 }} 

           > 

             <h2 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-8"> 

               Send Us a Message 

             </h2> 

             <form onSubmit={handleSubmit} className="space-y-6"> 

               <div> 

                 <label className="block text-sm font-medium text-[#3B3A39] 

mb-2"> 

                   Name 

                 </label> 

                 <input 

                   type="text" 

                   required 

                   value={formData.name} 

                   onChange={(e) => setFormData({ ...formData, name: 

e.target.value })} 

                   className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-[#F6F4F0]" 

                 /> 

               </div> 

               <div> 

                 <label className="block text-sm font-medium text-[#3B3A39] 

mb-2"> 

                   Email 

                 </label> 

                 <input 

                   type="email" 

                   required 

                   value={formData.email} 

                   onChange={(e) => setFormData({ ...formData, email: 

e.target.value })} 

                   className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-[#F6F4F0]" 

                 /> 

               </div> 


               <div> 

                 <label className="block text-sm font-medium text-[#3B3A39] 

mb-2"> 

                   Message 

                 </label> 

                 <textarea 

                   required 

                   rows={6} 

                   value={formData.message} 

                   onChange={(e) => setFormData({ ...formData, message: 

e.target.value })} 

                   className="w-full px-4 py-3 rounded-2xl border 

border-[#CBB279]/30 focus:outline-none focus:ring-2 focus:ring-[#CBB279] 

bg-[#F6F4F0]" 

                 /> 

               </div> 

               <Button type="submit" className="w-full bg-[#CBB279] 

hover:bg-[#CBB279]/90 text-white py-6 rounded-2xl"> 

                 Send Message 

               </Button> 

             </form> 

           </motion.div> 

           <motion.div 

             initial={{ opacity: 0, x: 30 }} 

             whileInView={{ opacity: 1, x: 0 }} 

             viewport={{ once: true }} 

             transition={{ duration: 0.6 }} 

             className="space-y-8" 

           > 

             <div> 

               <h2 className="heading-font text-3xl font-bold text-[#3B3A39] 

mb-8"> 

                 Contact Information 

               </h2> 

               <div className="space-y-6"> 

                 <div className="flex items-start space-x-4"> 

                   <Mail className="w-6 h-6 text-[#CBB279] flex-shrink-0 

mt-1" /> 

 

                   <div> 

                     <p className="font-medium text-[#3B3A39]">Email</p> 

                     <p 

className="text-[#3B3A39]/70">hello@maharanidigitalhub.com</p> 

                   </div> 

                 </div> 

                 <div className="flex items-start space-x-4"> 

                   <Phone className="w-6 h-6 text-[#CBB279] flex-shrink-0 

mt-1" /> 

                   <div> 

                     <p className="font-medium text-[#3B3A39]">Phone</p> 

                     <p className="text-[#3B3A39]/70">+1 (555) 123-4567</p> 

                   </div> 

                 </div> 

                 <div className="flex items-start space-x-4"> 

                   <MapPin className="w-6 h-6 text-[#CBB279] flex-shrink-0 

mt-1" /> 

                   <div> 

                     <p className="font-medium text-[#3B3A39]">Location</p> 

                     <p className="text-[#3B3A39]/70">Remote & Global</p> 

                   </div> 

                 </div> 

               </div> 

             </div> 

             <div className="bg-[#F6F4F0] p-8 rounded-2xl"> 

               <h3 className="heading-font text-2xl font-semibold 

text-[#3B3A39] mb-4"> 

                 Office Hours 

               </h3> 

               <div className="space-y-2 text-[#3B3A39]/70"> 

                 <p>Monday - Friday: 9:00 AM - 6:00 PM</p> 

                 <p>Saturday: 10:00 AM - 2:00 PM</p> 

                 <p>Sunday: Closed</p> 

               </div> 

             </div> 

             <div className="rounded-2xl overflow-hidden h-64"> 

               <iframe 

 
 

src="https://www.openstreetmap.org/export/embed.html?bbox=-0.09%2C51.505%2C-

0.08%2C51.515&layer=mapnik" 

                 width="100%" 

                 height="100%" 

                 style={{ border: 0 }} 

                 loading="lazy" 

                 title="Office location map" 

               /> 

             </div> 

           </motion.div> 

         </div> 

       </div> 

     </section> 

   </> 

 ); 

}; 

export default Contact;
