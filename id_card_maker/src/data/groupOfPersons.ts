import person from "./person";

export default class groupOfPersons {

    principal: string;
    logoFile: string;
    persons: person [];

    constructor () {
        this.principal = "João Claúdio Bittercourt Madureira";
        this.logoFile = "IFPR.jpg";
        this.persons = [];
    }

}