import React, { useState } from 'react'
import { latestproject } from '../../backend/data'
import { useEffect } from 'react';

const LatestProject = () => {
  let [project,setproject] = useState(latestproject);

  const filtercategory = (category)=>{
    let filterproject = project.filter((items)=>{
      return items.category == category;
    })
    console.log(filterproject);
    setproject(filterproject);
  }
  

  return (
    <>
        <div className='flex flex-wrap justify-center items-center w-full'>
    <a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-3 my-4 text-white text-xl cursor-pointer' onClick={()=>setproject(latestproject)}>All</a>
    <a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-3 my-4 text-white text-xl cursor-pointer' onClick={()=>filtercategory("web")}>web development</a>
    <a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-3 my-4 text-white text-xl cursor-pointer' onClick={()=>filtercategory("app")}>App development</a>
    </div>
    <div className='flex flex-wrap w-full md:m-auto'>
        
    {project.map((items)=>{
        let {img,title,link,category} = items;
        return  <div className='w-full shadow-lg group overflow-hidden block mx-5 my-1 rounded-lg cursor-pointer md:w-[450px] md:m-auto'>
          <img src={img} className='w-full object-contain hover:scale-125 ease-in-out duration-700' />
          <div className='inset-0 group py-2'>
            <div className='flex items-center justify-between my-4'>
              <p className='text-[25px] font-medium mx-1 capitalize bg-clip-text text-[#A3B3BC]'>{title}</p>
            </div>
          </div>
  
        </div>
    })}
    </div>
  
    </>
  )
}

export default LatestProject