import Header from './Header';
import NewStudentView from "../views/NewStudentView";
import { Component } from 'react';
import { connect } from 'react-redux';
import { 
    addStudentThunk,
    fetchAllStudentsThunk,
} from '../../store/thunks';

class NewStudentContainer extends Component {
    // Get all students data from back-end database
    componentDidMount() {
        console.log(this.props)
        this.props.fetchAllStudents();
    }

    render() {
        return (
            <div>
                <Header />
                <NewStudentView 
                    students={this.props.allStudents}
                    addStudent={this.props.addStudent}
                />
            </div>
        )
    }
}

// The following 2 input arguments are passed to the "connect" function used by "AllStudentsContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allStudents".
const mapState = (state) => {
    return {
        allStudents: state.allStudents,  // Get the State object from Reducer "allStudents"
        student: state.student,
    };
};
    // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
    // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        addStudent: (student) => dispatch(addStudentThunk(student)),
    };
};

export default connect(mapState, mapDispatch)(NewStudentContainer);