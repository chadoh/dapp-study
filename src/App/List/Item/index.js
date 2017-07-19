import React from 'react';
import './Item.css';

export default ({done, children}) => (
  <li className={done && 'Item-done'}>
    {children}
  </li>
);
