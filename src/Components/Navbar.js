import React from 'react'
import {BsFillMoonStarsFill} from '../Components/index';

const Navbar = ({title,btn,resumeurl}) => {
  let ChangeColor = ()=>{
      localStorage.setItem("bgcolor","#1e1b4b");
      document.body.style.backgroundColor+=localStorage.getItem("bgcolor");
  }
  return (
<section className='flex justify-between p-3 flex-wrap items-center fixed top-0 left-0 right-0 bg-[#0D1117] z-20'>
        <a href="/" className='text-white font-sans font-bold text-xl'>{title}</a>
        <ul className='flex items-center'>      
          <li className='mx-4 bg-slate-100 p-3 rounded-full' onClick={()=>ChangeColor()}>
            <BsFillMoonStarsFill className='cursor-pointer text-cyan-600' />
          </li>
          <li className='bg-gradient-to-r from-blue-700 to-blue-800 px-5 py-2 rounded-full text-white'><a href={resumeurl} download={true}>{btn}</a></li>
          <a href='/auth/Signup' className='mx-4 bg-slate-100 py-2 px-6 rounded-full'>Signup</a>
        </ul>
      </section>

  )
}

export default Navbar