export class Product {
  brand: string = '';
  productType: string = '';
  price: number = 0;
  category: string = '';
  image: string = '';
  id: number = 0;

  constructor(
    brand: string,
    productType: string,
    price: number,
    category: string,
    image: string,
    id: number
  ) {
    this.brand = brand;
    this.productType = productType;
    this.price = price;
    this.category = category;
    this.image = image;
    this.id = id;
  }
}
