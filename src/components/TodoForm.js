import React, {Component} from 'react'


export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoTitle: ''
    }
  }

  handleInput(e) {
    const { value } = e.target
    this.setState(() => ({
      todoTitle: value
    }))
  }

  render() {
    return (
      <div>
        <label>New Todo: </label>
        <input 
          text="text" 
          onChange={this.handleInput.bind(this)} 
        />
        <button 
          onClick={() => this.props.addTodo({ title: this.state.todoTitle })}>
            add
        </button>
      </div>
    )
  }
  
}