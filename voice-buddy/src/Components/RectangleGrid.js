// RectangleGrid.js
import React from 'react';

export default function RectangleGrid({ numRows }) {
  const rectangles = Array.from({ length: numRows * 4 }); // Total number of rectangles

  return (
    <div className="container my-4">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="mb-3">
          <div className="row text-center">
            {/* Render four rectangles per row */}
            {rectangles.slice(rowIndex * 4, rowIndex * 4 + 4).map((_, index) => (
              <div key={index} className="col-3">
                <div className="border border-dark rounded bg-light" style={{ paddingTop: '50%', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                </div>
              </div>
            ))}
          </div>
          {/* Text under each row */}
          <p className="text-center mt-2">This is some random lyrics man {rowIndex + 1}</p>
        </div>
      ))}
    </div>
  );
}