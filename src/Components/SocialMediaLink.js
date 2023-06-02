import React from 'react'
import {AiFillFacebook,BsYoutube,AiFillGithub,codingimg} from '../Components/index';

const SocialMediaLink = () => {
  return (
    <div className='flex my-5 justify-center'>
    <div className="bg-slate-100 p-2 rounded-full mx-3">
      <a href='https://www.facebook.com/krish.kharal.14'><AiFillFacebook /></a>
    </div>
    <div className="bg-slate-100 p-2 rounded-full mx-4">
      <BsYoutube href='https://www.youtube.com/@softwaredeveloper33/videos' />
    </div>
    <div className="bg-slate-100 p-2 rounded-full mx-4">
      <AiFillGithub href='https://github.com/krishtechn' />
    </div>
  </div>
  )
}

export default SocialMediaLink