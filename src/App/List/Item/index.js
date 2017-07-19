import React from 'react';
import './Item.css';
import Checkbox from './Checkbox';

const setDoneWith = onChange => done => onChange({done});;

export default ({done, onChange, children}) => (
  <li className={done && 'Item-done'}>
    <label>
      <Checkbox checked={done} onChange={setDoneWith(onChange)}/>
      {children}
    </label>
  </li>
);
