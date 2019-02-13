import React, { Component } from 'react';
import "./card.css";

export default class back2 extends Component {
    // logo, expires in, principal signature

    render() {

        return (
            <div className="card back2">
                <div className="signature">{this.props.princ}</div>
                <div className="job">{"Diretor Geral"}</div>
                <p className="expires">Expira em {this.props.exp}</p>
            </div>
        )

    }

}