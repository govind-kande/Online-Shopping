export class Register{

    fName: string = "";
    mailId: string = "";
    password: string = "";
    mobileNo: string = "";

    constructor(fName: string, mailId: string, password: string, mobileNo: string) {
        this.fName = fName;
        this.mailId = mailId;
        this.password = password;
        this.mobileNo = mobileNo;
    }
}