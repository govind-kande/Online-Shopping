import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  orderTotal!: number;
  productArray: any[] = [
    {
      img: "assets/images/55.png",
      prodName: "Wrong",
      prodId: "P5125",
      price:500,
      qnt:1,
      totalAmt:500,
    },
    {
      img: "assets/images/56.png",
      prodName: "FUURAK",
      prodId: "P5126",
      price:1500,
      qnt:1,
      totalAmt:1500,
    },
    {
      img: "assets/images/57.png",
      prodName: "HRX",
      prodId: "P5127",
      price:800,
      qnt:1,
      totalAmt:800,
    
    }
  ]

  inc(prod: any){
    if(prod.qnt != 5){
      prod.qnt +=1;
      prod.totalAmt = prod.qnt*prod.price;
    }
    
  }

  dec(prod: any){
    if(prod.qnt != 1){
      prod.qnt -=1;
      prod.totalAmt = prod.qnt*prod.price;
    }
    
  }

}
