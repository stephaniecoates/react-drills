import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
    constructor () {
    super();

    this.state = {
        username: "",
        password: ""
      }
      this.returnAlert = this.returnAlert.bind (this);
    }

    updateUsername (e) {
        this.setState({
          username: e
        })
        console.log(e)
      }
    
      updatePassword (e) {
        this.setState({
          password: e
        })
        console.log(e)
    }
      

    returnAlert (username, password) {
        return alert(`Username: ${username} Password: ${password}`)
    }

    render() {
    return (
      <div className="App">
      <input onChange={(e => this.updateUsername(e.target.value))} />
      <input onChange={(e) => this.updatePassword(e.target.value)}/>
      <button onClick={() => this.returnAlert(this.state.username, this.state.password)}>Login</button>
      </div>
    );
  }

}

export default Login;