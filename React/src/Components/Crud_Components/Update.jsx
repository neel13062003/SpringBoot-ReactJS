import React, { useState } from 'react';
import axios from 'axios';
import './Update.css';

const Update = () => {
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

    if (!leaderData.title || !leaderData.description) {
      window.alert('Please fill in both fields before submitting.');
      return;
    }

    try {
      // Assuming your API endpoint expects the title in the URL for updating
      const response = await axios.put(`http://localhost:8084/courses/${leaderData.title}`, leaderData);
      console.log('Leader Updated successfully:', response.data);
      window.alert('Leader Updated successfully');
      setLeaderData({ title: '', description: '' });
    } catch (error) {
      console.error('Error Updating leader:', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with:', error.response.data);
        window.alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
        window.alert('Error: No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
        window.alert(`Error: ${error.message}`);
      }
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
              placeholder="Update Their Story"
              name="description"
              value={leaderData.description}
              onChange={handleInputChange}
            ></textarea>
          </li>
        </ul>
        <button type="submit">Update Leader</button>
      </form>
    </div>
  );
};

export default Update;
