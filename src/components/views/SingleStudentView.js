/*==================================================
StudentView.js
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';


const SingleStudentView = (props) => {
    const { student, deleteStudent } = props;
  
    // Render a single Student view 
    return (
      <div>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h3>Email: {student.email}</h3>
        <Link to={`/campuses/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
        </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </div>
    );
  
};
  
export default SingleStudentView;