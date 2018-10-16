import React, { Component } from 'react';

import './App.css';
import Image from './Image.js';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Image 
      myImage= { "https://i.kym-cdn.com/photos/images/newsfeed/000/243/067/45b.jpg" }
      />  
      </div>
    );
}
}
export default App;
