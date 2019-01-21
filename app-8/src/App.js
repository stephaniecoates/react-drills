import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super();

    this.state = {
        planet: ""
    }
  }
  
  componentDidMount(key) {
    let promise = axios.get('https://swapi.co/api/planets/8');
    promise.then(res => {
      this.setState({
        planet: res.data})
    })
  }
  
  render() {
    return (
      <div className="App">
     <h1>Name: {this.state.planet.name}</h1>
     <h1>Climate: {this.state.planet.climate}</h1>
     <h1>Terrain: {this.state.planet.terrain}</h1>
     <h1>Population: {this.state.planet.population}</h1>
      </div>
    );
  }
}

export default App;
