import React from 'react'
import Resourcecourse from '../../Components/Resourcecourse'
import { popularresource } from '../../backend/data'

const ResourceCourses = ({rdata,title,searchbtnclick}) => {
  return (
    <section>
   <div className='flex flex-col mx-3'>
   <h1 className='text-4xl mx-4 font-bold text-white capitalize my-6 font-sans md:text-3xl md:w-[1200px] md:ml-10'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>{title}</span></h1>
    
    <div className='flex justify-center items-center w-full flex-wrap'>
    <Resourcecourse rdata={rdata} searchbtnclick={searchbtnclick}/>
    </div>
    
   </div>


</section> 
  )
}

export default ResourceCourses