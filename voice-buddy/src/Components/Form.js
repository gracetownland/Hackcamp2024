// Form.js
import React, { useState } from 'react';
import mascot from "./../img/mascot.png";
import microphone from "./../img/microphone.png";

export default function Form({ onSubmit }) {
  const [songLink, setSongLink] = useState('');
  const [isInstrumentsOnly, setIsInstrumentsOnly] = useState(false);

  const handleInputChange = (event) => {
    setSongLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Mock API call or any other logic
    onSubmit(); // Trigger loading and RectangleGrid display
  };

  const handleToggleChange = () => {
    setIsInstrumentsOnly(!isInstrumentsOnly);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex align-items-center justify-content-center mb-4">
        <img src={microphone} alt="Microphone Icon" style={{ width: '150px', height: '100px' }} />
        <h1 className="mb-0 me-2">Voice Buddy :)</h1>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center justify-content-center" style={{ width: '220px' }}>
          <img src={mascot} alt="Mascot Icon" style={{ width: '200px', height: '200px' }} />
        </div>
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
            <button type="submit" className="btn btn-primary w-100">Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
}