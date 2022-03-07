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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productListService: ProductListService
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category');
      this.productType = params.get('productType');
      this.productListService
        .getProduct(this.category, this.productType)
        .subscribe((data) => {
          this.prodList = Object.values(data);
        });
    });
  }

  addToCart(product: Product): void {
    const shoppingCartProduct = new ShoppingCartProduct(
      product.brand,
      product.productType,
      product.price,
      product.category,
      product.image,
      product.id,
      1
    );
    const cartProductArray: ShoppingCartProduct[] = JSON.parse(
      sessionStorage.getItem('cartProductArray')!
    );
    if (cartProductArray) {
      cartProductArray.push(shoppingCartProduct);
      sessionStorage.setItem(
        'cartProductArray',
        JSON.stringify(cartProductArray)
      );
    }

    let orderAmount = parseInt(sessionStorage.getItem('orderAmount')!);
    const amount = orderAmount ? (orderAmount += product.price) : product.price;
    sessionStorage.setItem('orderAmount', `${amount}`);
    sessionStorage.setItem(
      'cartProductArray',
      JSON.stringify([shoppingCartProduct])
    );
    window.location.href = 'shoppingcart';
  }
}
