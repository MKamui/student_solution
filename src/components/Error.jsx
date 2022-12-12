import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center'>
      <h1>Wrong page</h1>
      <div className='flex justify-center'>
      <img 
      src='https://us.123rf.com/450wm/andrewgenn/andrewgenn1504/andrewgenn150400136/38884273-caricatura-de-ni%C3%B1a-de-colegio-perdi%C3%B3-en-el-campus-y-mirando-el-mapa-.jpg?ver=6'
      alt='Logo' className='h-100 w-100'/>
      </div>
      <Link to={'/'}><button className="mt-10 px-8 py-4 text-xl">Return Home</button></Link>
    </div>
  )
}

export default Error