import * as at from './actionTypes';
// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

/*****************************START OF CAMPUS ACTION CREATOR********************************/

// All Campuses
export const fetchAllCampuses = (campuses) => {
  return {
    type: at.FETCH_ALL_CAMPUSES,
    payload: campuses,
  };
};

// Single Campus
export const fetchCampus = (campus) => {
  return {
    type: at.FETCH_CAMPUS,
    payload: campus,
  };
};

// Add Campus
export const addCampus = (campus) => {
  return {
    type: at.ADD_CAMPUS,
    payload: campus,
  };
};

// Delete Campus
export const deleteCampus = (campusId) => {
  return {
    type: at.DELETE_CAMPUS,
    payload: campusId,
  };
};

// Edit Campus
export const editCampus = (campus) => {
  return {
    type: at.EDIT_CAMPUS,
    payload: campus,
  };
};


/*****************************END OF CAMPUS ACTION CREATOR********************************/

/*****************************START OF STUDENT ACTION CREATOR********************************/

// All Students
export const fetchAllStudents = (students) => {
  return {
    type: at.FETCH_ALL_STUDENTS,
    payload: students,
  };
};

// Single Student
export const fetchStudent = (student) => {
  return {
    type: at.FETCH_STUDENT,
    payload: student,
  };
};

// Add Student
export const addStudent = (student) => {
  console.log("addStudent called")
  return {
    type: at.ADD_STUDENT,
    payload: student,
  };
};

// Delete Student
export const deleteStudent = (studentId) => {
  return {
    type: at.DELETE_STUDENT,
    payload: studentId,
  };
};

// Edit Student
export const editStudent = (student) => {
  return {
    type: at.EDIT_STUDENT,
    payload: student,
  };
};

/*****************************END OF STUDENT ACTION CREATOR********************************/
