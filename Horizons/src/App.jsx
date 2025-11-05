
import React from 'react'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import { Toaster } from '@/components/ui/toaster'; 

import Navigation from '@/components/Navigation'; 

import Footer from '@/components/Footer'; 

import Home from '@/pages/Home'; 

import About from '@/pages/About'; 

import Contact from '@/pages/Contact'; 

import Shop from '@/pages/Shop'; 

import ProductDetail from '@/pages/ProductDetail'; 

import Cart from '@/pages/Cart'; 

import Checkout from '@/pages/Checkout'; 

import ThankYou from '@/pages/ThankYou'; 

import ClientPortal from '@/pages/ClientPortal'; 

import Login from '@/pages/Login'; 

import Register from '@/pages/Register'; 

import Blog from '@/pages/Blog'; 

import BlogPost from '@/pages/BlogPost'; 

import NotFound from '@/pages/NotFound'; 

import Maintenance from '@/pages/Maintenance'; 

import ComingSoon from '@/pages/ComingSoon'; 

import Academy from '@/pages/Academy'; 

import CourseDetail from '@/pages/CourseDetail'; 

import StudentDashboard from '@/pages/StudentDashboard'; 

import AdminLogin from '@/pages/admin/AdminLogin'; 

 

import AdminDashboard from '@/pages/admin/AdminDashboard'; 

import AgencyHub from '@/pages/AgencyHub'; 

function App() { 

 return ( 

   <Router> 

     <div className="min-h-screen flex flex-col"> 

       <Navigation /> 

       <main className="flex-grow"> 

         <Routes> 

           <Route path="/" element={<Home />} /> 

           <Route path="/about" element={<About />} /> 

           <Route path="/contact" element={<Contact />} /> 

           <Route path="/shop" element={<Shop />} /> 

           <Route path="/shop/:id" element={<ProductDetail />} /> 

           <Route path="/cart" element={<Cart />} /> 

           <Route path="/checkout" element={<Checkout />} /> 

           <Route path="/thank-you" element={<ThankYou />} /> 

           <Route path="/client-portal" element={<ClientPortal />} /> 

           <Route path="/login" element={<Login />} /> 

           <Route path="/register" element={<Register />} /> 

           <Route path="/blog" element={<Blog />} /> 

           <Route path="/blog/:id" element={<BlogPost />} /> 

           <Route path="/academy" element={<Academy />} /> 

           <Route path="/academy/courses/:id" element={<CourseDetail />} /> 

           <Route path="/academy/dashboard" element={<StudentDashboard />} 

/> 

           <Route path="/admin" element={<AdminLogin />} /> 

           <Route path="/admin/dashboard" element={<AdminDashboard />} /> 

           <Route path="/agency-hub" element={<AgencyHub />} /> 

           <Route path="/maintenance" element={<Maintenance />} /> 

           <Route path="/coming-soon" element={<ComingSoon />} /> 

           <Route path="*" element={<NotFound />} /> 

         </Routes> 

       </main> 

       <Footer /> 

       <Toaster /> 

     </div> 

   </Router> 

 

 ); 

} 

export default App;
