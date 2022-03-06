import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShippingAddress } from '../shipping-address/shipping-address';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {

baseURL: string = "http://localhost:8080/shippingaddress";
  constructor(private httpSer: HttpClient) { }

  public addShippingDetails(shippingDetails: ShippingAddress) {
    return this.httpSer.post<ShippingAddress>(this.baseURL + "/addUser", shippingDetails);
  }
}
