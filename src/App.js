import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";
class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
