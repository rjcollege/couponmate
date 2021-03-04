import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import {ApiService} from './../api.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: any;
  dataflag:boolean = false;
  
  constructor(private route:Router, private activatedRoute:ActivatedRoute, private api:ApiService,public navCtrl: NavController) { 
  }

  ngOnInit() {
    this.getcategory_data();
  }

  gotToSubCategory(sub_cat,name){
    console.log("here");
    let navigationExtras: NavigationExtras = {
      queryParams: {
          category: JSON.stringify(sub_cat),
          name:name
      }
  };
  this.navCtrl.navigateForward(['sub-cat'],navigationExtras);
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
