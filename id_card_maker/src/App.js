import React, { Component } from 'react';
import './App.css';
import groupOfPersons from './data/groupOfPersons';
import Pagepack from "../src/misc/pagepack";
import AllLists from './receive_list/AllReceiveLists';

class App extends Component {

  constructor (props) {

    super(props);

    let txaDefaultText = "";
    for (let x = 1; x < 30; x++) {
      txaDefaultText = txaDefaultText + "Name nmb " + x + ", Course nbm " + (1+x%3) +", 29/02/2020, 123455, 01/01/2000, 20193026231, Apelido\n";
    }
    txaDefaultText = txaDefaultText + "João Carlos da Silva, Téc. em Eletromecânica - T 2019, 31/12/2020, 139719, 10/05/1996, matriclas";

    this.state = {
      text: txaDefaultText,
      renderPages: false,
      principal: "João Claudio Madureira",
      typeB: true, 
      hideCards: false,
      hideRecieveLists: false
    } 

  }

  txtChange = (e) => {
    this.setState({text: e.target.value});
  }

  typeBToggleHandler = () => {
    this.setState({typeB: !this.state.typeB});
  }

  hideCardsToggleHandler = () => {
    this.setState({hideCards: !this.state.hideCards});
  }

  hideRecieveListsToggleHandler = () => {
    this.setState({hideRecieveLists: !this.state.hideRecieveLists});
  }

  principalChangeHandler = (e) => {
    this.setState({principal: e.target.value});
  }

  generatePages = () => {
    
    this.group = new groupOfPersons(this.state.text, this.state.principal);
    this.setState({renderPages: true});

  }

  generateStateChanger = (labelx, func, val) => {
    return <div className="princChoose">{labelx}: 
              <input type="checkbox" onChange={func} value={val}/>
            </div>
  }

  render() {

    return (
      <div className="App">
          { this.state.renderPages ? [
          <Pagepack group={this.group} typeB={this.state.typeB} key={"pagepack"} hide={this.state.hideCards}/> ,
          <AllLists group={this.group} key={"receiveLists"} hide={this.state.hideRecieveLists}/>]
          :
          <div>
            <header>
              <h1>Id card maker</h1>
              <p>Software developed by Luciano Urgal Pando</p>
              <p>Please donate Bitcoin (BTC) to address bc1qzwlp2yzl783pskg9vrueuwhda7lrfmg3gc6enl</p>
            </header>
            <h3>Input the persons data in the following format:</h3>
            <p>Name, course, expireDate, (OPTIONAL:) Document, birthDate, registryNumber-RA, nickName</p>

            <div className="princChoose">Principal name:_________
              <input label="Principal" type="text" value={this.state.principal} onChange={this.principalChangeHandler}/>
            </div>

            { this.generateStateChanger("Card type B", this.typeBToggleHandler, this.state.typeB) }
            { this.generateStateChanger("Hide cards", this.hideCardsToggleHandler, this.state.hideCards) }
            { this.generateStateChanger("Hide recieving lists", this.hideRecieveListsToggleHandler, this.state.hideRecieveLists) }

            <textarea value={this.state.text} onChange={this.txtChange}/>
            <button onClick={this.generatePages}>Generate Id cards</button>
          </div> }
      </div>
    );
  }



}

export default App;
