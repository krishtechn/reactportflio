import React from 'react'
import {AiFillFacebook,BsYoutube,AiFillGithub} from '../Components/index';

const Footer = () => {
  return (
    <section className='footer mt-20'>
    <div className='w-full flex flex-wrap items-start flex-col-reverse md:flex-row'>
      <div className='flex flex-wrap w-full justify-center md:w-[700px]'>
     <ul className='text-[#A3B3BC] text-xl my-4 mx-10'>
       <li className='text-white font-bold text-2xl mb-5'>Courses</li>
       <li className='my-3'><a>Filmpire</a></li>
       <li className='my-3'><a>Cryptoket</a></li>
       <li className='my-3'><a>Javascript</a></li>
       <li className='my-3'><a>Bootcamp</a></li>
     </ul>


     <ul className='text-[#A3B3BC] text-xl my-4 mx-10'>
       <li className='text-white font-bold text-2xl mb-5'>Courses</li>
       <li className='my-3'><a>Filmpire</a></li>
       <li className='my-3'><a>Cryptoket</a></li>
       <li className='my-3'><a>Javascript</a></li>
       <li className='my-3'><a>Bootcamp</a></li>
     </ul>


     <ul className='text-[#A3B3BC] text-xl my-4 mx-10'>
       <li className='text-white font-bold text-2xl mb-5'>Courses</li>
       <li className='my-3'><a>Filmpire</a></li>
       <li className='my-3'><a>Cryptoket</a></li>
       <li className='my-3'><a>Javascript</a></li>
       <li className='my-3'><a>Bootcamp</a></li>
     </ul>
     </div>
     
    <div className='w-full my-4 px-9 md:w-[700px]'>
     <h1 className='text-3xl font-bold text-white'>Get the {new Date().getFullYear()} Front-End Web Developer Roadmap</h1>
     <p className='text-[#A3B3BC] text-[16px]'>This roadmap will provide you with a step-by-step journey and project ideas that will accelerate your career.</p>
      <div className='flex flex-col'>
       <input type='text' className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Name'/>
       <input type='email' className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Email'/>
       <button className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-3 px-9 rounded-full my-4 text-white text-[16px]' target='_blank' href='https://github.com/krishtechn'>Learn more</button>
      </div>
    </div>
</div>
    <div className='flex flex-wrap w-full py-3 px-5 justify-between w-full'>
      <div className='flex'>
         <div className="bg-slate-100 p-2 rounded-full mx-3">
           <AiFillFacebook href='https://www.facebook.com/krish.kharal.14' />
         </div>
         <div className="bg-slate-100 p-2 rounded-full mx-4">
           <BsYoutube href='https://www.youtube.com/@softwaredeveloper33/videos' />
         </div>
         <div className="bg-slate-100 p-2 rounded-full mx-4">
           <AiFillGithub href='https://github.com/krishtechn' />
         </div>
         </div>

         <p className='text-[18px] font-bold text-[#A3B3BC] capitalize'>Copyright @<a href="/" className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-clip-text text-transparent'>Technical krish</a> {new Date().getFullYear()} || All rights reserved</p>
       </div>
   </section>
  )
}

export default Footer