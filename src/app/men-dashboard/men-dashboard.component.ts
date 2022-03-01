import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men-dashboard',
  templateUrl: './men-dashboard.component.html',
  styleUrls: ['./men-dashboard.component.css']
})
export class MenDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
 
}
