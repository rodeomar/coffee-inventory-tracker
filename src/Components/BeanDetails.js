import React from 'react';
import { Link, useParams } from 'react-router-dom';
import beansData from '../Data/BeansData';
import sacksData from '../Data/SacksData';
import Navbar from './Navbar';

function BeanDetails() {
  const { id } = useParams();
  const bean = beansData.find((bean) => bean.id === parseInt(id));

  const sellBean = () => {
    const correspondingSack = sacksData.find((sack) => sack.typeOfBeans === bean.name);
    let idxSack = sacksData.indexOf(correspondingSack);
    sacksData.splice(correspondingSack, 1)
    if (correspondingSack === undefined){
      alert(
          "OUT OF STOCK"
      )
    }else{
      correspondingSack.poundsRemaining--;
      sacksData.push(correspondingSack);
      localStorage.setItem("sacksData", JSON.stringify(sacksData));
    }

  }

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

            <button
              className="btn btn-primary  mx-2"
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
              Do you want to sell a pound of coffee beans?
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
