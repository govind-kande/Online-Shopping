export class Login {

    mailId: string = "";
    password: string = "";

    constructor( mailId: string, password: string) {
        this.mailId = mailId;
        this.password = password;
    }
}