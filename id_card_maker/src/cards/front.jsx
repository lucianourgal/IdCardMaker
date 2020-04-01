import React from 'react';
import "./card.css";
import Textfield from '../misc/textfield';
import Picture from "../misc/picture";

const Front = (props) =>
            <div className="card front">
                <Picture src={this.props.name}/>
                <Textfield text={this.props.name} label={"Nome"}/>
                <Textfield text={this.props.rg} label={"RG"}/>
                <Textfield text={this.props.course} label={"Curso"}/>
            </div>

export default Front;