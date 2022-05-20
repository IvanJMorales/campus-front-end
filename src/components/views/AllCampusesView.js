import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../css/AllCampusesView.css";

function AllCampusesView(props) {
    const { allCampuses, deleteCampus } = props;
    // If there is no campus, display a message.
    if(!props.allCampuses.length) {
        return (
            <div>
                <p>There are no campuses</p>
                <Link to={`newCampus`}>
                    <button>Add New Campus</button>
                </Link>
            </div>
        )
    }

    // If there is at least one campus, render All Campuses view
    return (
        <div>
            <h1>All Campuses</h1>
            {allCampuses.map((campus) => (
                <div className="list-container" key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>
                        <h2>{campus.name}</h2>
                    </Link>

                    <h4>campus id: {campus.id}</h4>
                    <p>{campus.address}</p>
                    <p>{campus.description}</p>
                    <br></br>
                    <Link to={`editcampus`}>
                        <button>Edit Campus</button>
                    </Link>
                    <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
                </div>
            ))}
            <br></br>
            <Link to={`/newcampus`}>
                <button>Add New Campus</button>
            </Link>
            

        </div>
    )
}

AllCampusesView.propTypes = {
    allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;