import React from 'react'
import Aboutpage from '../Components/Aboutpage';
import { aboutdata, aboutdata2, CoursesCards, GithubUser, Footer, buttondata, gitubuser,ReactCardSlider, LatestProjects } from '../Components/index';
import { Courses } from '../Components/index';
import ResourceCourses from './resources/ResourceCourses';
import { popularresource } from '../backend/data';

const sliderClick = ()=>{
  alert("hello world");
}

const slides = [
  {img:"https://picsum.photos/200/150",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
  {img:"https://picsum.photos/200/150",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
  {img:"https://picsum.photos/200/350",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
  {img:"https://picsum.photos/200/150",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
  {img:"https://picsum.photos/200/150",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
  {img:"https://picsum.photos/200/150",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
  {img:"https://picsum.photos/200/150",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
]
const LandingPages = () => {

  return (
    <>

{/* <Detailspage /> */}

 {/* /* about components */}
 <Aboutpage data={aboutdata}/>

 <section className='flex justify-center items-center flex-col flex-wrap'>
   <div className='text-center'>
     <h1 className='text-white font-bold text-[38px] m-4 md:text-[50px]'>Welcome to <spam className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Technical krish pro</spam></h1>
     <p className='text-xl text-[#eee] mx-7 font-medium mx-1 capitalize bg-gradient-to-r from-white to-[#f1f1f1] text-transparent bg-clip-text md:w-[800px]'>Hands-on projects are the most practical way to learn a programming language and build your portfolio. If you're tired of building "to-do" apps and learning theory, JS Mastery Pro can help you solidify your knowledge and start taking on meaningful projects that will set the tone for your career.</p>
     <iframe className='my-3 w-full h-[500px] rounded-lg p-8' src="https://www.youtube.com/embed/_hhyA7ZJseY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
 </section>

 <LatestProjects />


 <section className='flex justify-center items-center text-white mx-4 my-4 text-center'>
   <div className='w-[800px]'>
     <h1 className='font-bold text-[34px] my-6' style={{ lineHeight: "1.3" }}>Comprehensive <br /><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Project-Based</span> Courses
       to Help You Become a <span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Technical krish</span></h1>
     <p className='text-xl text-[#eee] font-medium mx-1 capitalize bg-gradient-to-r from-white to-[#f1f1f1] text-transparent bg-clip-text'>Want to master React.js or create a stunning Web 3.0 blockchain app? Join other professional developers inside Filmpire where you'll build a Netflix clone streaming app or NFT Marketplace where you'll develop Cryptoket, a fully-functioning NFT platform.</p>
   </div>
 </section>

  {/* our Courses  */}
   <CoursesCards data={Courses}/>

  
   {/* github users  */}
    <GithubUser data={gitubuser}/>

  <ResourceCourses rdata={popularresource} title="Ditch Theory-Driven Courses and
Enter the World of a True Developer"/>



{/* launch your career   */}
 <section className='w-full flex justify-center '>
   <div>
     <h1 className='text-[50px] my-[30px] mx-4 capitalize font-bold text-white text-center mb-6'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Launch Your Career</span> Today<br />
       With Technical krish</h1>

     <div className='w-full my-5 flex flex-wrap justify-center'> 
       {buttondata.map((items,key)=>{
         return <a key={key} className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-5 my-4 text-white text-xl' target='_blank' href={items.link}>{items.name}</a>
       })}
     </div>

   </div>
 </section>

</>
  )
}

export default LandingPages