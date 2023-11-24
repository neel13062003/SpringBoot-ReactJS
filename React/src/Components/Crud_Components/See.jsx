import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './See.css';

const See = () => {
  const [leaders, setLeaders] = useState([]);

  const fetchLeaders = async () => {
    try {
      const response = await axios.get('http://localhost:8084/courses');
      console.log('Leaders retrieved successfully:', response.data);
      setLeaders(response.data); // Assuming the response is an array of leaders
    } catch (error) {
      console.error('Error retrieving leaders:', error.message);
    }
  };

  // Fetch leaders when the component mounts
  useEffect(() => {
    fetchLeaders();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="see-container">
      <h2>Great Legends - Guardians of Our Legacy</h2>
      <ul>
        {leaders.map((leader) => (
          <li key={leader.id}>
            <h3>{leader.title}</h3>
            <p>{leader.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default See;
