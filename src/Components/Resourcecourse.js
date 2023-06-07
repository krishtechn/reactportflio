import React from 'react'

const ResourceCourse = (props) => {
  return (
    <>
        {props.rdata.map((items)=>{
      let {id,img,link} = items;
      return <a href={link}>
        <div className='flex flex-wrap my-5 w-full md:w-[450px] md:m-auto'>
      <div className='w-full shadow-lg group overflow-hidden block mx-5 my-1 rounded-lg cursor-pointer'>
        <img src={img} className='md:w-[400px] object-contain hover:scale-125 ease-in-out duration-700 w-full' />
        <div className='inset-0 group py-2'>
          <div className='flex items-center justify-between my-4'>
            <p className='text-[20px] font-medium mx-1 capitalize bg-clip-text text-[#A3B3BC]'>Gain 24/7 access to a private community of coders looking to advance their knowledge and experience, as well as their careers.</p>
          </div>
        </div>

      </div>
    </div>
      </a>
    })}
    </>

  )
}

export default ResourceCourse