import React from 'react'
import './textfield.css'

export default props => <div>
                            <div className="data">{props.label}:</div>
                            <div className="tf">{props.text}</div>
                        </div>