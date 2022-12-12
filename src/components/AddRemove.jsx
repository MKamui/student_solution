import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getStudentByID, getCourses} from '../redux/actions/actions'
import axios from 'axios'
import Swal from "sweetalert2";
import Navbar from './Navbar';

const AddRemove = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const student = useSelector((state) => state.filterStudent)
  let { id } = useParams()
  const courses = useSelector((state) => state.courses)
  const coursesArray = Object.values(courses)
  const [s_id] = useState(id);
  const [code] = useState(118044);
  const [c_id, setC_id] = useState("");

  useEffect(() => {
    dispatch(getStudentByID(id))
    dispatch(getCourses())
  }, [])

  const handleLink = async (e) => {
    e.preventDefault();
    if(s_id === "" || 
      code === "" || 
      c_id === "" ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'All fields are required!',
        })} else {
    try {
      await axios.get('https://plataforma.education.city/app/web/api/index.php?action=test_link_course&code=118044',
      { 
        params: {
          s_id,
          code,
          c_id
    }})
    Swal.fire({
      icon: 'success',
      title: 'Succesfull!',
      text: 'The course has been added',
    }) 
    navigate('/students')    
    } catch (error) {
      console.log(error)
    }
  }
  };

  const handleUnlink = async (e) => {
    e.preventDefault();
    if(s_id === "" || 
      code === "" || 
      c_id === "" ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'All fields are required!',
        })} else {
    try {
      axios.get('https://plataforma.education.city/app/web/api/index.php?action=test_unlink_course&code=118044',
      { 
        params: {
          s_id,
          code,
          c_id
    }})
    Swal.fire({
      icon: 'success',
      title: 'Succesfull!',
      text: 'The course has been eliminated.',
    })
    navigate('/students')
    } catch (error) {
      console.log(error)
    }
  }
  };

  return (
    <div className='text-center'>
      <Navbar/>
      <h1>Add or remove a Course</h1>
      <div className="flex items-center justify-center py-10 bg-white rounded-2xl mx-72">
        <div className="mx-10">
          <h2 className='font-bold text-green-900 text-xl m-4'>List of Courses</h2>
          <table className='border-2 border-green-600'>
          <thead>
              <tr className="font-semibold text-green-800">
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
        <div>
          <form className="mx-10">
            <h2 className='font-bold text-green-900 text-xl m-4'>Add or Delete a Course</h2>
            <div className='flex flex-col'>
            <label>ID Student</label>
              <input
                type="number"
                defaultValue={student.s_id}
                className="py-3 px-4 rounded-lg border outline-green-500 mb-4"
                disabled
              />
            <label>Code</label>
              <input
                type="number"
                name="code"
                defaultValue={student.code}
                className="py-3 px-4 rounded-lg border outline-green-500 mb-4"
                disabled              
              />
            <label>Code of Course</label>
              <input
                type="number"
                name="c_id"
                className="py-3 px-4 rounded-lg border outline-green-500 mb-4 capitalize"
                onChange={(e) => setC_id(e.target.value)}
              />
            </div>
            <div className="text-center mt-6">
                  <button
                    className="py-3 w-64 text-xl rounded-2xl mx-1"
                    typeof="submit"
                    onClick={(e) => handleLink(e)}
                  >
                    Link Course
                  </button>
                  <button
                    className="py-3 w-64 text-xl rounded-2xl mx-1"
                    typeof="submit"
                    onClick={(e) => handleUnlink(e)}
                  >
                    Delete Course
                  </button>
            </div>
          </form>
          </div>
        </div>
    </div>
  )
}

export default AddRemove