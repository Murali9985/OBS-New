import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  OBSLoginForm: any;
  loading: boolean = false;
  forgotForm: any;
  userid: any;
  eye1: boolean = false;
  val: string;

  constructor(private fb: FormBuilder, private route: Router) {
    this.OBSLoginForm = this.fb.group({
      'UserName': [null, (Validators.required, Validators.pattern('[0-9]*'))],
      'UserPassword': [null, Validators.required],
      'domain': [null, Validators.required]
    });
   }

  ngOnInit() {
    this.eye();
  }

  eye() {
    if (this.eye1 == true) {
      this.val = "text";
      this.eye1 = false;
    }
    else {
      this.val = "password";
      this.eye1 = true;
    }

  }
  loginAction(data){
    this.route.navigate(['home']);
  }
  navigateToSignUp(){
    this.route.navigate(['index/signup'])
  }
  navigateToForgotPassword(){
    this.route.navigate(['index/forgot'])
  }

}
