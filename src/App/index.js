import React, { Component } from 'react';
import './App.css';
import List from './List';

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
          <List items={list} updateItem={this.updateItem}/>
        </article>
      </div>
    );
  }
}

export default App;
