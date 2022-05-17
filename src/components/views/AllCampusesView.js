import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../css/AllCampusesView.css";

function AllCampusesView(props) {
    // If there is no campus, display a message.
    if(!props.allCampuses.length) {
        return <h1>There are no campuses</h1>
    }

    // If there is at least one campus, render All Campuses view
    return (
        <div>
            <div>ALL CAMPUS VIEW</div>
            {props.allCampuses.map((campus) => (
                <div className="list-container" key={campus.id}>
                    <Link to={`/campus/${campus.id}`}>
                        <h2>{campus.name}</h2>
                    </Link>

                    <h4>campus id: {campus.id}</h4>
                    <p>{campus.address}</p>
                    <p>{campus.description}</p>
                </div>
            ))}
            <Link to={`/`}>
                <button>Add New Campus</button>
            </Link>

        </div>
    )
}

AllCampusesView.propTypes = {
    allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;