import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.page.html',
  styleUrls: ['./beauty.page.scss'],
})
export class BeautyPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  
  gotoHome(){
    this.route.navigate(['/home']);
  }
  gotoList(){
    this.route.navigate(['/product-details']);
  }
}
