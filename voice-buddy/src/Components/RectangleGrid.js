// RectangleGrid.js
import React from 'react';
import './RectangleGrid.css';

export default function RectangleGrid({ numRows }) {
  const rectangles = Array.from({ length: numRows * 4 }); // Total number of rectangles

  return (
    <div className="rectangle-grid">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="rectangle-row-container">
          <div className="rectangle-row">
            {/* Render four rectangles per row */}
            {rectangles.slice(rowIndex * 4, rowIndex * 4 + 4).map((_, index) => (
              <div key={index} className="rectangle"></div>
            ))}
          </div>
          {/* Text under each row */}
          <p className="row-text">This is some random lyrics man {rowIndex + 1}</p>
        </div>
      ))}
    </div>
  );
}