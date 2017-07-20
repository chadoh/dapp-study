import React from 'react';
import './DeleteButton.css';

export default ({onClick}) => (
  <button className="DeleteButton" onClick={onClick}>
    &times;
  </button>
);
