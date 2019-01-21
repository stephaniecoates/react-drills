import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    }; 
    this.addToList = this.addToList.bind(this);
  }

      addToList( input ) {
        this.setState({
          list: [...this.state.list, input],
        });
      }

  render() {
     return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask
        add={this.addToList}/>
        <List 
        tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
