import React from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;

    if (searchValue) {
      history(`/Beans?name=${encodeURIComponent(searchValue)}`);
    }
  };


  const beansClass = props.isBeansActive ? 'nav-link text-light underlineText' : 'nav-link text-light';
  const sacksClass = props.isSacksActive ? 'nav-link text-light underlineText' : 'nav-link text-light';
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand text-light" href="/">Local Coffee Tracker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <a className={beansClass} href="/Beans">Beans</a>
            </li>
            <li className="nav-item">
              <a className={sacksClass} href="/Sacks">Coffee Sacks</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchInput" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  isBeansActive: PropTypes.bool,
  isSacksActive: PropTypes.bool,
};
Navbar.defaultProps  = {
  isBeansActive: false,
  isSacksActive: false
  ,
};
export default Navbar;