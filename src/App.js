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

const App = () => {
  return (
    <div className='min-w-full'>
<BrowserRouter>

<Navbar title="Technical krish" btn="Resume" resumeurl={resumeurl} />
      
     {/* <Sidebar /> */}
  <Routes> 
     <Route path='' element={<LandingPages />}/>  
     <Route path='/Courses/:category' element={<Detailspage />}/>   
     <Route path='/Videos/:category/:vcategory' element={<VideoPages />}/>  
     <Route path='Youtube-videos' element={<Youtubevideos />}/>  
     <Route path='*' element={<PageNotFound />}/>  
  </Routes>

  
{/* footer componetns  */}
<Footer />
</BrowserRouter>
</div>

  )
}

export default App