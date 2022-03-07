import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Update } from '../updateprofile/Update';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  baseURL: string = "http://localhost:8080/user";
  
  constructor(private http:HttpClient) { }
   
    
authUser(login:any){
  let username:any;
  if(localStorage.getItem('username')){
    username=localStorage.getItem('username'); 
  }

}
   updateUser(id:string,user:Update) {	
        console.log(user.fName);
        return this.http.put(this.baseURL + "/updateUser/" +localStorage.getItem('username'),user);	
       
      
  }
  /*  getUserById(id: number):Observable<Update>{			
      
          return this.http.get<Update>(this.baseURL+"/getUserById"+id);		
      
        }	*/
      public getUserByMailId(mailId:string):Observable<Update> {
        
          return this.http.get<Update>(this.baseURL+"/getUserByMailId/" + localStorage.getItem('username'));
        
      } 
}
