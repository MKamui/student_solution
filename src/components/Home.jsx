import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='my-6'>
      <div className='flex justify-center mt-40'>
        <img 
        src='https://t3.ftcdn.net/jpg/01/22/14/34/360_F_122143473_7KDnyB7t3Ubi760FXQjSFn8OW0aROBtL.jpg'
        alt='Logo' className='h-300 w-300'/>
      </div>
      <div className='space-x-8 text-center my-6'>
        <Link to={'/students'}><button className='mt-10 px-8 py-4 text-xl'>Students</button></Link>
        <Link to={'/courses'}><button className='mt-10 px-8 py-4 text-xl'>Courses</button></Link>    
      </div>
    </div>
  )
}

export default Home