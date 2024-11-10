import React from 'react';
import './Form.css'; // Make sure this path is correct
export default function Form() {
  return (
    <div className="form-container">
      <label>
        Link of song
        <input name="firstName" />
      </label>
      <hr />
      <button type="submit">Go!</button>
    </div>
  );
}