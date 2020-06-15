import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psadashboard',
  templateUrl: './psadashboard.component.html',
  styleUrls: ['./psadashboard.component.css']
})
export class PsadashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  navigateToProject(value){
    this.route.navigate(['home/psa/projects/projectdetails',value, 0])
  }
}
