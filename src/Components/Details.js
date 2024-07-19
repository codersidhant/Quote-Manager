// Details.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const location = useLocation();
    const userDetails = location.state?.userDetails;

    if (!userDetails) {
        return <div className="details-page"><p className="no-details">No user details available.</p></div>;
    }

    return (
        <div className="details-page">
            <h1>User Details</h1>
            <div className="table-container">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{userDetails.name}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>{userDetails.age}</td>
                        </tr>
                        <tr>
                            <th>Sex</th>
                            <td>{userDetails.sex}</td>
                        </tr>
                        <tr>
                            <th>Street</th>
                            <td>{userDetails.street}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{userDetails.city}</td>
                        </tr>
                        <tr>
                            <th>Zip</th>
                            <td>{userDetails.zip}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{userDetails.state}</td>
                        </tr>
                        <tr>
                            <th>Vehicle Model</th>
                            <td>{userDetails.vehicleModel}</td>
                        </tr>
                        <tr>
                            <th>Vehicle Made</th>
                            <td>{userDetails.vehicleMade}</td>
                        </tr>
                        <tr>
                            <th>Vehicle Year</th>
                            <td>{userDetails.vehicleYear}</td>
                        </tr>
                        <tr>
                            <th>Vehicle Mileage</th>
                            <td>{userDetails.vehicleMileage}</td>
                        </tr>
                        <tr>
                            <th>Coverage</th>
                            <td>{userDetails.coverage}</td>
                        </tr>
                        <tr>
                            <th>Quote Number</th>
                            <td>{userDetails.quoteNo}</td>
                        </tr>
                        <tr>
                            <th>Created At</th>
                            <td>{userDetails.createdAt}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Details;
