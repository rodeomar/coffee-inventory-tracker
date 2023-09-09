import React from 'react';
import { Link } from 'react-router-dom';
import sacksData from '../Data/SacksData';
import Navbar from './Navbar';

function Sacks() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Coffee Sacks</h1>
        <div className="row">
          {sacksData.map((sack) => (
            <div key={sack.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{sack.typeOfBeans} Sack</h5>
                  <p className="card-text">Pounds Remaining: {sack.poundsRemaining}</p>
                  <Link to={`/Sacks/${sack.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sacks;
