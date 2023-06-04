import React,{useState,useEffect} from 'react';
import {useParams,useLocation} from "react-router-dom";
import Button from '../widgets/button';
import { AiFillStar, CoursesCards } from '../../Components/index';
import { Courses } from '../../backend/data';

const Detailspage = () => {
  let [data,setdata] = useState(Courses);
  let course = useParams();
  let category = course.category;
  
  // filter data with category
  let cdata = Courses.filter((items)=>{
    return items.category == category;
  })

  // let cfilterdata = Courses.filter((items)=>{
  //   return items.category == category;
  // })

  useEffect(()=>{
    setdata(cdata);
	}, [cdata]);
  
  let {courseimg,coursestitle,shortdescription,details,Course}= cdata[0];

  return (
    <div className='flex w-full justify-center items-center flex-col'>
        <p className='bg-gradient-to-r mt-9 from-[#ff7170] to-[#ffe57f] text-transparent text-[13px] bg-clip-text font-bold'>{coursestitle.toUpperCase()}</p>
        <h1 className=' text-white font-bold mt-9 capitalize leading-[60px] text-[45px] md:text-7xl'>Complete Path to <br/>{category}</h1>
        <p className='text-[21px] font-medium mx-1 capitalize text-[#A3B3BC] my-5 text-center md:w-[600px]'>{shortdescription}</p>
        <Button title="Explore features" link="details"/>

        <div className='flex items-center'>
        <div className='flex text-[#fbbf24]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className='text-[17px] font-medium mx-1 capitalize text-[#A3B3BC]'>4.7/5, based on 97 reviews</p>
        </div>


<section id = "details">
        <div className='flex mx-auto flex-wrap'>
            <div className='my-5 mx-4 text-white my-[60px] md:w-[600px]'>
                <h1 className='text-6xl font-bold'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'> Your Ticket to the JavaScript Mastery</span></h1>
                    <p className='text-[20px] text-[#D0DFFF] my-7'>This course is for you if:</p>
                 <ul className='my-4 list-disc'>
                   {details.map((items,key)=>{
                    return <li key={key} className='text-[20px] text-[#D0DFFF] my-5'>{items}</li>;
                   })}
                 </ul>
            </div>
        </div>
        </section> 

  {/* our Courses  */}
  <p className='bg-gradient-to-r mt-9 mx-7 from-[#ff7170] to-[#ffe57f] text-transparent text-[40px] bg-clip-text font-bold'>Latest Courses on {category.toUpperCase()}</p>
  <CoursesCards data={Course} detailspage={true}/>   
    </div>
  )
}

export default Detailspage