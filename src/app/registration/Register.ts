export class Register{

    fName: string = "";
    mailId: string = "";
    password: string = "";
    mobileNo: string = "";
    id: number = 0;

    constructor(fName: string, mailId: string, password: string, mobileNo: string) {
        this.fName = fName;
        this.mailId = mailId;
        this.password = password;
        this.mobileNo = mobileNo;
    }
}