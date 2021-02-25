import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  loginData: Object;

  constructor(private route: Router, private api: ApiService,) { }

  ngOnInit() {}

  goToRegister(){
    this.route.navigate(['/register']);
  }

  goToForgotpwd(){
    this.route.navigate(['/forgot-password']);
  }

  login() {
    let promise = new Promise((res,rej) => {
      this.api.login(this.email,this.password).subscribe(
      data => {
       if((data[0]['status']==2)){
        this.route.navigate(['/home']);
       }
      })
    })
  }
}
