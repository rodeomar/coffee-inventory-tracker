import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import beansData from '../Data/BeansData';
import Navbar from './Navbar';


function Beans() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    let filteredBeans = beansData;
    if (name !== null) {
        filteredBeans = filteredBeans.filter((bean) => {
            return bean.name.toLowerCase().includes(name.toLowerCase());
        });
    }
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
                        {filteredBeans.map((bean) => (
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
