import React, { useState } from 'react';
import mascot from "./../img/mascot.png"; // Import the PNG file

export default function Form() {
  const [songLink, setSongLink] = useState(''); // State to hold input value
  const [isInstrumentsOnly, setIsInstrumentsOnly] = useState(false); // State for toggle

  // Update state on input change
  const handleInputChange = (event) => {
    setSongLink(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Song Link:", songLink);
    console.log("Mode:", isInstrumentsOnly ? "Instruments Only" : "Full Song");
  };

  // Toggle switch handler
  const handleToggleChange = () => {
    setIsInstrumentsOnly(!isInstrumentsOnly);
  };

  return (
    <div className="container mt-4">
      {/* Flex container for image and title */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <img
          src={mascot}
          alt="Mascot Icon"
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <h1 className="text-center mb-0">VoiceBuddy :)</h1>
      </div>

      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <div className="mb-3">
          <label htmlFor="songLink" className="form-label">Link of song</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="songLink"
              value={songLink}
              onChange={handleInputChange}
              placeholder="Enter song link"
            />
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className="me-2">Full Song</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="modeSwitch"
              checked={isInstrumentsOnly}
              onChange={handleToggleChange}
            />
          </div>
          <span className="ms-2">Instrumental Only</span>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Go!
        </button>
      </form>
    </div>
  );
}