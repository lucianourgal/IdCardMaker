import React, { Component } from 'react';
import "./card.css";
import Textfield from '../misc/textfield';
import Picture from "../misc/picture";

export default class front2 extends Component {
    // picture, name, course

    render() {

        let nicknam = this.props.nick ? this.props.nick : this.props.name.split(" ")[0];
        nicknam = nicknam.toUpperCase();
        const registryClasses = this.props.registry.length > 15 ? "personRegistryField smallfont" : "personRegistryField";

        return (
            <div className="card front2">
                <img src={require("../img/IFPRheader.PNG")} alt={"IFPR logo"}/>
                <p>IDENTIDADE ESTUDANTIL</p>
                <Picture src={this.props.name}/>
                <div className={registryClasses}>{this.props.registry}</div>
                <Textfield text={nicknam} label={"Nome"} nickname/>
                <Textfield text={this.props.course} label={"Curso"} large/>
            </div>
        )

    }

}