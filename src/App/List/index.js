import React from 'react';
import './List.css';
import Item from './Item';

export default ({items, updateItem}) => (
  <ol className="List">
    {items.map(({id, text, done}) =>
      <Item key={id} done={done} onChange={updateItem.bind(null, id)}>
        {text}
      </Item>
    )}
  </ol>
);
