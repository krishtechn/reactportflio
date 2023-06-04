import React, { useState } from 'react'
import { Navbar, Signup } from './Components';
import { resumeurl } from './Components';
import heroimg from '../src/assets/herobg.webp';
import Detailspage from './Components/Details/Detailspage';
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import LandingPages from './pages/LandingPages';
import {Footer} from './Components/index';
import VideoPages from './pages/VideoPages';

const App = () => {
  return (
    <div className='min-w-full bg-[#0D1117]'>
<BrowserRouter>

<Navbar title="Technical krish" btn="Resume" resumeurl={resumeurl} />
      
  <Routes> 
     <Route path='' element={<LandingPages />}/>  
     <Route path='/Courses/:category' element={<Detailspage />}/>   
     <Route path='/Videos/:category/:vcategory' element={<VideoPages />}/>   
  </Routes>

  
{/* footer componetns  */}
<Footer />
</BrowserRouter>
</div>

  )
}

export default App