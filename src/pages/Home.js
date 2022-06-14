import React from "react";
import Title from "../components/Title";

function Home({allRents}) {
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

export default Home;
