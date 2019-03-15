import React, { Component } from 'react';
import "./page.css";
import Back from "../cards/back";
import Front from "../cards/front";
import Back2 from "../cards/back2";
import Front2 from "../cards/front2";

export default class Page extends Component {
// several fronts or backs

generateTypeA = () => {
    return this.props.front ?  
        this.props.group.persons.map(cur => 
        <Front name={cur.name} course={cur.course} rg={cur.rg} key={cur.name+"F"}/>) :
        this.props.group.persons.map(cur => 
        <Back princ={this.props.group.principal} exp={cur.expiresIn} key={cur.name+"B"}/>);
}

generateTypeB = () => {

    if (this.props.allTogether)
        return this.generateTypeBAlltogether();

    return this.props.front ?  
        this.props.group.persons.map(cur => 
        <Front2 name={cur.name} course={cur.course} key={cur.name+"F"} nick={cur.nickname} registry={cur.registryNumber}/>) :
        this.props.group.persons.map(cur => 
        <Back2 princ={this.props.group.principal} 
        exp={cur.expiresIn} rg={cur.rg} nasc={cur.birthDate} name={cur.name} key={cur.name+"B"}/>);
}

renderBack2 = (cur, fake, rev) => {
    const key1 = fake ? cur.name+"_Fake" : cur.name+"B";
    return <Back2 princ={this.props.group.principal} 
    exp={cur.expiresIn} rg={cur.rg} nasc={cur.birthDate} name={cur.name} key={key1} pontacabeca={rev}/>
}

renderFront2 = (cur, fake) => {
    const key1 = fake ? cur.name+"_Fake" : cur.name+"F";
    return <Front2 name={cur.name} course={cur.course} key={key1} nick={cur.nickname} registry={cur.registryNumber}/>
}

generateTypeBAlltogether = () => {

    // easy cut job
    if (this.props.group.persons.length === 4) {
        return <>
            { this.renderFront2(this.props.group.persons[0]) }
            { this.renderBack2(this.props.group.persons[0]) }
            { this.renderFront2(this.props.group.persons[3]) } 

            { this.renderFront2(this.props.group.persons[1]) }
            { this.renderBack2(this.props.group.persons[1]) }
            { this.renderBack2(this.props.group.persons[3], false, true) } 

            { this.renderFront2(this.props.group.persons[2]) }
            { this.renderBack2(this.props.group.persons[2]) }
            { this.renderBack2(this.props.group.persons[3], true) }
        </>
    }

    // default
    return this.props.group.persons.map(cur =>
        <>
             <Front2 name={cur.name} course={cur.course} key={cur.name+"F"} nick={cur.nickname} registry={cur.registryNumber}/>
             <Back2 princ={this.props.group.principal} 
                    exp={cur.expiresIn} rg={cur.rg} nasc={cur.birthDate} name={cur.name} key={cur.name+"B"}/>
        </>
    );
}


render () {

    // console.log("Page.jsx: This page has " +  this.props.group.persons.length + " persons.");

    const personsJsx =  this.props.typeB ? this.generateTypeB() : this.generateTypeA();
        
    return (
        <div className="page" key={this.props.pag}>
            { personsJsx }
            <p className="pagesig">Page {this.props.pag }. Software developed by Luciano Urgal Pando</p>
        </div>
    )

}

}