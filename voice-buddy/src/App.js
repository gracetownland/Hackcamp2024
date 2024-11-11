// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import RectangleGrid from './Components/RectangleGrid';
import center from "./img/center.png";

export default function App() {
  const [showRectangleGrid, setShowRectangleGrid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [songFile, setSongFile] = useState('')
  const handleFormSubmit = (songFile) => {
    //save lyrics in App.js as a state variable
    setSongFile(songFile)

    setIsLoading(true); // Start loading indicator
    setTimeout(() => {
      setIsLoading(false); // Stop loading indicator
      setShowRectangleGrid(true); // Display RectangleGrid
    }, 2000); // Simulate loading time with a delay
  };

  return (
    <div
      className="container my-4"
      style={{
        backgroundImage: `url(${center})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        borderRadius: '15px',
        boxShadow: '0 4px 32px rgba(0, 0, 0, 0.3)',
        minHeight: '100vh',
      }}
    >
      <div className="row">
        <div className="col-12">
          {/* Display the form always */}
          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col-12">
          {/* Conditionally display the loading spinner or the RectangleGrid */}
          {isLoading && (
            <div className="text-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Loading...</p>
            </div>
          )}
          {showRectangleGrid && !isLoading && <RectangleGrid songFile={songFile} />}
        </div>
      </div>
    </div>
  );
}