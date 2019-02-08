export default class person {

    name: string;
    course: string;
    expiresIn: string;
    pictureFile: string;

    constructor(txt: string) {

        let values = txt.split(",");

        this.name = values[0];
        this.course = values[1];
        this.expiresIn = values[2];
        this.pictureFile = this.name + ".jpg";
    }

}