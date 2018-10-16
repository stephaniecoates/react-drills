import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';
//does list order of imports matter?

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
          //spread operator? Creates entirely new array instead of arr.push?
        });
      }

  render() {
    
    //are we allowed to do multiple returns in render? when to add parenthesis to function used as prop? When addToList has (), "this.props.add not a function", is that because it's invoked in NewTask?
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
