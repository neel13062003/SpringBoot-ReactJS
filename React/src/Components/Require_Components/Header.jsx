import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/see">See</Link>
        <Link to="/update">Update</Link>
        <Link to="/search">Search</Link>
        <Link to="/delete">Delete</Link>
      </nav>

      {/* <section>
        <p>Welcome to our platform</p>
      </section> */}
    </div>
  );
}

export default Header;
