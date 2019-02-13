import React from 'react'
import './textfield.css'

export default props => props.large ? <div className="tfbox">
                            <div className="data">{props.label}:</div>
                            <p className="tf large">{props.text}</p>
                        </div> :
                        <div className="tfbox">
                            <div className="data">{props.label}:</div>
                            <p className="tf">{props.text}</p>
                        </div>