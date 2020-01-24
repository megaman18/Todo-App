import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends React.Component {
  state = {
    task: ""
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="new todo"
          id="task"
          value={this.state.task}
          name="task"
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
