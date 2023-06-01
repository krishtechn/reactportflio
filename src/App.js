import React from 'react'
import { BsFillMoonStarsFill, BsYoutube } from 'react-icons/bs'
import { AiFillFacebook, AiFillGithub,AiFillStar } from "react-icons/ai"

import bgimg from '../src/assets/herobg.webp';

const App = () => {
  return (
    <div className='min-w-full bg-[#0D1117]'>
      <section className='flex justify-between p-3 flex-wrap items-center'>
        <h1 className='text-white font-sans font-bold text-xl'>Technical krish</h1>
        <ul className='flex items-center'>
          <li className='mx-4 bg-slate-100 p-3 rounded-full'>
            <BsFillMoonStarsFill className='cursor-pointer text-cyan-600' />
          </li>
          <li className='bg-gradient-to-r from-blue-700 to-blue-800 px-4 py-1.5 rounded-lg text-white'><a href='#'>Resume</a></li>
        </ul>
      </section>
    </div>
  )
}

export default App