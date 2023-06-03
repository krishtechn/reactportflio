import React from 'react'

const Signup = () => {
  return (
    <div className='w-full my-4 px-9 md:w-[700px]'>
     <h1 className='text-3xl font-bold text-white'>Get the 2022 Front-End Web Developer Roadmap</h1>
     <p className='text-[#A3B3BC] text-[16px]'>This roadmap will provide you with a step-by-step journey and project ideas that will accelerate your career.</p>
      <div className='flex flex-col'>
       <input type='text' className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Name'/>
       <input type='email' className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Email'/>
       <button className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-3 px-9 rounded-full my-4 text-white text-[16px]' target='_blank' href='https://github.com/krishtechn'>Learn more</button>
      </div>
    </div>
  )
}

export default Signup