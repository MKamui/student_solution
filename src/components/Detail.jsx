import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getStudentByID, cleanStudent} from '../redux/actions/actions'
import axios from 'axios'
import Swal from "sweetalert2";
import Navbar from './Navbar';

const Detail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const student = useSelector((state) => state.filterStudent)
  let { id } = useParams()
  const [s_id] = useState(id);
  const [code] = useState(118044);
  const [first_name, setFirst_Name] = useState();
  const [last_name, setLast_Name] = useState();
  const [lv_id, setLv_id] = useState();
  const [group, setGroup] = useState();
  const [email, setEmail] = useState();
  const [phone_number, setPhone_number] = useState();
  const [geolocation, setGeolocation] = useState();
  const [status, setStatus] = useState();
  
  useEffect(() => {
    dispatch(getStudentByID(id))
    return () => {
      dispatch(cleanStudent())
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(s_id === "" || 
      code === "" || 
      first_name === "" || 
      last_name === "" || 
      lv_id === "" || 
      group === "" || 
      email === "" || 
      phone_number === "" || 
      geolocation === "" || 
      status === "" ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'All fields are required!',
        })} else{
    try {
      await axios.get('https://plataforma.education.city/app/web/api/index.php?action=test_update_student&code=118044',
      { 
        params: {
          s_id,
          code,
          first_name,
          last_name,
          lv_id,
          group,
          email,
          phone_number,
          geolocation,
          status
    }})
    Swal.fire({
      icon: 'success',
      title: 'Succesfull!',
      text: 'The student has been edited.',
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
      <h1>Student Detail</h1>
        <div className="min-h-screen flex justify-center items-center py-10">
          <form className="py-12 px-12 bg-white rounded-2xl w-[40%]">
              <div className="">
                <label>ID Student</label>
                <input
                  type="number"
                  name="s_id"
                  defaultValue={student.s_id}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4"
                  disabled
                />
                <label>Code</label>
                <input
                  type="number"
                  name="code"
                  defaultValue={student.code}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4"
                  disabled              
                />
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  defaultValue={student.first_name}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4 capitalize"
                  onChange={(e) => setFirst_Name(e.target.value)}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  defaultValue={student.last_name}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4 capitalize"
                  onChange={(e) => setLast_Name(e.target.value)}
                />
                <label>Level</label>
                <input
                  type="text"
                  name="lv_id"
                  defaultValue={student.lv_id}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4"
                  onChange={(e) => setLv_id(e.target.value)}
                  />
                <label>Group</label>
                <input
                  type="text"
                  name="group"
                  defaultValue={student.group}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4 capitalize"
                  onChange={(e) => setGroup(e.target.value)}
                />
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  defaultValue={student.email}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  defaultValue={student.phone_number}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4"
                  onChange={(e) => setPhone_number(e.target.value)}
                />
                <label>Geolocation</label>
                <input
                  type="text"
                  name="geolocation"
                  defaultValue={student.geolocation}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4"
                  onChange={(e) => setGeolocation(e.target.value)}
                />
                <label>Status</label>
                <input
                  type="number"
                  name="status"
                  defaultValue={student.status}
                  className="py-3 px-4 rounded-lg w-full border outline-green-500 mb-4"
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="py-3 w-64 text-xl rounded-2xl mx-1"
                  typeof="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Update Info
                </button>
                <Link to={`/students/${id}/addremove`}><button className="py-3 w-64 text-xl rounded-2xl mx-1">Add or remove a Course</button></Link>
              </div>
            </form>
      </div>
    </div>
  )
}

export default Detail