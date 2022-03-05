export class forgotpassword {
    id: number =0;
    password: string = "";
    mailId:string="";
    static find: any;

    constructor(id: number =0, password: string, mailId:string) {
        this.id=id;
        this.password = password;
        this.mailId=mailId;
    }
}