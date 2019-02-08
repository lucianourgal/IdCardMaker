import React, { Component } from 'react';
import "./page.css";
import Back from "../cards/back";
import Front from "../cards/front";

export default class Page extends Component {
// several fronts or backs

render () {

    const personsJsx = this.props.front ? 
        this.props.persons.map(cur => <Front pic={cur.pictureFile} name={cur.name} course={cur.course}/>) :
        this.props.persons.map(cur => <Back logo={cur.logo} princ={cur.principal} exp={cur.expiresIn}/>);

    return (
        <div className="page">
            { personsJsx }
        </div>
    )

}

}