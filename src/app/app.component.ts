import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './Services/register.service';
import swal from 'Sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: any;
  loggedinUser = sessionStorage.getItem('loggedInUsername');
  email: any;
  LoggenInUserName: any;
  categoryType: any;

  constructor(private regService: RegisterService, private router: Router) {}
  ngOnInit(): void {}

  loggedin() {
    return localStorage.getItem('username');
  }

  getUserName() {
    return sessionStorage.getItem('loggedInUsername');
  }

  onLogout() {
    sessionStorage.removeItem('loggedInUsername');
    sessionStorage.removeItem('loggedInUserId');
    sessionStorage.removeItem('cartProductArray');
    sessionStorage.removeItem('orderAmount');
    swal('you have successfully logged out');
    this.router.navigate(['/login']);
  }
}
