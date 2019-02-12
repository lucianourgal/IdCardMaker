import React, { Component } from 'react';
import './App.css';
import groupOfPersons from './data/groupOfPersons';
import Pagepack from "../src/misc/pagepack";

class App extends Component {

  constructor (props) {

    super(props);

    let txaDefaultText = "";
    for (let x = 1; x < 20; x++) {
      txaDefaultText = txaDefaultText + "Name nmb " + x + ", Course nbm " + x +", 29/02/2020\n";
    }
    txaDefaultText = txaDefaultText + "Name nmb last, Course nbm last, 29/02/2020";

    this.state = {
      text: txaDefaultText,
      renderPages: false
    } 

  }

  txtChange = (e) => {
    this.setState({text: e.target.value});
  }

  generatePages = () => {
    
    this.group = new groupOfPersons(this.state.text);
    this.setState({renderPages: true});

  }

  render() {

    return (
      <div className="App">
          { this.state.renderPages ? <Pagepack group={this.group}/> :
          <div>
            <h1>Input the persons data in the following format:</h1>
            <h4>Name, course, expireDate</h4>
            <textarea value={this.state.text} onChange={this.txtChange}/>
            <button onClick={this.generatePages}>Generate Id cards</button>
          </div> }
      </div>
    );
  }



}

export default App;
