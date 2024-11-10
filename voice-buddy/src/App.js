// App.js
import React from 'react';
import './App.css';
import Form from './Components/Form'
import RectangleGrid from './Components/RectangleGrid';

export default function App() {
  return (
    <div className="app-container">
      <Form />
      <RectangleGrid numRows={3} />
    </div>
  );
}