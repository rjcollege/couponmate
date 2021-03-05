import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, NavigationExtras} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  prod_id: any;
  product: any[];
  title: any;
  price: any;
  desc: any;
  url: any;

  constructor(private route:Router, private activatedRoute:ActivatedRoute, private api:ApiService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.prod_id = params['prod_id'];
  });
  this.getproductbyprod_id()
  }
  getproductbyprod_id(){
    this.api.getproductbyprod_id(this.prod_id).subscribe(
      (data :any[] )=> {
        this.product = data;
        this.title=this.product[0]['title'];
        this.price = this.product[0]['price'];
        this.desc = this.product[0]['content'];
        this.url = this.product[0]['image_url'];
        console.log(this.product,this.product[0]['title']);
      });
    }
  gotoList(){
    this.route.navigate(['/product-list']);
  }

}
