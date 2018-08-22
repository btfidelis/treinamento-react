import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

const connectFn = connect(store => ({
  
}))


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: ''
    }
  }


  handleInput(inputName) {
    const fn = e => {
      const val = e.target.value
      const state = {}
      state[inputName] = val

      this.setState(() => state)
    }

    return fn.bind(this)
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
        <div>
          <label>Email</label>
          <input 
            type="text" 
            onChange={this.handleInput('email')} 
          />
        </div>
        <div>
          <label>Senha</label>
          <input 
            type="password" 
            onChange={this.handleInput('pass')} 
          />
        </div>
        <div>
          <button onClick={() => alert(this.state.email)}>aquii</button>
        </div>
      </div>
    );
  }
}

export default connectFn(App);
