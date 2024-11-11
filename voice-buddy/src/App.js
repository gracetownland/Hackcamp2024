// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import Form from './Components/Form';
import RectangleGrid from './Components/RectangleGrid';
import center from "./img/center.png"; // Import the PNG file



export default function App() {
  return (
    <div
      className="container my-4"
      style={{
        backgroundImage: `url(${center})`,
        backgroundRepeat: 'repeat',
       //backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px', // Rounded corners
        boxShadow: '0 4px 32px rgba(0, 0, 0, 0.3)', // Shadow effect
        minHeight: '100vh', // Ensures the background covers the entire viewport height
      }}
    >
      <div className="row">
        <div className="col-12">
          <Form />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <RectangleGrid />
        </div>
      </div>
    </div>
  );
}