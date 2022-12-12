import axios from 'axios'

export const GET_STUDENTS = "GET_STUDENTS";
export const GET_COURSES = 'GET_COURSES'
export const GET_COURSESSTUDENT = "GET_COURSESSTUDENT"
export const GETSTUDENTBYID = 'GETSTUDENTBYID'
export const CLEAN_STUDENT = 'CLEAN_STUDENT'

export const getStudents = () => async (dispatch) => {
    const res = await axios('https://plataforma.education.city/app/web/api/index.php?action=test_get_students&code=118044');
      return dispatch({ type: 'GET_STUDENTS', payload: res.data.data.ar_students });
  };

export const getCourses = () => async (dispatch) => {
  const res = await axios('https://plataforma.education.city/app/web/api/index.php?action=test_get_courses&code=118044')
    return dispatch({type: 'GET_COURSES', payload: res.data.data.ar_courses })
}

export const getCoursesStudent = () => async (dispatch) => {
  const cxs = await axios('https://plataforma.education.city/app/web/api/index.php?action=test_get_courses_x_student&code=118044')
  const students = await axios('https://plataforma.education.city/app/web/api/index.php?action=test_get_students&code=118044')
  const courses = await axios('https://plataforma.education.city/app/web/api/index.php?action=test_get_courses&code=118044')

  const cxsData = cxs.data.data.ar_cxs
  const studentsData = students.data.data.ar_students
  const coursesData = courses.data.data.ar_courses

  const result = Object.entries(cxsData).map(([key, value]) => {
    return {
      name: studentsData[value.s_id].first_name,
      lastname: studentsData[value.s_id].last_name,
      course: coursesData[value.c_id].name,
      id: studentsData[value.s_id].s_id
    }
  })

  return dispatch({type: 'GET_COURSESSTUDENT', payload: result})
}

export const getStudentByID = (id) => async (dispatch) => {
  return dispatch({type: 'GETSTUDENTBYID', payload: id })
}

export const cleanStudent = () => async (dispatch) => {
  return dispatch({type: 'CLEAN_STUDENT'})
}