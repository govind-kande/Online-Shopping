import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  baseURL: string = "http://localhost:8080/product";
  constructor(private httpSer: HttpClient) { }
  
  public getProduct(category:string) {
    return this.httpSer.get<Product[]>(this.baseURL+"/getProduct/" + category);
  }


}
