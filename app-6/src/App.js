import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

//get new tasks
//store the list of tasks

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ["eat", "go shopping"],
      input: ""
    };

  }
  getUserInput(e) {
    this.setState({ input: e })
    console.log(e)
  }

  addToList() {
    this.setState({
      list: [...this.state.list, this.state.input],
      //ask tim or monica to explain this, spread operator? Creates entirely new array instead of arr.push?
      input: ''
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return (
        <Todo
          key={index}
          task={element}
        />
      )
    })
    //are we allowed to do multiple returns in render?
    //explain todo key and task, are these props?
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.input} placeholder="Enter new task" onChange={(e) => this.getUserInput(e.target.value)} />
        <button onClick={() => this.addToList()}>Add</button>
        <br />
        {list}
      </div>
    );
  }
}

export default App;
