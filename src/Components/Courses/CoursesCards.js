import React from 'react'
import CourseCard from './CourseCard'

const CoursesCards = (props) => {
  console.log(props);
  return (
    <section>
    <div className='flex flex-wrap w-full justify-center h-full items-center'>
       {props.data.map((items,index)=>{
           return <CourseCard data={items} key={index} detailspage={props.detailspage}/>
       })}
    </div>
  </section>
  )
}

export default CoursesCards