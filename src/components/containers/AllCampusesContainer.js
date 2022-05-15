import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchAllCampusesThunk } from '../../store/thunks';
import AllCampusesView from '../views/AllCampusesView';

function AllCampusesContainer() {
    /*useEffect(() => {
        console.log(this.props);
        this.props.fetchAllCampuses();
    });*/

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


export default connect(mapState, mapDispatch)(AllCampusesContainer);
