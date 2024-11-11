import React, { useState } from 'react';

export default function Form() {
  const [songLink, setSongLink] = useState(''); // State to hold input value
  const [isInstrumentsOnly, setIsInstrumentsOnly] = useState(false); // State for toggle

  // Update state on input change
  const handleInputChange = (event) => {
    setSongLink(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    /* console.log("Song Link:", songLink);
    console.log("Mode:", isInstrumentsOnly ? "Instruments Only" : "Full Song"); */

    try {
      const response = await fetch("http://127.0.0.1:5000/getJSON", {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const jsonData = await response.json();  // Parse the JSON response
      console.log("JSON Data:", jsonData);

    } catch (error){
      console.error("Error fetching JSON data:", error)
    }


  };

  // Toggle switch handler
  const handleToggleChange = () => {
    setIsInstrumentsOnly(!isInstrumentsOnly);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">VoiceBuddy :)</h1>
      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <div className="mb-3">
          <label htmlFor="songLink" className="form-label">
            Link of song
          </label>
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

        <button type="submit" className="btn btn-primary w-100">
          Go!
        </button>
      </form>
    </div>
  );
}