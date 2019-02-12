import React, { Component } from 'react';
import "./page.css";
import Back from "../cards/back";
import Front from "../cards/front";

export default class Page extends Component {
// several fronts or backs

render () {

    console.log("Page.jsx: This page has " +  this.props.group.persons.length + " persons.");

    const personsJsx = this.props.front ? 
        this.props.group.persons.map(cur => <Front name={cur.name} course={cur.course} rg={cur.rg} key={cur.name+"F"}/>) :
        this.props.group.persons.map(cur => <Back princ={this.props.group.principal} exp={cur.expiresIn} key={cur.name+"B"}/>);

    return (
        <div className="page">
            { personsJsx }
            <p>Page {this.props.pag }. </p>
            <p>Software developed by Luciano Urgal Pando</p>
        </div>
    )

}

}