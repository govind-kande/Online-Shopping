import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forgotpassword } from '../forgot-password/forgotpassword';
import { Login } from '../login/Login';
import { Register } from '../registration/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL: string = "http://localhost:8080/user";
  constructor(private httpSer: HttpClient) { }

  authUser(login: any) {
    let username: any;
    if (localStorage.getItem('username')) {
      username = localStorage.getItem('username');
    }
  }

  public addUser(userData: Register) {
    return this.httpSer.post<Register>(this.baseURL + "/register/addUser", userData);
  }

  /*public getUserByMailId(mailId: string) {
    return this.httpSer.get<Register>(this.baseURL + "/getUserByMailId/" + mailId);
  }*/
  public getUserByMailId(mailId:string):Observable<Register> {
    if(localStorage.getItem('username')){
      return this.httpSer.get<Register>(this.baseURL+"/getUserByMailId/" + localStorage.getItem('username'));
    }else{
    return this.httpSer.get<Register>(this.baseURL+"/getUserByMailId/" + mailId);
    }
  }

  public updatePassword(mailId : string, password: string) {
    return this.httpSer.put<any>(this.baseURL + "/updatePassword/'" +mailId+"'/"+password, password);
  }
}
