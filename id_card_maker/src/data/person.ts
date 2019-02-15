export default class person {

    name: string;
    nickname: string;
    course: string;
    expiresIn: string;
    pictureFile: string;
    rg: string;
    birthDate: string;

    constructor(txt: string) {

        let values = txt.split(",");

        this.name = values[0];
        this.course = values[1];
        this.expiresIn = values[2];
        this.rg = this.getData(values,3);
        this.birthDate = this.getData(values,4);
        this.nickname = this.getData(values,5);

        this.pictureFile = this.name + ".jpg";
    }

    getData = (vet: string [], i: number) => {
        if(vet[i]) {
            return vet[i];
        }
        return "";
    }

}