import React from 'react';
import { Link } from 'react-router-dom';
import beansData from '../Data/BeansData';
import Navbar from './Navbar';


function Beans() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1>Available Beans</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {beansData.map((bean) => (
                            <tr key={bean.id}>
                                <td>
                                    <Link to={`/Beans/${bean.id}`}>{bean.name}</Link>
                                </td>
                                <td>
                                    <Link to={`/Beans/${bean.id}`} className="btn btn-primary">
                                        Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Beans;
