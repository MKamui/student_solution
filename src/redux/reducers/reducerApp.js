import {GET_STUDENTS, GET_COURSESSTUDENT, GET_COURSES, GETSTUDENTBYID, CLEAN_STUDENT} from '../actions/actions.js' 

const initialState = {
  students: [],
  coursesStudent: [],
  courses: [],
  filterStudent: {}
};

export function reducerApp(state = initialState, action) {
  switch (action.type) {

    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      }
    case GET_COURSESSTUDENT:
      const array2 = action.payload.reduce((acc, item) => {
        const index = acc.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          acc[index].course.push(item.course);
        } else {
          acc.push({ ...item, course: [item.course] });
        }
        return acc;
      }, []);
      
      let sortedName = array2.sort((a, b) => {
              return a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : 1;
            })
      return {
        ...state,
        coursesStudent: sortedName
      }
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload
      }
    case GETSTUDENTBYID:
      const allStudents = Object.values(state.students)
      const filterStudent = allStudents.filter(student => student.s_id === action.payload)
      return {
        ...state,
        filterStudent: filterStudent[0]
      }

      case CLEAN_STUDENT:
        return{
          ...state,
          filterStudent: {}
        }
    default:
      return state;
  }
}

export default reducerApp;