import React, { Component } from 'react';
import "./table.css";

export default class RecieveTable extends Component {

    lastIndex = 0;
    linesPerPage = 32;
    firstPageLines = [];
    secondPageLines = null;
    data = "data";
    year = "x";

    createLine = (i, name) => {
        name = name.split("– ")[0].split("-")[0];
        this.lastIndex = i;
        const line = <tr key={i+"_"+ name}>
                        <td>{i+1}</td>
                        <td>{name}</td>
                        <td>{"____/____/"+this.year}</td>
                        <td></td>
                     </tr>;

        if ( i < this.linesPerPage) {
                this.firstPageLines.push( line );
                 return;
        } 
        if ( i === this.linesPerPage) {
               this.secondPageLines = [];
        }
        if ( i >= this.linesPerPage ) {
            this.secondPageLines.push( line );
        }
        
    }

    createPage = (lines, keyX, actual, twoPages) => {
       return <div className="page tablePage" key={keyX}>
            <img src={require("../img/IFPRheader.PNG")} alt={"IFPR logo"}/>
            <h3>Lista de entrega de carteirinhas de estudante </h3>
            <h4>Curso {this.props.group.persons[0].course} (Página {actual} / {twoPages ? 2 : 1})</h4>
            <p>{this.data}</p>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Assinatura</th>
                    </tr>
                </thead>
                <tbody>
                    { lines }
                </tbody>
            </table>
            <img className="bottomImgTable" src={require("../img/IFPRbottom.PNG")} alt={"IFPR address and extended name"}/>
        </div>
    }

    createFirstPage = () => {
        return this.createPage(this.firstPageLines, this.props.k+"_1", 1, this.secondPageLines);
    }

    createSecondPage = () => {
        return this.createPage(this.secondPageLines, this.props.k+"_2", 2, true);
    }

    render () {

        const dat = new Date();
        const mont = (dat.getUTCMonth()+1) < 10 ? "0"+ (dat.getUTCMonth()+1) : (dat.getUTCMonth()+1);
        this.year = dat.getUTCFullYear();
        this.data = "Entrega a partir de " +
                     dat.getUTCDate() + "/" + mont + "/" + this.year;

        this.props.group.persons.forEach((cur,i) => 
            this.createLine(i,cur.name));

        const mult = this.secondPageLines ? 2: 1;

        for(let x=this.lastIndex;x<(mult*this.linesPerPage);x++)
            this.createLine(x,"");

        const pageOne = this.createFirstPage();
        const pageTwo = this.secondPageLines ? this.createSecondPage() : null;

        return (
            <>
                { pageOne }
                { pageTwo }
            </>
        )
    }

}