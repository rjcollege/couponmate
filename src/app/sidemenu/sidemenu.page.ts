import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {
 
  constructor(private route:Router) { 
    
  }

  ngOnInit() {
    
  }
  gotToBeauty(){
    this.route.navigate(['/beauty']);
  }
  gotToBack(){
    this.route.navigate(['/home']);
  }
}
