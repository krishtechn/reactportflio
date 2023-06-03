import React, { useState } from 'react'
import { Navbar, Signup } from './Components';
import { resumeurl } from './Components';
import heroimg from '../src/assets/herobg.webp';
import Detailspage from './Components/Details/Detailspage';
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import LandingPages from './pages/LandingPages';

const App = () => {
  return (
    <div className='min-w-full bg-[#0D1117]'>
<BrowserRouter>

<Navbar title="Technical krish" btn="Resume" resumeurl={resumeurl} />
      
  <Routes> 
     <Route path='' element={<LandingPages />}/>  
     <Route path='/Courses/:category' element={<Detailspage />}/>   
  </Routes>
</BrowserRouter>
</div>

  )
}

export default App