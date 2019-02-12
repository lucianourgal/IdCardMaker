import React, { Component } from 'react';
import Page from "./page";
import groupOfPersons from '../data/groupOfPersons';

export default class Pagepack extends Component {
// One front and one back
render() {

    const personsPerPage = 9;
    const allPersons = this.props.group.persons;
    console.log("Pagepack.jsx: We have a totoal of " + allPersons.length + " persons.");

    let pagesG =  [];
    let tempPersons = [];

    for (let x=0; x< allPersons.length; x++) {

        tempPersons.push(allPersons[x]);
        if ( (x+1) % (personsPerPage) === 0 && x !== 0){
            const newGrou = new groupOfPersons("texte,texte,text");
            newGrou.setPersons(tempPersons);
            pagesG.push(newGrou);
            if ( x !== (allPersons.lenght -1)) {
                tempPersons = [];
            }
        }
    } // last (incomplete) page
    const newGrou2 = new groupOfPersons("");
    newGrou2.setPersons(tempPersons);
    pagesG.push(newGrou2);

    const frontPages = pagesG.map( (cur, i) => <Page front={true} group={cur} key={i+"FPag"}/>);
    const backPages = pagesG.map( (cur, i) => <Page front={false} group={cur} key={i+"BPag"}/>);

    return (
    <div className="allPages">
        { frontPages }
        { backPages }
    </div>
    )

}

}