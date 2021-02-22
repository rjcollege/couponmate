import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  gotoLogin(){
    this.route.navigate(['/login']);
  }
}
