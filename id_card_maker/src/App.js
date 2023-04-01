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
      txaDefaultText = txaDefaultText + "Name nmb " + x + ";Course nbm " + (1+x%3) +";29/02/2020; 123455; 01/01/2000; 20193026231; Apelido\n";
    }
    txaDefaultText = txaDefaultText + "João Carlos da Silva; Téc. em Eletromecânica - T 2019; 31/12/2020; 139719; 10/05/1996; matriclas";

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
    return <div className="princChoose">
              <span>{labelx}:</span> 
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
              <h1><a href="https://github.com/lucianourgal/IdCardMaker" target="_blank" rel="noopener noreferrer">Id card maker</a></h1>
              <p>Desenvolvido por Luciano Urgal Pando</p>
              <p>Please donate Bitcoin (BTC) to address bc1qzwlp2yzl783pskg9vrueuwhda7lrfmg3gc6enl</p>
            </header>
            <h3>Insira os dados pessoas no seguinte formato:</h3>
            <p>Nome, curso, data_expiração, (opcional) documento, data_nascimento, registro_acadêmico_RA, (opcional) apelido</p>

            <div className="princChoose">
              <span>Nome do diretor:</span>
              <input label="Principal" type="text" value={this.state.principal} onChange={this.principalChangeHandler}/>
            </div>

            { this.generateStateChanger("Ocultar carteirinhas", this.hideCardsToggleHandler, this.state.hideCards) }
            { this.generateStateChanger("Ocultar listas de recebimento", this.hideRecieveListsToggleHandler, this.state.hideRecieveLists) }

            <textarea value={this.state.text} onChange={this.txtChange}/>
            <button onClick={this.generatePages}>Gerar carteirinhas</button>
          </div> }
      </div>
    );
  }



}

export default App;
