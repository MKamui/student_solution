import React from 'react'
import Navbar from './Navbar';
import {BsLinkedin, BsGithub, BsFillBriefcaseFill, BsFilePersonFill} from 'react-icons/bs'

const About = () => {
  return (
    <div className='text-center'>
      <Navbar/>
      <h1 className='flex items-center justify-center'>Info About Me<BsFilePersonFill className='m-4'/></h1>
        <div className="flex justify-center py-10">
          <div className="bg-white rounded-2xl w-[40%]">
            <p className='m-10 font-bold text-green-800'>You can see my Info in the links below</p>
            <div className='flex justify-center m-10 space-x-12'>
            <a href='https://www.linkedin.com/in/mario-franco-427904178/'><BsLinkedin size={50} className='hover:scale-110'/></a>
            <a href='https://github.com/MKamui'><BsGithub size={50} className='hover:scale-110'/></a>
            <a href='https://portfolio-mario-franco.vercel.app/'><BsFillBriefcaseFill size={50} className='hover:scale-110'/></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About