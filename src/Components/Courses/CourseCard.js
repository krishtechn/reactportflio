import React from 'react'
import {AiFillStar} from '../index';

const CourseCard = (props) => {
  let {courseimg,coursestitle,category,shortdescription} = props.data;
  let detailspage = props.detailspage;
  
  return (
    <div className='w-full group overflow-hidden block mx-5 bg-[#161B22] my-8 rounded-lg cursor-pointer md:w-[500px] overflow-hidden h-[550px]'>
    <img src={courseimg} className='w-full h-[400px] object-contains hover:scale-125 duration-700 ease-in-out' />
    <div className='inset-0 group py-5 px-10'>
      <h2 className='text-[20px] capitalize font-semibold text-[#D0DFFF] line-clamp-1'>{coursestitle}</h2>
      <div className='flex items-center justify-between my-4'>
        <div className='flex text-[#fbbf24]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className='text-[16px] text-[#A3B3BC] font-medium mx-1 capitalize'>4.7/5, based on 97 reviews</p>
      </div>
    </div>

    <div className="py-5 px-10  bg-[#161B22] relative top-[-290px] transition-all duration-700 h-full transform
                        translate-y-8 opacity-0
                        group-hover:opacity-100
                        group-hover:translate-y-0">
      <h2 className='text-[#D0DFFF] text-[20px] capitalize font-semibold'>{coursestitle}</h2>
      <div className='flex items-center justify-between my-4'>
        <div className='flex text-[#fbbf24]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <p className='text-[16px] text-[#A3B3BC] font-medium mx-1 capitalize'>4.7/5, based on 97 reviews</p>
      </div>
      <p className='text-[16px] my-5 text-[#A3B3BC] font-medium mx-1 capitalize bg-gradient-to-r from-white to-[#f1f1f1] line-clamp-3 text-transparent bg-clip-text'>{shortdescription}</p>
      <div className='flex w-full justify-end'>
        {detailspage == true ? <a href={`../Videos/${category}/${coursestitle}`} className='px-10 font-bold py-4 text-xl item-center justify-between text-white bg-blue-600 rounded-full'>
          <span className='py-3'>Learn more</span>
        </a>:<a href={`courses/${category}`} className='px-10 font-bold py-4 text-xl item-center justify-between text-white bg-blue-600 rounded-full'>
          <span className='py-3'>Learn more</span>
        </a>}
      </div>
    </div>
  </div>
  )
}

export default CourseCard