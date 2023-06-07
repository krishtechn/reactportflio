import React from 'react'

const PageNotFound = () => {
  return (
    <div className='flex justify-center flex-col items-center w-full py-[100px]'>
        <h1 className='text-9xl  font-bold bg-gradient-to-r from-indigo-500 to-indigo-900 text-transparent bg-clip-text'>404</h1>
        <p className='text-3xl text-white capitalize'>Page Not found</p>
        <a href='/' className='py-3 px-6 text-[14px] border text-white mt-5 cursor-pointer hover:scale-125 hover:translate-y-6 ease-linear duration-500 hover:bg-[#f0f9ff] hover:text-black'>Go to Home</a>
    </div>
  )
}

export default PageNotFound