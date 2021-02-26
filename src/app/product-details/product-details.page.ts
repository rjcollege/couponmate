import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  gotoList(){
    this.route.navigate(['/product-list']);
  }
}
