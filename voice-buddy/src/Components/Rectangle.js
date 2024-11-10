// Rectangle.js
import React from 'react';

export default function Rectangle() {
  return (
    <div
      className="border border-dark"
      style={{
        width: '100%',
        paddingTop: '50%',   // Maintains a 2:1 aspect ratio
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>
    </div>
  );
}