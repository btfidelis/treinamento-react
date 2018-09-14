import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const connectFn = connect(store => ({
  todoList: store.todoList.todos
}))
class App extends Component {
  markTodoAsDone(id) {
    const todoList = this.props.todoList.map((todo) => { 
      if (todo.id !== id) {
        return todo
      }

      return { ...todo, done: true }
    })

    this.props.dispatch({ 
      type: 'REMOVE_TODO', 
      payload: todoList
    })
  }

  createTodo({ title } = {}) {
    const todoList = this.props.todoList
    const createdAt = new Date()
    const done = false
    const id = todoList[todoList.length - 1].id + 1

    this.props.dispatch({
      type: 'ADD_TODO', 
      payload: { title, createdAt, done, id }
    })
  }

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
    }

    return (
      <div style={style}>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.createTodo.bind(this)} />
        <TodoList 
          removeTodo={this.markTodoAsDone.bind(this)}
          todos={this.props.todoList} 
        />
      </div>
    );
  }
}

export default connectFn(App);
