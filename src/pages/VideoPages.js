import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Courses} from '../backend/data';

const VideoPages = () => {
  let urlcategory = useParams();
  let[videodata,setvideodata] = useState(Courses);
  let[video,setvideo] = useState([]);
  console.log(urlcategory.vcategory);
  console.log(urlcategory.category);


  let filterdata = videodata.filter((items)=>{
    return items.category == urlcategory.category;
  })

  let videos;
  let d = filterdata[0].Course.filter((items)=>{
    videos = items.video;
    return items.coursestitle == urlcategory.vcategory;
  });

  // d.map((items)=>{
  //   console.log(items);
  // })

  useEffect(()=>{
    setvideo(d[0].video);
  })

  // console.log(video);

  
  // let filtervideo = filterdata[0].Course.map((items)=>{
  //   return items.coursestitle == "Android studio";
  // }) 
  
  // filterdata.map((items)=>{
  //   console.log(items);
  // });

  return (
    <section className='w-full'>
    <div className='flex flex-wrap md:mx-auto md:w-[1400px]'>
         {video.map((items)=>{
           return <iframe className='my-3 w-full h-[500px] rounded-lg p-8 md:w-[700px]' src={items.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        })}
        
         </div>
    </section>
  )
}

export default VideoPages