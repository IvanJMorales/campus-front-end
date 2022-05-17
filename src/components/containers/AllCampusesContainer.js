import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchAllCampusesThunk } from '../../store/thunks';
import AllCampusesView from '../views/AllCampusesView';
import { Component } from "react";
import Header from './Header';

class AllCampusesContainer extends Component {
    // Get all campuses data from back-end database
    componentDidMount() {
      console.log(this.props);
      this.props.fetchAllCampuses();
    }
  
    // Render All Campuses view by passing all campuses data as props to the corresponding View component
    render() {
      return (
        <div>
          <Header />
          <AllCampusesView
            allCampuses={this.props.allCampuses}
          />
        </div>
      );
    }
  }
  
  // 1. The "mapState" argument specifies the data from Redux Store that the component needs.
  // The "mapState" is called when the Store State changes, and it returns a data object of "allCampuses".
  // The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
  const mapState = (state) => {
    return {
      allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
    };
  };  
  // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
  // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
  const mapDispatch = (dispatch) => {
    return {
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    };
  };
  
  // Type check props;
  AllCampusesContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
  };
  
  // Export store-connected container by default
  // AllCampusesContainer uses "connect" function to connect to Redux Store and to read values from the Store 
  // (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(AllCampusesContainer);











/*function AllCampusesContainer(props) {
    const [campuses, setCampuses] = useState([])

    return (
        <div>
            <AllCampusesView />
        </div>
    );
}

// The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allCampuses".
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
    return {
        allCampuses: state.allCampuses //Get the state object from Reducer "allCampuses"
    };
};

// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    }
};

AllCampusesContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired
};


export default connect(mapState, mapDispatch)(AllCampusesContainer);*/
