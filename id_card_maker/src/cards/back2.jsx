import React from 'react';
import "./card.css";
import Textfield from '../misc/textfield';

const Back2 = (props) => {
    // NOme compl, RG, nascimento validade, assinatura
    const name = props.name.split("– ")[0].split("-")[0];
    const classes = props.pontacabeca ? "card back2 pontacabeca" : "card back2";

    return (
        <div className={classes}>
            <Textfield text={name} label={"Nome completo"} large={true} />
            <Textfield text={props.rg} label={"RG"} />
            <Textfield text={props.nasc} label={"Data de Nascimento"} />
            <Textfield text={props.exp} label={"Validade"} />
            <div className="signature">{props.princ}</div>
            <div className="job">{"Diretor Geral"}</div>
            <img src={require("../img/IFPRbottom.PNG")} alt={"IFPR address and extended name"} />
        </div>
    )
}

export default Back2;