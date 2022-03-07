import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Services/register.service';
import { Register } from './Register';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: any;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(
    private regserv: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  regForm = new FormGroup({
    uname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
    phonenumber: new FormControl(''),
  });

  addUser(): void {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    const registrationFormValue = this.registrationForm.value;
    const user = new Register(
      registrationFormValue.uname,
      registrationFormValue.email,
      registrationFormValue.password,
      registrationFormValue.phonenumber
    );
    console.log(registrationFormValue.password);
    if (registrationFormValue.cpassword == registrationFormValue.password) {
      this.regserv.addUser(user).subscribe((data) => {
        alert('Account created successfully, please login now !!');
        window.location.href = 'login';
      });
    } else {
      alert("Password doesn't matched, please try again !!");
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      uname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      phonenumber: ['', Validators.required],
    });
  }
}
