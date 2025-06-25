'use client'
import React from "react";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";


const Home = () => {
  return (
    <>
      <h2 className="text-red-700">Nav component</h2>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
       
       <h2>Header slider if</h2>
       <h2>Home products here if</h2>
        <h2>Featured component if</h2>
        <h2>Banner component if</h2>
       <h2>NewsLetest compo if</h2>
       
      </div>
      <h2 className="text-red-700">Footer compo</h2>
      <Footer/>
    </>
  );
};

export default Home;
