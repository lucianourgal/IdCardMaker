import React from 'react'
import './textfield.css'

export default props => props.large ? <div className="tfbox">
                            <div className="data">{props.label}:</div>
                            <div className="tf large">{props.text}</div>
                        </div> :
                        <div className="tfbox">
                            <div className="data">{props.label}:</div>
                            <div className="tf">{props.text}</div>
                        </div>