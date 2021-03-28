import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  loginData: Object;
  isActiveToggleTextPassword: Boolean = true;
  constructor(private route: Router, private api: ApiService,) { }

  ngOnInit() {}

  goToRegister(){
   this.route.navigate(['/register']);
  // console.log("here");
  }

  goToForgotpwd(){
    this.route.navigate(['/forgot-password']);
  }

  login() {
    if(this.email !=undefined && this.password !=undefined){
      this.api.login(this.email,this.password).subscribe(
      data => {
        console.log(data);
       if((data[0]['status']==1)){
        var verify= bcrypt.compareSync(this.password,data[0]['password']); 
          //console.log(hash,"hash",data[0]['password'],"pwd",verify,"verify")
          if(verify){
            this.route.navigate(['/home']);
          }
          else{
            alert("Invalid Password");
          }
       }
       else{
        alert(data[0]['msg']);
       }
      })
    }
    else{
      alert("Please Enter Username and Password");
    }
  }
public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}
public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
}
}
