import person from "./person";

export default class groupOfPersons {

    principal: string;
    logoFile: string;
    persons: person [];

    constructor (txt: string) {
        this.principal = "João Claúdio Madureira Bittercourt";
        this.logoFile = "IFPR.jpg";
        this.persons = [];

        const protoP = txt.split("\n");
        for (let a=0; a<protoP.length; a++) {
            this.persons.push(new person(protoP[a]));
        }

    }

    setPersons = (persons: person []) => {
        this.persons = persons;
    }

}