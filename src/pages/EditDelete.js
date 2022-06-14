import React from "react";
import Title from "../components/Title";
import {Link} from "react-router-dom";

function EditDelete({allRents, deleteRent}) {

    return (
        <div className="container">
            <Title title={"Home"}/>
            <div className="row">
                <div className="col-10 offset-1">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Phone</th>
                            <th>Provider</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {allRents.map((rent, index) => {
                            return (
                                <tr key={index}>
                                    <td>{rent.id}</td>
                                    <td>{rent.firstName}</td>
                                    <td>{rent.lastName}</td>
                                    <td>{rent.phone}</td>
                                    <td>{rent.provider}</td>
                                    <td>{rent.startDate}</td>
                                    <td>{rent.endDate}</td>
                                    <td>
                                        <Link to={`/edit/${index}`} className="btn btn-warning">Edit</Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            deleteRent(index)
                                        }}>Delete
                                        </button>
                                    </td>

                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EditDelete;
