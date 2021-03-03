import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {
  categories: any;
  dataflag:boolean = false;
 
  constructor(private route:Router, private activatedRoute:ActivatedRoute, private api:ApiService) { 
   
  }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (params && params.category) {
    //     this.categories = JSON.parse(params.category);
    //     console.log(this.categories)
    //   }
    // });
      this.getcategory_data();
    
  }
  gotToBeauty(){
    this.route.navigate(['/beauty']);
  }
  gotToBack(){
    this.route.navigate(['/home']);
  }

  getcategory_data(){
    this.api.getcategory_data().subscribe(
      (data :any[] )=> {
        console.log(data);
        this.categories = data;
        this.dataflag = true;
      });
  }
}
