import React, { useState } from 'react';
import mascot from "./../img/mascot.png"; // Import the mascot PNG file
import microphone from "./../img/microphone.png"; // Import the microphone PNG file

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
    <div className="container-fluid mt-4">
      {/* Header with "Voice Buddy :)" and microphone icon */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <img
          src={microphone}
          alt="Microphone Icon"
          style={{ width: '150px', height: '100px' }} // Adjust size as needed
        />
        <h1 className="mb-0 me-2">Voice Buddy :)</h1>
      </div>

      {/* Flex container for full-width layout */}
      <div className="d-flex">
        
        {/* Mascot Image on the left with fixed width */}
        <div className="d-flex align-items-center justify-content-center" style={{ width: '220px' }}>
          <img
            src={mascot}
            alt="Mascot Icon"
            style={{ width: '200px', height: '200px' }}
          />
        </div>

        {/* Form on the right, taking up remaining space */}
        <div style={{ flex: 1, paddingLeft: '10px' }}>
          <form onSubmit={handleSubmit} className="p-3 border rounded">
            <div className="mb-3">
              <label htmlFor="songLink" className="form-label">Link of song</label>
              <input
                type="text"
                className="form-control"
                id="songLink"
                value={songLink}
                onChange={handleInputChange}
                placeholder="Enter song link"
              />
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

            {/* Submit button */}
            <button type="submit" className="btn btn-primary w-100">
              Go!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}