import React, { Component } from 'react';
import uuid from 'uuid/v4';

import Form from './Form';
import List from './List';

import './App.css';

class App extends Component {
  state = {
    todos: {
      1: { text: "Write README", done: true },
      2: { text: "Create starter React app", done: true },
      3: { text: "Build todo app", done: false },
      4: { text: "Store todos in localStorage", done: false },
    },
    todoOrder: ["1", "2", "3", "4"],
  };

  updateItem = (id, changes) => {
    const { todos } = this.state;

    if (!todos[id]) throw new Error("Can't find item with id=" + id);

    this.setState({
      ...this.state,
      todos: {
        ...todos,
        [id]: {...todos[id], ...changes}
      },
    });
  }

  addItem = text => {
    const id = uuid();

    this.setState({
      ...this.state,
      todos: {
        ...this.state.todos,
        [id]: { text, done: false },
      },
      todoOrder: [...this.state.todoOrder, id],
    })
  }

  render() {
    const list = this.state.todoOrder.map(id => ({
      id, ...this.state.todos[id],
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
