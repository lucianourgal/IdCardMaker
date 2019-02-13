import person from "./person";

export default class groupOfPersons {

    principal: string;
    persons: person [];

    constructor (txt: string, princ: string) {
        this.principal = princ;
        this.persons = [];

        const protoP = txt.split("\n");
        for (let a=0; a<protoP.length; a++) {
            this.persons.push(new person(protoP[a]));
        }

        console.log("groupOfPersons object has " + this.persons.length + " persons. Principal is " + princ)

    }

    setPersons = (persons: person []) => {
        this.persons = persons;
    }

    addPerson = (pers: person) => {
        this.persons.push(pers);
    }

    clearPersons = () => {
        this.persons = [];
    }

}