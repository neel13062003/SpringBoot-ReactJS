import React, { useState } from 'react';
import axios from 'axios';
import './Add.css';

const Add = () => {
  const [leaderData, setLeaderData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaderData({ ...leaderData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8084/courses', leaderData);
      console.log('Leader added successfully:', response.data);
      window.alert('Leader added successfully');
      setLeaderData({ title: '', description: '' });  
    } catch (error) {
      console.error('Error adding leader:', error);
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
          <li>
            <textarea
              placeholder="Write Their Story"
              name="description"
              value={leaderData.description}
              onChange={handleInputChange}
            ></textarea>
          </li>
        </ul>
        <button type="submit">Add Leader</button>
      </form>
    </div>
  );
};

export default Add;
