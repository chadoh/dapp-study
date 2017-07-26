import React, { Component } from 'react';
import uuid from 'uuid/v4';

import createDatabase from '../database';
import Form from './Form';
import List from './List';

import './App.css';

const initialState = {
  todos: {},
  todoOrder: [],
};

const db = createDatabase({initialState});

class App extends Component {

  componentDidMount() {
    db.addSaveSuccessListener(this.rerender);
  }

  componentWillUnmount() {
    db.removeSaveSuccessListener(this.rerender);
  }

  rerender = () => {
    this.forceUpdate();
  }

  updateItem = (id, changes) => {
    const data = db.fetchData();
    const { todos } = data;

    if (!todos[id]) throw new Error("Can't find item with id=" + id);

    db.setData({
      ...data,
      todos: {
        ...todos,
        [id]: {...todos[id], ...changes}
      },
    });
  }

  addItem = text => {
    const data = db.fetchData();
    const id = uuid();

    db.setData({
      ...data,
      todos: {
        ...data.todos,
        [id]: { text, done: false },
      },
      todoOrder: [...data.todoOrder, id],
    })
  }

  removeItem = id => {
    const data = db.fetchData();

    const todos = data.todos;
    delete todos[id];

    const index = data.todoOrder.indexOf(id);
    const todoOrder = data.todoOrder.slice(0, index).concat(
      data.todoOrder.slice(index + 1)
    );

    db.setData({ ...data, todos, todoOrder })
  }

  render() {
    const data = db.fetchData();
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
          <List
            items={list}
            updateItem={this.updateItem}
            removeItem={this.removeItem}
          />
        </article>
      </div>
    );
  }
}

export default App;
