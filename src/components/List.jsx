import React, {useEffect} from 'react'
import {getStudents, getCoursesStudent} from '../redux/actions/actions'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import {GiNotebook} from 'react-icons/gi'


const List = () => {
  const dispatch = useDispatch()
  const coursesStudents = useSelector((state) => state.coursesStudent)

  useEffect(() => {
    dispatch(getStudents())
    dispatch(getCoursesStudent())
  }, [])

  return (
    <div className='text-center'>
      <Navbar/>
      <h1 className='flex items-center justify-center'>Students<GiNotebook className='m-4'/></h1>
      <table className='w-[50%] border-2 border-green-600 ml-[25%] mb-10'>
      <thead>
          <tr className="font-semibold text-center text-green-800">
            <th className="px-4 py-3">First Name</th>
            <th className="px-4 py-3">Last Name</th>
            <th className="px-4 py-3">Courses</th>
            <th className="px-4 py-3">More Info</th>
          </tr>
        </thead>
      <tbody>
      {coursesStudents.map(e =>
        <tr className="border-2 border-green-600">
        <td className="px-4 py-3 text-xl">{e.name}</td>
        <td className="px-4 py-3 text-xl">{e.lastname}</td>
        <td className="px-4 py-3">{e.course.map( c => <p>{c}</p>)}</td>
        <td className="px-4 py-3"><Link to={`/students/${e.id}`}><button className='p-4'>Info</button></Link></td>
        </tr>
      )}
      </tbody>
      </table>
    </div>
  )
}

export default List