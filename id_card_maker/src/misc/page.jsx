import react, { Component } from 'react';
import "page.css";

class page extends Component {
// several fronts or backs

render () {

    const personsJsx = this.props.front ? 
        persons.map(cur => <Front pic={cur.pictureFile} name={cur.name} course={cur.course}/>) :
        persons.map(cur => <Back logo={cur.logo} princ={cur.principal} exp={cur.expiresIn}/>);

    return (
        <div className="page">
            { personsJsx }
        </div>
    )

}

}