import React, { Component } from 'react'
import { format } from 'date-fns'

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
        <li key={todo.id} style={todoStyle(todo)}>
          {todo.title} - {format(todo.createdAt, 'DD/MM/YYYY HH:m:SS  ')}
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