import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Main from './components/Main/Main'; 
import Card1 from './components/Card1/Card1'; 
import Card2 from './components/Card2/Card2'; 
import Courses from './components/Courses/Courses'; 
import Skills from './components/Skills/Skills'; 
import Calender from './components/Calender/Calender'; 
import Instructor from './components/Instructor/Instructor'; 
import Testimonials from './components/Testimonials/Testimonials'; 
import Footer from './components/Footer/Footer'; 
const App = () => {
  return (
    <div className='h-screen bg-slate-950'>
      <Navbar/>
      <Main/>
      <Card1/>
      <Card2/>
      <Courses/>
      <Skills/>
      <Calender/>
      <Instructor/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
