import React, { Component } from 'react';
import "./picturebox.css";

export default class picbox extends Component {

    render () {

        let image;
        
            try {
                image = <img src={require('../customimg/' + this.props.src + '.JPG')}
                            alt={"Picture of " + this.props.src}/>;
            } catch {
                image = "'"+this.props.src+".JPG' not found";
                console.log(image);
            }
        
        return (
            <div className="picturebox">
                { image }
            </div>
        )
    }
}