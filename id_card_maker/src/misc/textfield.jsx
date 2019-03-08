import React from 'react'
import './textfield.css'

export default props => <div className="tfbox">
                            <div className="data">{props.label}:</div>
                            <p className=
                            {props.large ? "tf large" : props.nickname ? "tf nickname" : "tf"}>
                            {props.text}</p>
                        </div>