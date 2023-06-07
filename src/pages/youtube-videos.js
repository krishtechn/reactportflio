import React from 'react'
import { CoursesCards } from '../Components'
import { Courses } from '../Components'
import ResourceCourses from './resources/ResourceCourses'
import { popularresource } from '../backend/data'

const youtube_videos = () => {
  return (
    <>
 <ResourceCourses rdata={popularresource} title="Most Popular youtube video"/>  

 <ResourceCourses rdata={popularresource} title="Android development courses"/>  

 <ResourceCourses rdata={popularresource} title="React.js Mastery Courses"/>  

  {/* our Courses  */}
  <CoursesCards data={Courses}/>
  </>
  )
}

export default youtube_videos