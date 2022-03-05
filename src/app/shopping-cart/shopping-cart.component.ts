import { Component, OnInit } from '@angular/core';
import { Product } from '../product/Product';
import { ShoppingCartProduct } from './shopping-cart-product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  productArray: ShoppingCartProduct[] = JSON.parse(sessionStorage.getItem('cartProductArray')!);
  orderAmount: number = parseInt(sessionStorage.getItem('orderAmount')!)

  ngOnInit(): void {}

  inc(prod: ShoppingCartProduct) {
    if (prod.qty < 5) {
      prod.qty += 1;
      sessionStorage.setItem('orderAmount', `${this.orderAmount += prod.price}`);
      sessionStorage.setItem('cartProductArray', JSON.stringify(this.productArray));
    }
  }

  dec(prod: ShoppingCartProduct) {
    if (prod.qty > 1) {
      prod.qty -= 1;
      sessionStorage.setItem('orderAmount', `${this.orderAmount -= prod.price}`);
      sessionStorage.setItem('cartProductArray', JSON.stringify(this.productArray));
    }
  }
}
