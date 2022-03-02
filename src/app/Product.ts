export class Product {
    pId:number=0;
        pName: string = "";
        price: number=0;
    
        constructor( pId:number,pName:string,price :number) {
            this.pId=pId;
            this.pName = pName;
            this.price = price;
        }
    }