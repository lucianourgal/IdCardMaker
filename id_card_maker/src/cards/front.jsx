import react, { Component } from 'react';
import "card.css";
import Textfield from '../misc/textfield';

class front extends Component {
    // picture, name, course

    render() {

        return (
            <div className="card">
                <Picture src={this.props.pic}/>
                <Textfield text={this.props.name}/>
                <Textfield text={this.props.course}/>
            </div>
        )

    }

}