import React, {useEffect} from 'react'
import {getCourses} from '../redux/actions/actions'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from './Navbar';
import {ImBooks} from 'react-icons/im'


const Courses = () => {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses)
  const coursesArray = Object.values(courses)

  useEffect(() => {
    dispatch(getCourses())
  }, [])

  return (
    <div className='text-center'>
      <Navbar/>
      <h1 className='flex items-center justify-center'>Courses<ImBooks className='m-4' size={45}/></h1>
      <table className='w-[50%] border-2 border-green-600 ml-[25%]'>
      <thead>
          <tr className="font-semibold text-center text-green-800">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Credits</th>
          </tr>
        </thead>
      <tbody>
      {coursesArray.map(e =>
        <tr className="border-2 border-green-600">
        <td className="px-4 py-3">{e.c_id}</td>
        <td className="px-4 py-3">{e.name}</td>
        <td className="px-4 py-3">{e.credits}</td>
        </tr>
      )}
      </tbody>
      </table>
    </div>
  )
}

export default Courses