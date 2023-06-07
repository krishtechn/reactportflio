import React, { useState } from 'react'
import { allCourses } from '../backend/data'
import ResourceCourses from './resources/ResourceCourses';

const Searchpage = () => {
    let[searchbtnclick,setsearchbtnclick] = useState(false);
  return (
    <div className='w-full'>
    <div className='flex flex-wrap justify-center items-center'>
        <input type='text' className='py-3 px-10 outline-none border-none rounded-l-full text-[14px]' placeholder='Search Course here'/>
        <button className='py-3 px-4 bg-indigo-800 text-white outline-none border-none text-[14px] rounded-r-full' onClick={()=>setsearchbtnclick(true)}>Search Courses</button>
    </div>
    <ResourceCourses rdata={allCourses} searchbtnclick={searchbtnclick}/>
    </div>
  )
}

export default Searchpage