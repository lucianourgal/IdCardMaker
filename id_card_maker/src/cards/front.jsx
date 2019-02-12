import React, { Component } from 'react';
import "./card.css";
import Textfield from '../misc/textfield';
import Picture from "../misc/picture";

export default class front extends Component {
    // picture, name, course

    render() {

        return (
            <div className="card front">
                <Picture src={this.props.name}/>
                <Textfield text={this.props.name}/>
                <Textfield text={this.props.course}/>
            </div>
        )

    }

}