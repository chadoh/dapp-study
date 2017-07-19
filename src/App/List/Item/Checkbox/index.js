import React from 'react';

const changeWith = onChange => e => onChange(e.target.checked);

export default ({checked, onChange}) => (
  <input type="checkbox" checked={checked} onChange={changeWith(onChange)}/>
);
