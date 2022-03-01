import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './Services/register.service';
import swal from 'Sweetalert';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
username:any;



loggedinUser:any;  
constructor(private regService : RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

loggedin()
{
  this.loggedinUser=localStorage.getItem("username");
  return this.loggedinUser;
}
onLogout(){
localStorage.removeItem("username");
  swal("you have successfully logged out");
this.router.navigate(['/login']);

}
}
