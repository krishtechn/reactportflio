import React from 'react'

const button = (props) => {
  return (
<a className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] py-4 px-10 rounded-full mx-5 my-4 text-white text-xl hover:scale-150' href={props.link}>{props.title}</a>
  )
}

export default button