import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from '../Services/update.service';
import { Update } from './Update';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
 
  users:Update={
    
    fName: '',
    mailId:'',
    mobileNo:''
  };
  uid: any;
  sub:any;
  customers:Update[]=[];
  customerID:string='';
  constructor(private ar:ActivatedRoute,
    private r:Router,
    private service:UpdateService) { }
    
  ngOnInit(){
  this.sub=this.ar.paramMap.subscribe(params=>{
    this.uid=params.get('uid');
    console.log(this.uid);
    this.service.getUserByMailId(this.uid)
    .subscribe(data=>{this.users=data});
    
  });
 
}
 
 upddateUser(userForm:NgForm){
  
  alert("Updated profile data successfully");
  window.location.href=("viewprofile");
  console.log(userForm.value.fName);
  console.log(userForm.value);
  
  this.service.updateUser(userForm.value.Mail,userForm.value)
  .subscribe(
    data=> console.log('success',data),
   );
    
  }
  

}
