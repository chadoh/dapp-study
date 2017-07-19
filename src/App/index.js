import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  state = {
    todos: [
      { id: "1", text: "Write README", done: true },
      { id: "2", text: "Create starter React app", done: true },
      { id: "3", text: "Build todo app", done: false },
      { id: "4", text: "Store todos in localStorage", done: false },
    ],
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Lancaster Dapp Study Group Todos</h1>
        </div>
        <List items={this.state.todos}/>
      </div>
    );
  }
}

export default App;
