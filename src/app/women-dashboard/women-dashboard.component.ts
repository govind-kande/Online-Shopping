import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/Product';

import { ProductListService } from '../Services/product-list.service';

@Component({
  selector: 'app-women-dashboard',
  templateUrl: './women-dashboard.component.html',
  styleUrls: ['./women-dashboard.component.css'],
})
export class WomenDashboardComponent implements OnInit {

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
      this.service.getProduct(this.category,this.productType).subscribe((data) => {
        this.prodList = Object.values(data);
      });
    });
  }
}