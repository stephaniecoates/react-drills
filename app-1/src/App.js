import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      str: ""
    }
  }
  changeHeading(e){
    this.setState({
      str: e
    })
  }
  
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.changeHeading(e.target.value)}></input>
        <h1>{this.state.str}</h1>
      </div>
    );
  }
}

export default App;
