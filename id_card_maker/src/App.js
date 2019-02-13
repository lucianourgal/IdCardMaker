import React, { Component } from 'react';
import './App.css';
import groupOfPersons from './data/groupOfPersons';
import Pagepack from "../src/misc/pagepack";

class App extends Component {

  constructor (props) {

    super(props);

    let txaDefaultText = "";
    for (let x = 1; x < 20; x++) {
      txaDefaultText = txaDefaultText + "Name nmb " + x + ", Course nbm " + x +", 29/02/2020, 123455, 01/01/2000\n";
    }
    txaDefaultText = txaDefaultText + "João Carlos da Silva, Téc. em Eletromecânica - T 2019, 31/12/2020, 139719, 10/05/1996";

    this.state = {
      text: txaDefaultText,
      renderPages: false,
      principal: "João Claudio Bittecourt Madureira",
      typeB: true
    } 

  }

  txtChange = (e) => {
    this.setState({text: e.target.value});
  }

  principalChangeHandler = (e) => {
    this.setState({principal: e.target.value});
  }

  generatePages = () => {
    
    this.group = new groupOfPersons(this.state.text, this.state.principal);
    this.setState({renderPages: true});

  }

  render() {

    return (
      <div className="App">
          { this.state.renderPages ? <Pagepack group={this.group} typeB={this.state.typeB}/> :
          <div>
            <header>
              <h1>Id card maker</h1>
              <p>Software developed by Luciano Urgal Pando</p>
              <p>Please donate Bitcoin (BTC) to address bc1qzwlp2yzl783pskg9vrueuwhda7lrfmg3gc6enl</p>
            </header>
            <h3>Input the persons data in the following format:</h3>
            <p>Name, course, expireDate, Document (optional), birthDate (optional)</p>

            <label>Principal name: 
              <input label="Principal" type="text" value={this.state.principal} onChange={this.principalChangeHandler}/>
            </label>

            <label>Card type B: 
              <input type="checkbox" value={this.state.typeB}/>
            </label>

            <textarea value={this.state.text} onChange={this.txtChange}/>
            <button onClick={this.generatePages}>Generate Id cards</button>
          </div> }
      </div>
    );
  }



}

export default App;
