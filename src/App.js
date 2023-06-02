import React, { useState } from 'react'
import { Navbar } from './Components';
import { BsFillMoonStarsFill, BsYoutube, BsArrowRightShort } from 'react-icons/bs'
import { AiFillStar,AiFillFacebook,AiFillGithub } from 'react-icons/ai'
import { resumeurl } from './Components';
import Aboutpage from './Components/Aboutpage';
import { aboutdata,aboutdata2,CoursesCards,GithubUser,buttondata,gitubuser } from './Components/index';
import heroimg from '../src/assets/herobg.webp';
import { Courses } from './Components';

const App = () => {
  return (
    <div className='min-w-full bg-[#0D1117]'>

      {/* navbar  */}
      <Navbar title="Technical krish" btn="Resume" resumeurl={resumeurl}/>

      {/* about components */}
      <Aboutpage data={aboutdata}/>

      <section className='flex justify-center items-center flex-col flex-wrap'>
        <div className='text-center'>
          <h1 className='text-white font-bold text-[38px] m-4 md:text-[50px]'>Welcome to <spam className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Technical krish pro</spam></h1>
          <p className='text-xl text-[#eee] mx-7 font-medium mx-1 capitalize bg-gradient-to-r from-white to-[#f1f1f1] text-transparent bg-clip-text md:w-[800px]'>Hands-on projects are the most practical way to learn a programming language and build your portfolio. If you're tired of building "to-do" apps and learning theory, JS Mastery Pro can help you solidify your knowledge and start taking on meaningful projects that will set the tone for your career.</p>
          <iframe className='my-3 w-full h-[500px] rounded-lg p-8' src="https://www.youtube.com/embed/_hhyA7ZJseY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </section>


      <section className='flex justify-center items-center text-white mx-4 my-4 text-center'>
        <div className='w-[800px]'>
          <h1 className='font-bold text-[34px] my-6' style={{ lineHeight: "1.3" }}>Comprehensive <br /><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Project-Based</span> Courses
            to Help You Become a <span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Technical krish</span></h1>
          <p className='text-xl text-[#eee] font-medium mx-1 capitalize bg-gradient-to-r from-white to-[#f1f1f1] text-transparent bg-clip-text'>Want to master React.js or create a stunning Web 3.0 blockchain app? Join other professional developers inside Filmpire where you'll build a Netflix clone streaming app or NFT Marketplace where you'll develop Cryptoket, a fully-functioning NFT platform.</p>
        </div>
      </section>

       {/* our Courses  */}
        <CoursesCards data={Courses}/>

      <section>
        <div className='flex justify-center flex-col items-center my-3 mx-4'>
          <h1 className='text-4xl font-bold text-white capitalize text-center font-sans md:text-5xl md:w-[900px] md:m-auto'>Ditch Theory-Driven Courses and
            <span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'> Enter the World</span> of a <span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>True Developer</span></h1>

          <div className='flex flex-wrap w-full md:w-[1300px] md:m-auto'>
            <div className='w-full group overflow-hidden block mx-5 my-8 rounded-lg cursor-pointer md:w-[500px]'>
              <img src="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmovie.3bed4872.png&w=3840&q=75" className='w-full h-[400px] object-contains' />
              <div className='inset-0 group py-5 px-10'>
                <h2 className='text-[30px] capitalize font-bold text-white'>Expert Coaching Support</h2>
                <div className='flex items-center justify-between my-4'>
                  <p className='text-[20px] text-[#eee] font-medium mx-1 capitalize text-transparent bg-clip-text text-[#A3B3BC]'>Gain 24/7 access to a private community of coders looking to advance their knowledge and experience, as well as their careers.</p>
                </div>
              </div>

            </div>

            <div className='w-full group overflow-hidden block mx-5 my-8 rounded-lg cursor-pointer md:w-[500px]'>
              <img src="https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?w=2000" className='w-full h-[400px] object-contains' />
              <div className='inset-0 group py-5 px-10'>
                <h2 className='text-[30px] capitalize font-bold text-white'>Expert Coaching Support</h2>
                <div className='flex items-center justify-between my-4'>
                  <p className='text-[20px] text-[#eee] font-medium mx-1 capitalize text-transparent bg-clip-text text-[#A3B3BC]'>Gain 24/7 access to a private community of coders looking to advance their knowledge and experience, as well as their careers.</p>
                </div>
              </div>

            </div>

          </div>


        </div>


      </section>

        {/* github users  */}
         <GithubUser data={gitubuser}/>
       


      <section className='w-full flex justify-center '>
        <div>
          <h1 className='text-[50px] my-[30px] mx-4 capitalize font-bold text-white text-center mb-6'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Launch Your Career</span> Today<br />
            With Technical krish</h1>

          <div className='w-full my-5 flex flex-wrap justify-center'> 
            {buttondata.map((items,key)=>{
              return <a key={key} className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-5 my-4 text-white text-xl' target='_blank' href={items.link}>{items.name}</a>
            })}
            
            {/* <a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-5 my-4 text-white text-xl' target='_blank' href='https://github.com/krishtechn'>Learn more</a>
            <a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-5 my-4 text-white text-xl' target='_blank' href='https://github.com/krishtechn'>Learn more</a>
            <a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-5 my-4 text-white text-xl' target='_blank' href='https://github.com/krishtechn'>Learn more</a> */}
          </div>

        </div>
      </section>


      <section className='footer mt-20'>
       <div className='w-full flex flex-wrap items-start flex-col-reverse md:flex-row'>
         <div className='flex flex-wrap w-full justify-center md:w-[700px]'>
        <ul className='text-[#A3B3BC] text-xl my-4 mx-10'>
          <li className='text-white font-bold text-2xl mb-5'>Courses</li>
          <li className='my-3'><a>Filmpire</a></li>
          <li className='my-3'><a>Cryptoket</a></li>
          <li className='my-3'><a>Javascript</a></li>
          <li className='my-3'><a>Bootcamp</a></li>
        </ul>


        <ul className='text-[#A3B3BC] text-xl my-4 mx-10'>
          <li className='text-white font-bold text-2xl mb-5'>Courses</li>
          <li className='my-3'><a>Filmpire</a></li>
          <li className='my-3'><a>Cryptoket</a></li>
          <li className='my-3'><a>Javascript</a></li>
          <li className='my-3'><a>Bootcamp</a></li>
        </ul>


        <ul className='text-[#A3B3BC] text-xl my-4 mx-10'>
          <li className='text-white font-bold text-2xl mb-5'>Courses</li>
          <li className='my-3'><a>Filmpire</a></li>
          <li className='my-3'><a>Cryptoket</a></li>
          <li className='my-3'><a>Javascript</a></li>
          <li className='my-3'><a>Bootcamp</a></li>
        </ul>
        </div>
        
       <div className='w-full my-4 px-9 md:w-[700px]'>
        <h1 className='text-3xl font-bold text-white'>Get the 2022 Front-End Web Developer Roadmap</h1>
        <p className='text-[#A3B3BC] text-[16px]'>This roadmap will provide you with a step-by-step journey and project ideas that will accelerate your career.</p>
         <div className='flex flex-col'>
          <input type='text' className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Name'/>
          <input type='email' className='mr-2 my-3 py-3 px-5 text-[#A3B3BC] border-none outline-none text-[17px] bg-[#1F2937] font-bold rounded-full drop-shadow-lg' placeholder='Your Email'/>
          <button className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-3 px-9 rounded-full my-4 text-white text-[16px]' target='_blank' href='https://github.com/krishtechn'>Learn more</button>
         </div>
       </div>
</div>
       <div className='flex flex-wrap w-full py-3 px-5 justify-between w-full'>
         <div className='flex'>
            <div className="bg-slate-100 p-2 rounded-full mx-3">
              <AiFillFacebook href='https://www.facebook.com/krish.kharal.14' />
            </div>
            <div className="bg-slate-100 p-2 rounded-full mx-4">
              <BsYoutube href='https://www.youtube.com/@softwaredeveloper33/videos' />
            </div>
            <div className="bg-slate-100 p-2 rounded-full mx-4">
              <AiFillGithub href='https://github.com/krishtechn' />
            </div>
            </div>

            <p className='text-[18px] font-bold text-[#A3B3BC] capitalize'>Copyright @<a href="/" className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-clip-text text-transparent'>Technical krish</a> {new Date().getFullYear()} || All rights reserved</p>
          </div>
      </section>
    </div>
  )
}

export default App