import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  baseURL: string = 'http://localhost:8080/product';
  constructor(private httpSer: HttpClient) {}

  public getProduct(category: string,productType:string): Observable<Product> {
    return this.httpSer.get<Product>(
      this.baseURL + '/getProduct/' + category+'/' + productType
    );
  }
}
