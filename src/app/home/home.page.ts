import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private route: Router) {}

  gotToCat(){
    this.route.navigate(['/category']);
  }
 
  gotoBeauty(){
    this.route.navigate(['/beauty']);
  }
}
