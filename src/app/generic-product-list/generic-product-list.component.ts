import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/Product';
import { ProductListService } from '../Services/product-list.service';
import { ShoppingCartProduct } from '../shopping-cart/shopping-cart-product';

@Component({
  selector: 'app-generic-product-list',
  templateUrl: './generic-product-list.component.html',
  styleUrls: ['./generic-product-list.component.css'],
})
export class GenericProductListComponent implements OnInit {
  prodList: any[] = [];
  category: any;
  productType: any;
  sub: any;

  constructor(
    private ar: ActivatedRoute,
    private r: Router,
    private service: ProductListService
  ) {}

  ngOnInit() {
    this.sub = this.ar.paramMap.subscribe((params) => {
      this.category = params.get('category');
      this.productType = params.get('productType');
      this.service
        .getProduct(this.category, this.productType)
        .subscribe((data) => {
          this.prodList = Object.values(data);
          console.log(Object.values(data));
        });
    });
  }

  addToCart(product: Product): void {
    const shoppingCartProduct = new ShoppingCartProduct(product.brand, product.productType, product.price, product.category, product.image, product.id, 1);
    const currentCartArray = sessionStorage.getItem('cartProductArray');
    if (currentCartArray) {
      const cartProductArray: ShoppingCartProduct[] = JSON.parse(sessionStorage.getItem('cartProductArray')!);
      if (cartProductArray && cartProductArray.length > 0) {
        cartProductArray.push(shoppingCartProduct);
        sessionStorage.setItem('cartProductArray', JSON.stringify(cartProductArray));
      }
    } else {
      sessionStorage.setItem('cartProductArray', JSON.stringify([shoppingCartProduct]));
    }

    const orderAmount = sessionStorage.getItem('orderAmount') != undefined ? parseInt(sessionStorage.getItem('orderAmount')!) : product.price;
    sessionStorage.setItem('orderAmount', `${orderAmount}`);
    window.location.href=("shoppingcart");
  }
}
