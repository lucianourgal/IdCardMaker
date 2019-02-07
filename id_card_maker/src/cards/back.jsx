import react, { Component } from 'react';
import "card.css";

class back extends Component {
    // logo, expires in, principal signature

    render() {

        return (
            <div className="card">
                <Picture src={this.props.logo}/>
            </div>
        )

    }

}