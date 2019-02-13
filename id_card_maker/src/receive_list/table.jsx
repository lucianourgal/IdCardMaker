import React, { Component } from 'react';
import "./table.css";

export default class RecieveTable extends Component {

    lastIndex = 0;

    createLine = (i, name) => {
        this.lastIndex = i;
        return <tr key={i+"_"+ name}>
        <td>{i+1}</td>
        <td>{name}</td>
        <td></td>
      </tr>
    }

    render () {

        const lines = this.props.group.persons.map( (cur, i) => 
          this.createLine(i,cur.name));


        for(let x=this.lastIndex;x<30;x++)
            lines.push(this.createLine(x,""));
        
        const dat = new Date();
        const data = "Entrega em " +
                     dat.getUTCDate() + "/" + (dat.getUTCMonth()+1) + "/" + dat.getUTCFullYear();

        return (
        <div className="page" key={this.props.k}>
            <img src={require("../img/IFPRheader.PNG")} alt={"IFPR logo"}/>
            <h3>Lista de entrega de carteirinhas de estudante</h3>
            <h4>Curso {this.props.group.persons[0].course}</h4>
            <p>{data}</p>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Nome</th>
                        <th>Assinatura</th>
                    </tr>
                </thead>
                <tbody>
                    { lines }
                </tbody>
            </table>
        </div>
        )
    }

}