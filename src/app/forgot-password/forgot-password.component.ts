import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email: any;
  password: any;
  isActiveToggleTextPassword: Boolean = true;

  constructor(private route: Router,private api: ApiService) { }

  ngOnInit() {}

  forgot(){
    if(this.email){
      this.api.forgot(this.email).subscribe(
        data => {
          if((data[0]['status']==1)){
          alert("Mail sent successfully your id !!!");
          this.route.navigate(['/login']);
          }
          else{
          alert(data[0]['msg']);
          }      
        })
    }
  }

public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}
public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
}
}
