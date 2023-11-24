import React, { useState } from 'react';
import axios from 'axios';
import './Delete.css';

const Delete = () => {
  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:8084/courses/${title}`);
      const leaderDetails = response.data;

      if (leaderDetails) {
        console.log('Leader details retrieved successfully:', leaderDetails);
        window.alert('Leader Delete successfully');
        // You can add logic here to handle the found leader if needed
      } else {
        console.log('Leader not found');
        window.alert('Leader not found');
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
              placeholder="Enter Name of the Great Leader to Delete"
              name="title"
              value={title}
              onChange={handleInputChange}
            />
          </li>
        </ul>
        <button type="submit">Check Leader and Delete</button>
      </form>
    </div>
  );
};

export default Delete;
