import person from "./person";

export default class groupOfPersons {

    principal: string;
    persons: person [];

    constructor (txt: string) {
        this.principal = "João Claudio Bittecourt Madureira";
        this.persons = [];

        const protoP = txt.split("\n");
        for (let a=0; a<protoP.length; a++) {
            this.persons.push(new person(protoP[a]));
        }

        console.log("groupOfPersons object has " + this.persons.length + " persons.")

    }

    setPersons = (persons: person []) => {
        this.persons = persons;
    }

}