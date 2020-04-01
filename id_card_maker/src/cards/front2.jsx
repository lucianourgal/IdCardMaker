import React from 'react';
import "./card.css";
import Textfield from '../misc/textfield';
import Picture from "../misc/picture";

const Front2 = (props) => {

    let nicknam = props.nick ? props.nick : props.name.split(" ")[0];
    nicknam = nicknam.toUpperCase();
    const registryClasses = props.registry.length > 15 ? "personRegistryField smallfont" : "personRegistryField";

    return (
        <div className="card front2">
            <img src={require("../img/IFPRheader.PNG")} alt={"IFPR logo"} />
            <p>IDENTIDADE ESTUDANTIL</p>
            <Picture src={props.name} />
            <div className={registryClasses}>{props.registry}</div>
            <Textfield text={nicknam} label={"Nome"} nickname />
            <Textfield text={props.course} label={"Curso"} large />
        </div>
    )

}

export default Front2;

