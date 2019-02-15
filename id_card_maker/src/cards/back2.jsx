import React, { Component } from 'react';
import "./card.css";
import Textfield from '../misc/textfield';

export default class back2 extends Component {
    // logo, expires in, principal signature

    render() {
        // NOme compl, RG, nascimento validade, assinatura
        const name = this.props.name.split("– ")[0];
            
        return (
            <div className="card back2">
                <Textfield text={name} label={"Nome completo"} large={true}/>
                <Textfield text={this.props.rg} label={"RG"}/>
                <Textfield text={this.props.nasc} label={"Data de Nascimento"}/>
                <Textfield text={this.props.exp} label={"Validade"}/>
                <div className="signature">{this.props.princ}</div>
                <div className="job">{"Diretor Geral"}</div>
                <img src={require("../img/IFPRbottom.PNG")} alt={"IFPR address and extended name"}/>
            </div>
        )

    }

}