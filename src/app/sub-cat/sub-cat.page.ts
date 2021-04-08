import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.page.html',
  styleUrls: ['./sub-cat.page.scss'],
})
export class SubCatPage implements OnInit {
  name: any;
  subcategory: any;
  baskettotal: any;

  constructor(private route:Router,private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
      this.subcategory = JSON.parse(params["category"]);
      console.log(this.name,this.subcategory)
  });
  var baskettotal = JSON.parse(localStorage.getItem('product'));
  if(baskettotal && baskettotal.length > 0){
    this.baskettotal = baskettotal.length;
  }
  }
  
  gotoHome(){
    this.route.navigate(['/home']);
  }
 
  getproductbycat_id(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        cat_id: id
      }
    };
    this.route.navigate(['product-list'], navigationExtras);
  }
}
