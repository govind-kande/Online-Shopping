import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ShippingAddressService } from '../Services/shipping-address.service';
import { ShippingAddress } from './shipping-address';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css'],
})
export class ShippingAddressComponent implements OnInit {
  shippingDetailsForm: any;
  submitted: boolean = false;

  constructor(
    private shippingservice: ShippingAddressService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  shippingForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    address: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
    mobileno: new FormControl(''),
    email: new FormControl(''),
  });

  addShippingDetails(): void {
    const shippingDetailsFormValue = this.shippingDetailsForm.value;
    const userId = parseInt(sessionStorage.getItem('loggedInUserId')!);
    const shippingDetails = new ShippingAddress(
      userId,
      shippingDetailsFormValue.fname,
      shippingDetailsFormValue.lname,
      shippingDetailsFormValue.address,
      shippingDetailsFormValue.state,
      shippingDetailsFormValue.city,
      shippingDetailsFormValue.zip,
      shippingDetailsFormValue.email,
      shippingDetailsFormValue.mobileno
      
    );

    this.shippingservice
      .addShippingDetails(shippingDetails)
      .subscribe((data) => {
        this.router.navigate(['/payment']);
      });
  }

  ngOnInit(): void {
    this.shippingDetailsForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      email: ['', Validators.required],
      mobileno: ['', Validators.required]
     
    });
    
  }

}