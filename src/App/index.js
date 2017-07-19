import React, { Component } from 'react';
import uuid from 'uuid/v4';

import { fetchData, setData } from '../helpers/database';
import Form from './Form';
import List from './List';

import './App.css';

class App extends Component {

  componentDidMount() {
    window.addEventListener('DatabaseUpdatedEvent', this.rerender, false);
  }

  componentWillUnmount() {
    window.removeEventListener('DatabaseUpdatedEvent', this.rerender, false);
  }

  rerender = () => {
    this.forceUpdate();
  }

  updateItem = (id, changes) => {
    const data = fetchData();
    const { todos } = data;

    if (!todos[id]) throw new Error("Can't find item with id=" + id);

    setData({
      ...data,
      todos: {
        ...todos,
        [id]: {...todos[id], ...changes}
      },
    });
  }

  addItem = text => {
    const data = fetchData();
    const id = uuid();

    setData({
      ...data,
      todos: {
        ...data.todos,
        [id]: { text, done: false },
      },
      todoOrder: [...data.todoOrder, id],
    })
  }

  render() {
    const data = fetchData();
    const list = data.todoOrder.map(id => ({
      id, ...data.todos[id],
    }));

    return (
      <div>
        <div className="App-header">
          <h1 className="App-title">Lancaster Dapp Study Group Todos</h1>
        </div>
        <article className="App-body">
          <Form onSubmit={this.addItem}/>
          <List items={list} updateItem={this.updateItem}/>
        </article>
      </div>
    );
  }
}

export default App;
