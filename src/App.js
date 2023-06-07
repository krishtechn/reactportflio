import React, { useState } from 'react'
import { Navbar, Signup } from './Components';
import { resumeurl } from './Components';
import heroimg from '../src/assets/herobg.webp';
import Detailspage from './Components/Details/Detailspage';
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import LandingPages from './pages/LandingPages';
import {Footer} from './Components/index';
import VideoPages from './pages/VideoPages';
import Youtubevideos from './pages/youtube-videos';
import PageNotFound from './pages/PageNotFound';
import Sidebar from './Components/Sidebar/Sidebar';
import Searchpage from './pages/Searchpage';
// import Signup from './Components/index';

const App = () => {
  return (
    <div className='min-w-full'>
<BrowserRouter>

<div className='h-[70px]'>
<Navbar title="Technical krish" btn="Resume" resumeurl={resumeurl} />
</div>
      
     {/* <Sidebar /> */}
  <Routes> 
     <Route path='' element={<LandingPages />}/>  
     <Route path='/Courses/:category' element={<Detailspage />}/>   
     <Route path='/auth/Signup' element={<Signup />}/>   
     <Route path='/Videos/:category/:vcategory' element={<VideoPages />}/>  
     <Route path='Youtube-videos' element={<Youtubevideos />}/>
     <Route path='SearchCourse' element={<Searchpage />}/>  
     <Route path='*' element={<PageNotFound />}/>  
  </Routes>

  
{/* footer componetns  */}
<Footer />
</BrowserRouter>
</div>

  )
}

export default App