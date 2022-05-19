/*==================================================
CampusView.js
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const SingleCampusView = (props) => {
  const {campus, deleteCampus} = props;

  if (campus.students != 0) {
    // Render a single Campus view with list of its students
    return (
      <div>
        <h1>{campus.name}</h1>
        <p>{campus.address}</p>
        <p>{campus.description}</p>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                <h2>{name}</h2>
              </Link>             
            </div>
          );
        })}
        <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </div>
    );
  } else {
      // If there are no students enrolled at the campus
      return (
        <div>
          <h1>{campus.name}</h1>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <p>There are no students enrolled at this campus</p>
          <button onClick={() => deleteCampus(campus.id)}>Delete</button>
        </div>
      )
  }
};

export default SingleCampusView;