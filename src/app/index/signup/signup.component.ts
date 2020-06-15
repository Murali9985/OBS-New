import { NotificationService } from './../../toastr-notification/toastr-notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hrmsBooleanValue:boolean = false;
  psaBooleanValue:boolean = false;
  tmsBooleanValue:boolean = false;

  constructor(private route: Router, private toast:NotificationService) { }

  ngOnInit() {
  }

  selectedHrms(){
    this.hrmsBooleanValue = !this.hrmsBooleanValue;
  }
  selectedPsa(){
    this.psaBooleanValue = !this.psaBooleanValue;
  }
  selectedTms(){
    this.tmsBooleanValue = !this.tmsBooleanValue;
  }

  navigateToLogin(){
    this.route.navigate(['index/login'])
  }
  navigateToLoginSuccess(){
    this.toast.success('Successfully registered');
    this.navigateToLogin();
  }

}
