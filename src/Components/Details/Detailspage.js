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

  useEffect(()=>{
    setdata(cdata);
	}, [cdata]);

  return (
    <div className='flex w-full justify-center items-center flex-col'>
        <p className='bg-gradient-to-r mt-9 from-[#ff7170] to-[#ffe57f] text-transparent text-[13px] bg-clip-text font-bold'>THE ONLY JAVASCRIPT COURSE YOU'LL EVER NEED</p>
        <h1 className=' text-white font-bold mt-9 capitalize leading-[60px] text-[45px] md:text-7xl'>Complete Path to <br/>{category}</h1>
        <p>The course covers everything you need to be an outstanding JavaScript Developer who is ready to learn any framework or library.</p>
        <Button title="Explore features" link="details"/>

        <div className='flex items-center'>
        <div className='flex text-[#fbbf24]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className='text-[17px] text-[#fff] font-medium mx-1 capitalize text-transparent bg-clip-text text-[#A3B3BC]'>4.7/5, based on 97 reviews</p>
        </div>


<section id = "details">
        <div className='flex mx-auto flex-wrap'>
            

            <div className='my-5 mx-4 text-white my-[60px] md:w-[600px]'>
                <h1 className='text-6xl font-bold'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'> Your Ticket to the JavaScript Mastery</span></h1>
                    <p className='text-[20px] text-[#D0DFFF] my-7'>This course is for you if:</p>
                 <ul className='my-4 list-disc'>
                    <li className='text-[20px] text-[#D0DFFF] my-5'>You want to gain a deep understanding of the most popular programming language in the world.</li>
                    <li className='text-[20px] text-[#D0DFFF] my-5'>You have taken other JavaScript courses but you still don't really understand JavaScript and you don't feel confident to code real-world apps.</li>
                    <li className='text-[20px] text-[#D0DFFF] my-5'>You want to get started with programming in general - JavaScript is a great language to learn how to code.</li>
                    <li className='text-[20px] text-[#D0DFFF] my-5'>
You're interested in using popular frameworks and libraries like React, Angular or Node.</li>
      
                 </ul>
            </div>
        </div>
        </section> 

  {/* our Courses  */}
  <CoursesCards data={cdata}/>   
    </div>
  )
}

export default Detailspage