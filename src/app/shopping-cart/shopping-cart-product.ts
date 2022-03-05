import { Product } from '../product/Product';

export class ShoppingCartProduct extends Product {
  qty: number = 0;

  constructor(
    brand: string,
    productType: string,
    price: number,
    category: string,
    image: string,
    id: number,
    qty: number
  ) {
    super(brand, productType, price, category, image, id);
    this.qty = qty;
  }
}
