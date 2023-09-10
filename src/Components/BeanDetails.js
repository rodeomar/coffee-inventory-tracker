import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import beansData from '../Data/BeansData';
import sacksData from '../Data/SacksData';
import Navbar from './Navbar';

function BeanDetails() {
  const { id } = useParams();
  const bean = beansData.find((bean) => bean.id === parseInt(id));
  const [sellPounds, setSellPounds] = useState(1);

  const sellBean = () => {
    const correspondingSack = sacksData.find((sack) => sack.typeOfBeans === bean.name);

    if (correspondingSack === undefined) {
      alert('OUT OF STOCK');
    } else {
      const poundsToSell = parseInt(sellPounds);
      if (poundsToSell <= 0) {
        alert('Please enter a valid number of pounds to sell.');
        setSellPounds(1);

        return;
      }

      if (correspondingSack.poundsRemaining < poundsToSell) {
        alert('Not enough pounds in the sack to sell.');
        setSellPounds(1);
        return;
      }

      correspondingSack.poundsRemaining -= poundsToSell;

      if (correspondingSack.poundsRemaining === 0) {
        sacksData.splice(sacksData.indexOf(correspondingSack), 1)
      } else {
        sacksData.forEach((sack, index) => {
          if (sack.typeOfBeans === correspondingSack.typeOfBeans) {
            sacksData[index] = correspondingSack;
          }
        });
      }
      localStorage.setItem('sacksData', JSON.stringify(sacksData));
      setSellPounds(1);
    }
  };

  if (!bean) {
    return <div>Bean not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4 ">
        <h1 className='text-light'>Bean Details</h1>
        <div className="card gradient2Color ">
          <div className="card-body">
            <h5 className="card-title">{bean.name}</h5>
            <p className="card-text">Origin: {bean.origin}</p>
            <p className="card-text">Price: ${bean.price}</p>
            <p className="card-text">Roast: {bean.roast}</p>

            <button
              className="btn btn-primary mx-2"
              data-toggle="modal"
              data-target="#sellBeanModal"
            >
              Sell Bean
            </button>

            <Link to="/Beans" className="btn btn-secondary">
              Back to Beans
            </Link>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="sellBeanModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sellBeanModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sellBeanModalLabel">
                Sell Bean
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="sellPounds">Pounds to Sell:</label>
                <input
                  type="number"
                  id="sellPounds"
                  name="sellPounds"
                  min="1"
                  value={sellPounds}
                  onChange={(e) => setSellPounds(e.target.value)}
                />
              </div>
              <br />
              Do you want to sell {sellPounds} pound{sellPounds > 1 ? 's' : ''} of coffee beans?
              <p className='text-danger'>Please Reload this Webpage after adding the Sacks in the different webpage</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={sellBean}
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeanDetails;
