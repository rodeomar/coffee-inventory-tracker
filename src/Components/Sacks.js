import React, { useState } from 'react';
import sacksData from '../Data/SacksData';
import beansData from '../Data/BeansData';
import Navbar from './Navbar';

function Sacks() {
  const [selectedSack, setSelectedSack] = useState(null);
  const [newSack, setNewSack] = useState({
    typeOfBeans: '',
    poundsRemaining: 130,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSack({
      ...newSack,
      [name]: value,
    });
  };

  const handleAddSack = () => {
    if (newSack.typeOfBeans) {
      const existingSackIndex = sacksData.findIndex(
        (sack) => sack.typeOfBeans === newSack.typeOfBeans
      );

      if (existingSackIndex !== -1) {

        sacksData[existingSackIndex].poundsRemaining += 130;
      } else {

        const newSackWithId = {
          ...newSack,
          id: sacksData.length + 1,
        };
        sacksData.push(newSackWithId);
      }

      localStorage.setItem("sacksData", JSON.stringify(sacksData));

      setNewSack({
        typeOfBeans: '',
        poundsRemaining: 130,
      });
    }
  };


  return (
    <>
      <Navbar isSacksActive={true} />
      <div className="container mt-4 gradient2Color">
        <h1 className='text-light'>Coffee Sacks</h1>
        <button
          className="btn btn-primary mb-4"
          data-toggle="modal"
          data-target="#addSackModal"
        >
          Add Sack
        </button>
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

      <div
        className="modal fade"
        id="addSackModal"
        tabIndex="-1"
        aria-labelledby="addSackModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addSackModalLabel">
                Add Sack
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              > &#x2717;</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="typeOfBeans">Type of Beans:</label>
                  <select
                    className="form-control"
                    id="typeOfBeans"
                    name="typeOfBeans"
                    value={newSack.typeOfBeans}
                    onChange={handleInputChange}
                  >
                    <option value="">Select...</option>
                    {beansData.map((bean) => (
                      <option key={bean.id} value={bean.typeOfBeans}>
                        {bean.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-danger">Adding multiple sacks of the same coffee will increase the pounds in the existing sack.</p>

                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddSack}
                data-dismiss="modal"
              >
                Add Sack
              </button>
            </div>
          </div>
        </div>
      </div>


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
