import React from 'react';
import './List.css';
import Item from './Item';
import DeleteButton from './DeleteButton';

export default ({items, updateItem, removeItem}) => (
  <ol className="List">
    {items.map(({id, text, done}) =>
      <Item key={id} done={done} onChange={updateItem.bind(null, id)}>
        {text}
        <DeleteButton onClick={() => removeItem(id)} />
      </Item>
    )}
  </ol>
);
