import React, { useState } from 'react';
import './Form.css'; // Make sure this path is correct

export default function Form() {
  const [songLink, setSongLink] = useState(''); // State to hold input value

  // Update state on input change
  const handleInputChange = (event) => {
    setSongLink(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    console.log("Song Link:", songLink); // Log the input value or use it elsewhere
    // You can add additional actions here, such as sending data to an API
  };

  return (
    <>
      <h1>VoiceBuddy :)</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Link of song - 
          <input 
            name="songLink" 
            value={songLink} 
            onChange={handleInputChange} 
          />
        </label>
        <hr />
        <button type="submit">Go!</button>
      </form>
    </>
  );
}