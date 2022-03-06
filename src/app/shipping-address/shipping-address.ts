export class ShippingAddress{

    userId: number = 0;
    fName: string = "";
    lName: string = "";
    address: string = "";
    state: string = "";
    city: string = "";
    zip: number = 0;
    emailID: string = "";
    mobileNo: string = "";

    constructor(userId: number, fName: string, lName: string, address: string, state: string, city: string, zip: number, emailID: string, mobileNo: string) {
        this.userId = userId;
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.emailID = emailID;
        this.mobileNo = mobileNo;
    }
}