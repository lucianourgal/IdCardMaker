import react, { Component } from 'react';
import Page from "page.jsx";

class pagepack extends Component {
// One front and one back
render() {

    return (
    <div>
        <Page front={true}/>
        <Page/>
    </div>
    )

}

}