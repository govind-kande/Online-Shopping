import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../registration/Register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL: string = "http://localhost:8080/user";
  constructor(private httpSer: HttpClient) { }

  
  public addUser(userData:Register) {
    return this.httpSer.post<Register>(this.baseURL+"/register/addUser", userData);
  }

  public getUserByMailId(mailId:string) {
    return this.httpSer.get<Register>(this.baseURL+"/getUserByMailId/" + mailId);
  }


}
