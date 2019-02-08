import React, { Component } from 'react';
import Page from "./page.jsx";

export default class Pagepack extends Component {
// One front and one back
render() {

    return (
    <div>
        <Page front={true} persons={this.props.group}/>
        <Page persons={this.props.group}/>
    </div>
    )

}

}