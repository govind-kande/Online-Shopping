import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';
import { forgotpassword } from './forgotpassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
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
  ) { }
  
  onSubmit() {


    const forgotpasswordValue = this.passwordForm.value;
    // const user = new forgotpassword(forgotpasswordValue.password, forgotpasswordValue.mailId)
    console.log(forgotpasswordValue.password)
    if(forgotpasswordValue.cpassword==forgotpasswordValue.password){
    this.regserv.updatePassword(this.passwordForm.controls.mailId.value, forgotpasswordValue.password)
        .subscribe( data => {
        });
        alert("Password updated successfully");
        window.location.href=("home")
      }else{
        alert("Password & Confirm password doesn't matched, please try again !!")
        this.invalidLogin = true;	
      }
    //commented code here
    }
  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      cpassword: ['', Validators.required],
      password: ['', Validators.required],
      mailId:['', Validators.required],
    });
  }
}

// alert("inside onSubmit")
    // const body = { title: this.passwordForm.controls.password.value };
    // this.http.put<any>("http://localhost:8080/user/forgotPassword/1/check" , body)
    // .subscribe(data => this.postId = data.id);

  //   this.submitted = true;
  //   if (this.passwordForm.invalid) {
  //     return;
  //   }

  //   this.regserv
  //     .updatePassword(this.passwordForm.controls.mailId.value,this.passwordForm.controls.password.value)
  //     .subscribe(
  //       (result) => {
  //         console.log(result);
  //         alert ("reached here !!")
  //         if (this.passwordForm.controls.password.value== result.mailId && this.passwordForm.controls.password.value == this.passwordForm.controls.cpassword.value ) {
  //           alert("condition matched !!")
  //           this.router.navigate(['home']);
  //         } else {
  //           alert("condition didn't matched")
  //           this.invalidLogin = true;
  //         }
  //       },
  //       (error) => {
  //         this.invalidLogin = true;
  //       }
  //     );
  // }