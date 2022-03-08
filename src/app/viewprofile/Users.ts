export class Users {
    
    fName:string="";
        mailId: string = "";
        mobileNo:string="";
    
        constructor(fName:string,mailId: string, mobileNo: string) {
        
            this.fName=fName;
            this.mailId = mailId;
            this.mobileNo = mobileNo;
        }
    }