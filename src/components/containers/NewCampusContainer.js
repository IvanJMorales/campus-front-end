import Header from './Header';
import NewCampusView from "../views/NewCampusView";
import { Component } from 'react';
import { connect } from 'react-redux';
import { 
    addCampusThunk,
    fetchAllCampusesThunk,
} from '../../store/thunks';

class NewStudentContainer extends Component {
    // Get all students data from back-end database
    componentDidMount() {
        console.log(this.props)
        this.props.fetchAllCampuses();
    }

    render() {
        return (
            <div>
                <Header />
                <NewCampusView 
                    allCampuses={this.props.allCampuses}
                    addCampus={this.props.addCampus}
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
        allCampuses: state.allCampuses,  // Get the State object from Reducer "allStudents"
        campus: state.campus,
    };
};
    // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
    // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    };
};

export default connect(mapState, mapDispatch)(NewStudentContainer);