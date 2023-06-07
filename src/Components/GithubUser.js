import React from 'react'

const GithubUser = (props) => {
    let {centertext,gradienttext,gradientlasttext,shorttext,userprofile} = props.data;
  return (
<section className='w-full my-8'>
        <div className='w-full flex justify-center items-start flex-wrap'>
          <div className='text-white w-full mb-[30px] mx-6 md:w-[1000px]'>
            <h1 className='text-[50px] capitalize font-bold'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>{gradienttext}</span> {centertext} <span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>{gradientlasttext}</span></h1>
            <p className='text-[#A3B3BC] text-xl my-4'>{shorttext}</p>
            <a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full hover:scale-150' target='_blank' href='https://github.com/krishtechn'>Learn more</a>
          </div>

          <img src={userprofile} className='w-[200px] h-[200px] object-cover  rounded-full' />
        </div>

      </section>
  )
}

export default GithubUser