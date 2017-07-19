import React from 'react';
import './List.css';
import Item from './Item';

export default ({items}) => (
  <ol className="List">
    {items.map(({id, text, done}) =>
      <Item key={id} done={done}>{text}</Item>
    )}
  </ol>
);
