// RectangleGrid.js
import React from 'react';
import Rectangle from './Rectangle';
import './RectangleGrid.css';

export default function RectangleGrid() {
  return (
    <div className="rectangle-grid">
      <div><Rectangle /></div>
      <div><Rectangle /></div>
      <div><Rectangle /></div>
      <div><Rectangle /></div>
      <div><Rectangle /></div>
      <div><Rectangle /></div>
      <div><Rectangle /></div>
      <div><Rectangle /></div>
    </div>
  );
}