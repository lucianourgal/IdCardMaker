import React, { Component } from 'react';
import "./card.css";
import Textfield from '../misc/textfield';
import Picture from "../misc/picture";

export default class front2 extends Component {
    // picture, name, course

    render() {

        return (
            <div className="card front2">
                <img src={require("../img/IFPRheader.PNG")} alt={"IFPR logo"}/>
                <p>IDENTIDADE ESTUDANTIL</p>
                <Picture src={this.props.name}/>
                <Textfield text={this.props.name.split(" ")[0]} label={"Nome"}/>
                <Textfield text={this.props.course} label={"Curso"} large={true}/>
            </div>
        )

    }

}