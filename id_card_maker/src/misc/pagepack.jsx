import React, { Component } from 'react';
import Page from "./page";
import groupOfPersons from '../data/groupOfPersons';

export default class Pagepack extends Component {
// One front and one back
render() {

    const personsPerPage = 4;
    const allPersons = this.props.group.persons;
    // console.log("Pagepack.jsx: We have a total of " + allPersons.length + " persons.");

    let pagesG =  [];
    let tempPersons = [];

    for (let x=0; x< allPersons.length; x++) {

        tempPersons.push(allPersons[x]);
        if ( (x+1) % (personsPerPage) === 0 && x !== 0){
            const newGrou = new groupOfPersons("texte,texte,text", this.props.group.principal);
            newGrou.setPersons(tempPersons);
            pagesG.push(newGrou);
            if ( x !== (allPersons.lenght -1)) {
                tempPersons = [];
            }
        }
    } // last (incomplete) page

    if (tempPersons.length > 0) {
        const newGrou2 = new groupOfPersons("", this.props.group.principal);
        newGrou2.setPersons(tempPersons);
        pagesG.push(newGrou2);
    }

    //const frontPages = pagesG.map( (cur, i) => 
    //<Page front={true} group={cur} key={i+"_FPag"} pag={(i+1)+"_Front"} typeB={this.props.typeB}/>);

    //const backPages = pagesG.map( (cur, i) => 
    //<Page front={false} group={cur} key={i+"_BPag"} pag={(i+1)+"_Back"} typeB={this.props.typeB}/>);

    const pagesR = pagesG.map( (cur, i) => 
    <Page allTogether group={cur} key={i+"_Pag"} pag={(i+1)+"_FnB"} typeB={this.props.typeB}/>);

    return (
     this.props.hide  ? null :
    <div className="allPages">
       { pagesR }
    </div>
    )

}

}