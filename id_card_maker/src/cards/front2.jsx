import React, { Component } from 'react';
import "./card.css";
import Textfield from '../misc/textfield';
import Picture from "../misc/picture";

export default class front2 extends Component {
    // picture, name, course

    render() {

        return (
            <div className="card front2">
                <Picture src={this.props.name}/>
                <Textfield text={this.props.name} label={"Nome"}/>
                <Textfield text={this.props.rg} label={"RG"}/>
                <Textfield text={this.props.course} label={"Curso"}/>
            </div>
        )

    }

}