import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import TodoList from './components/TodoList'

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
        <TodoList 
          removeTodo={this.markTodoAsDone.bind(this)}
          todos={this.props.todoList} 
        />
      </div>
    );
  }
}

export default connectFn(App);
