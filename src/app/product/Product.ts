export class Product{

    brand: string = "";
    name: string = "";
    price: number = 0;
    category: string = "";

    constructor(brand: string, name: string, price: number, category: string) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}