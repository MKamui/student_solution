import React from 'react'
import { Link } from "react-router-dom";
import {BsEyeglasses} from 'react-icons/bs'

const Navbar = () => {
  return ( 
    <div className="px-2 flex justify-between content-center items-center w-full h-full bg-slate-100">
        <Link to='/'><h1 className="text-3xl font-bold mr-4 tracking-widest flex items-center">
            Student Solution<BsEyeglasses size={40} className='m-4'/>
            </h1></Link>
        <div className="flex pr-4">
            <Link to='/students'><button className="mr-4 px-8 py-4 text-xl">Students</button></Link>
            <Link to='/courses'><button className="mr-4 px-8 py-4 text-xl">Courses</button></Link>
            <Link to='/about'><button className="mr-4 px-8 py-4 text-xl">About</button></Link>
        </div>
    </div>
);
}

export default Navbar