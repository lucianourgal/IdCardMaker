import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Input the persons data in the following format:</h1>
          <h4>Name, course, pictureFile</h4>
          <textarea/>
          <button>Generate Id cards</button>
      </div>
    );
  }
}

export default App;
