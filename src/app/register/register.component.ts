import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  dname: any;
  uname: any;
  email: any;
  password: any;
  confirm: any;
  secret: any;

  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {}

  register(){
    if(this.dname !=undefined && this.uname !=undefined && this.email !=undefined && this.password !=undefined 
      && this.confirm !=undefined && this.secret !=undefined){
      if(this.password != this.confirm){
      alert("Password is not matched");
      }
      else{
      const salt = bcrypt.genSaltSync(10);
      var password = bcrypt.hashSync(this.password, salt);
      var secret = bcrypt.hashSync(this.secret, salt);
      this.api.register(this.dname,this.uname,this.email,password,this.confirm,secret).subscribe(
      data => {
      console.log(data);
       if((data[0]['status']==1)){
         alert('Regsiter Successfully !!!');
         this.route.navigate(['/login']);
       }
       else{
        alert(data[0]['msg']);
       }
      })
      }
    }
    else{
      alert("Please Enter Display Name,User Name,Email,Password,Password again and Secret Key");
    }
  }
}
