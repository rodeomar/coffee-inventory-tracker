import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4 ">
        <div className="jumbotron gradient2Color">
          <h1 className="display-4">Welcome to the Local Business Inventory Tracker</h1>
          <p className="lead">
            With this web application, you can easily manage and track your local
            coffee inventory. Add new coffee sacks, keep track of the pounds
            remaining, and find information about different coffee beans.
          </p>
          <hr className="my-4" />
          <p>
            Use the navigation links above to explore the inventory or search for
            specific coffee beans using the search bar.
          </p>
          <a className="btn btn-primary" href="/Beans" role="button">
            Explore Beans
          </a>
          <a className="btn btn-primary  mx-2" href="/Sacks" role="button">
            View Beans Sack
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
