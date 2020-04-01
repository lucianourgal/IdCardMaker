import React from 'react';
import "./card.css";

const Back = (props) =>  <div className="card back">
                <div className="signature">{props.princ}</div>
                <div className="job">{"Diretor Geral"}</div>
                <p className="expires">Expira em {props.exp}</p>
            </div>

export default Back;