import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Welcome to the Local Business Inventory Tracker</h1>
        <p>
          With this web application, you can easily manage and track your local
          coffee inventory. Add new coffee sacks, keep track of the pounds
          remaining, and find information about different coffee beans.
        </p>

        <p>
          Use the navigation links above to explore the inventory or search for
          specific coffee beans using the search bar.
        </p>

        <p>
          If you have any questions or need assistance, feel free to reach out
          to us!
        </p>
      </div>
    </div>
  );
}

export default Home;
