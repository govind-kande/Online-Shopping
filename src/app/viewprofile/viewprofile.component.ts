import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';
import { Users } from './Users';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  
  users:Users={
    
    fName: '',
    mailId:'',
    mobileNo:''
  };
  uid: any;
  sub:any;
  customers:Users[]=[];
  customerID:string='';
  constructor(private ar:ActivatedRoute,
    private r:Router,
    private service:RegisterService) { }
  
  ngOnInit(){
  this.sub=this.ar.paramMap.subscribe(params=>{
    this.uid=params.get('uid');
    console.log(this.uid);
    this.service.getUserByMailId(this.uid)
    .subscribe(data=>{this.users=data});
  });
      

  }

}