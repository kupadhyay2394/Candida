// File: src/App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState(''); // State for search text
  const [hoveredRow, setHoveredRow] = useState(null); // Track the hovered row

  // Function to fetch data from the server
  const fetchCandidates = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/candidates');
      if (!response.ok) {
        throw new Error('Failed to fetch candidates');
      }
      const data = await response.json();
      setCandidates(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  // Fetch candidates when the component mounts
  useEffect(() => {
    fetchCandidates();
  }, []);

  // Function to handle search text change
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Function to filter candidates based on search text
  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchText.toLowerCase()) ||
      candidate.skills.toLowerCase().includes(searchText.toLowerCase())
  );

  // Handle hover on row
  const handleMouseEnter = (id) => {
    setHoveredRow(id);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name or Skills"
          value={searchText}
          onChange={handleSearchChange}
          className="input"
        />
      </div>
      <div className="dashboard">
        <h1>Candidate List</h1>
      </div>

  
      


      {!error && (
        <div className="content">
          <table className="table" border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Skills</th>
                <th>Years of Experience</th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.length > 0 ? (
                filteredCandidates.map((candidate) => (
                  <tr
                    key={candidate.id}
                    onMouseEnter={() => handleMouseEnter(candidate.id)} // Set hover on mouse enter
                    onMouseLeave={handleMouseLeave} // Reset hover on mouse leave
                    className={hoveredRow === candidate.id ? 'hovered' : ''} // Apply class if hovered
                  >
                    <td>{candidate.name}</td>
                    <td>{candidate.skills}</td>
                    <td>{candidate.experience}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No candidates found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Loading or error message */}
      {loading && <p>Loading candidates...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
