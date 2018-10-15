import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      myArray: ["I", "don't", "know", "what", "words", "to", "put", "in", "this", "array"]
    }
  }


  
  render() {
    let finalList = this.state.myArray.map((item, index) => {
      return (<h2 listNum={index}>{item}</h2>)
    })
    return (
      <div className="App">
      {finalList}
      </div>
    );
  }
}

export default App;
