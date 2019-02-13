import React, { Component } from 'react';
import RecieveTable from './table';
import groupOfPersons from '../data/groupOfPersons';

export default class allLists extends Component {


    render () {

        const allPersons = this.props.group.persons;
        let pagesGroups =  [];
        let courses = [];
        let index = 0;

        //discover courses
        allPersons.forEach(element => {
            index = courses.indexOf(element.course);
            // console.log(index);
            if (index < 0) {// if not found, adds
                courses.push(element.course);
                pagesGroups.push(new groupOfPersons("","x"));
            }
        });
        
        pagesGroups.forEach(cur => cur.clearPersons());

        //add persons to corresponding course group
        allPersons.forEach(element => {
                index = courses.indexOf(element.course); 
                //console.log(index);
                if (index >= 0) {
                    //console.log(index);
                    pagesGroups[index].addPerson(element);
                }
        });

        //create tablePage for each course
        const pages = pagesGroups.map(cur => <RecieveTable group={cur} 
                  k={cur.persons[0].course+"_inner"} key={cur.persons[0].course+"_out"}/>);

        return (
            <div className="allPages">
                { pages }
            </div>
        )

    }


}