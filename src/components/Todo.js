import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { textDecoration: '', checked: false }
  }

  handleChange = () => {
    if (this.state.checked) {
      this.setState({textDecoration: '', checked: false})
    } else {
      this.setState({textDecoration: 'line-through', checked: true})
    }
  }

  render() {
    return (
      <div>
        <input id={`todos-${this.props.id}-checkbox`} type="checkbox" onChange={this.handleChange}></input>
        <span id={`todos-${this.props.id}`} style={{textDecoration: this.state.textDecoration}}>{this.props.text}</span>
      </div>
    )
  }
}

export default Todo
