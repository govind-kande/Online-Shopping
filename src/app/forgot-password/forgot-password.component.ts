import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  loginState: any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  passwordForm: any;
  fname: any;
  mailId: any;
  password: any;
  postId: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private regserv: RegisterService,
    private http: HttpClient
  ) {}

  onSubmit() {
    const forgotpasswordValue = this.passwordForm.value;
    if (forgotpasswordValue.cpassword == forgotpasswordValue.password) {
      this.regserv
        .updatePassword(
          this.passwordForm.controls.mailId.value,
          forgotpasswordValue.password
        )
        .subscribe((data) => {});
      alert('Password updated successfully');
      window.location.href = 'home';
    } else {
      alert("Password & Confirm password doesn't matched, please try again !!");
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      cpassword: ['', Validators.required],
      password: ['', Validators.required],
      mailId: ['', Validators.required],
    });
  }
}