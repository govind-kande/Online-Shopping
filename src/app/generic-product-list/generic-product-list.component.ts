import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../Services/product-list.service';

@Component({
  selector: 'app-generic-product-list',
  templateUrl: './generic-product-list.component.html',
  styleUrls: ['./generic-product-list.component.css']
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
      this.service.getProduct(this.category,this.productType).subscribe((data) => {
        this.prodList = Object.values(data);
      });
    });
  }

}
