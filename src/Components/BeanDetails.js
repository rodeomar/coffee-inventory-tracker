import React from 'react';
import { Link, useParams } from 'react-router-dom';
import beansData from '../Data/BeansData';
import Navbar from './Navbar';

function BeanDetails() {
  const { id } = useParams();
  const bean = beansData.find((bean) => bean.id === parseInt(id));

  if (!bean) {
    return <div>Bean not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Bean Details</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{bean.name}</h5>
            <p className="card-text">Origin: {bean.origin}</p>
            <p className="card-text">Price: ${bean.price}</p>
            <p className="card-text">Roast: {bean.roast}</p>
            <Link to="/Beans" className="btn btn-primary">
              Back to Beans
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeanDetails;
