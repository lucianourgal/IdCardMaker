import React, { Component } from 'react';
import "./card.css";

export default class back extends Component {
    // logo, expires in, principal signature

    render() {

        return (
            <div className="card back">
                <div className="signature">{this.props.princ}</div>
                <p className="expires">Expira em {this.props.exp}</p>
            </div>
        )

    }

}