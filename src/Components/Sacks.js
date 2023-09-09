import React, { useState } from 'react';
import sacksData from '../Data/SacksData';
import Navbar from './Navbar';

function Sacks() {
  const [selectedSack, setSelectedSack] = useState(null);

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
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedSack(sack)}
                    data-toggle="modal"
                    data-target="#sackModal"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="sackModal" tabIndex="-1" aria-labelledby="sackModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sackModalLabel">{selectedSack?.typeOfBeans} Sack Details</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => setSelectedSack(null)}>  &#x2717;</button>
            </div>
            <div className="modal-body">
              {selectedSack && (
                <div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Type of Bean</th>
                        <th>Pounds Remaining</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{selectedSack.id}</td>

                        <td>{selectedSack.typeOfBeans}</td>

                        <td>{selectedSack.poundsRemaining}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setSelectedSack(null)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sacks;
