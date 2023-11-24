import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [leaderData, setLeaderData] = useState({
    title: '',
    description: '',
  });

  const [foundLeader, setFoundLeader] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaderData({ ...leaderData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8084/courses/${leaderData.title}`);
      const leaderDetails = response.data; 

      if (leaderDetails) {
        console.log('Leader details retrieved successfully:', leaderDetails);
        setFoundLeader(leaderDetails); 
      } else {
        console.log('Leader not found');
        setFoundLeader(null); 
      }
    } catch (error) {
      console.error('Error retrieving leader details:', error);
    }
  };

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Great Legends - Guardians of Our Legacy</h2>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Enter Name of the Great Leader"
              name="title"
              value={leaderData.title}
              onChange={handleInputChange}
            />
          </li>
        </ul>
        <button type="submit">Search Leader</button>
      </form>

      {foundLeader && (
        <div>
          <h3>Leader Details</h3>
          <p>Name:  {foundLeader.title}</p>
          <p>{foundLeader.description}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
