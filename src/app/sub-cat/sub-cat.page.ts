import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.page.html',
  styleUrls: ['./sub-cat.page.scss'],
})
export class SubCatPage implements OnInit {
  name: any;
  subcategory: any;

  constructor(private route:Router,private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
      this.subcategory = JSON.parse(params["category"]);
      console.log(this.name,this.subcategory)
  });
  }
  
  gotoHome(){
    this.route.navigate(['/home']);
  }
  gotoList(){
    this.route.navigate(['/product-details']);
  }
}
