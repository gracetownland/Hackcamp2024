// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import Form from './Components/Form';
import RectangleGrid from './Components/RectangleGrid';

export default function App() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <Form />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <RectangleGrid numRows={10} />
        </div>
      </div>
    </div>
  );
}