import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      vegetables: ["broccoli", "kale", "spinach", "red pepper", "bok choy", "mushrooms", "sugar snap peas"],
      str: ""
    }
  }
  
  filterArray ( filter ) {
    this.setState({
      str: filter
    })
  }
  
  
  render() {
    let vegList = (this.state.vegetables.filter((item) => {
      return item.includes( this.state.str );
    }).map((item, index) => {
      return <h2 key={ index }>{item}</h2>
    }))
    return (
      <div className="App">
      <input onChange={(e) => this.filterArray(e.target.value)} type = "text" />
      {vegList}
      </div>
    );
  }
}

export default App;
