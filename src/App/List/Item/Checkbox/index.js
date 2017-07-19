import React from 'react';
import './Checkbox.css';

const changeWith = onChange => e => onChange(e.target.checked);

export default ({checked, onChange}) => (
  <span className="Checkbox">
    <input type="checkbox" checked={checked} onChange={changeWith(onChange)}/>
  </span>
);
