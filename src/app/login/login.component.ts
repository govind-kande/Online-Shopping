import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginState: any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  loginForm: any;
  fname: any;
  mailId: any;
  password: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private regserv: RegisterService
  ) {}

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.regserv.getUserByMailId(this.loginForm.controls.email.value).subscribe(
      (result) => {
        if (
          this.loginForm.controls.email.value == result.mailId &&
          this.loginForm.controls.password.value == result.password
        ) {
          sessionStorage.setItem('loggedInUsername', result.fName);
          sessionStorage.setItem('emailID', result.mailId);
          sessionStorage.setItem('loggedInUserId', `${result.id}`);
          sessionStorage.setItem('orderAmount', '0');
          sessionStorage.setItem('cartProductArray', JSON.stringify([]));
          this.router.navigate(['home']);
        } else {
          this.invalidLogin = true;
        }
      },
      (error) => {
        this.invalidLogin = true;
      }
    );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
