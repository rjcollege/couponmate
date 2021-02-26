import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  gotoDetails(){
    this.route.navigate(['/product-details']);
  }
  gotoBack(){
    this.route.navigate(['/home']);
  }
}
