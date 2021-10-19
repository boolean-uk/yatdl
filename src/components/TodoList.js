import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [], text: '' }
  }

  addTodo = () => {
    this.state.todos.push(this.state.text)
    this.setState({todos: this.state.todos})
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  clear = () => {
    this.setState({todos: []})
  }

  render() {
    return (
      <div>
        <h1 id="todoList-heading">Yet Another Todo List!</h1>
        <input id="todoList-textbox" type="text" onChange={this.handleChange}></input>
        <button id="todoList-button" onClick={this.addTodo}>Save</button>
        <a id="todoList-clearLink" href="#" onClick={this.clear}>clear</a>
        {this.state.todos.map((todo, index) => <Todo id={index} key={index} text={todo} />)}
      </div>
    )
  }
}

export default TodoList
