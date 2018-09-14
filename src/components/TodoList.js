import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    const todoStyle = (todo) => {
      if (todo.done) {
        return { textDecoration: 'line-through' }
      }

      return {}
    }

    const todos = this.props.todos
      .map(todo => (
        <li key={todo.title} style={todoStyle(todo)}>
          {todo.title} - {todo.createdAt.toString()}
          <button onClick={() => this.props.removeTodo(todo.id)} >done</button>
        </li>
      ))


    return (
      <ul>
        {todos}
      </ul>
    )
  }
}