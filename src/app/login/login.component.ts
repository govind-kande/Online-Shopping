import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';
import { Login } from './Login';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
     private regserv:RegisterService
  ) {}

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.regserv
      .getUserByMailId(this.loginForm.controls.email.value)
      .subscribe(
        (result) => {
          console.log(result);
          if (this.loginForm.controls.email.value == result.mailId && this.loginForm.controls.password.value == result.password) {
            localStorage.setItem(
              'username',
              this.loginForm.controls.email.value
            );
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
