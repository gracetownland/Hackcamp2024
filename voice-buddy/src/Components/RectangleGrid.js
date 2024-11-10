// RectangleGrid.js
import React from 'react';
import './RectangleGrid.css';

export default function RectangleGrid({ numRows }) {
  const rectangles = Array.from({ length: numRows * 4 }); // Array with total number of rectangles (numRows * 4)

  return (
    <div className="rectangle-grid">
      {rectangles.map((_, index) => (
        <div key={index} className="rectangle"></div>
      ))}
    </div>
  );
}