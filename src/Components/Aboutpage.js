import React from 'react'
import SocialMediaLink from './SocialMediaLink';


const Aboutpage = (props) => {
    let {firsttext,lasttext,gradienttext,shorttext,btn,btnurl,heroimg} = props.data;
  return (
    <section className='flex justify-center items-start my-10 mx-10 flex-col md:flex-row'>
    <div>
      <h1 className='font-bold text-[44px] text-white leading-relaxed md:text-[60px]'><br />{firsttext}<span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'> {gradienttext}</span><br /> {lasttext}</h1>
      <p className='text-xl text-[#eee] font-medium mx-1 capitalize bg-gradient-to-r from-white to-[#f1f1f1] text-transparent bg-clip-text'>{shorttext}</p>
       
       <SocialMediaLink />
     
      <a href={btnurl} className='bg-blue-600 text-white capitalize text-xl py-3 px-8 rounded-full'>{btn}</a>
    </div>

    <div>
      <img src={heroimg} className='w-full h-1/2' />
    </div>
  </section>
  )
}

export default Aboutpage