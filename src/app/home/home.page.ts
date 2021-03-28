import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {ApiService} from './../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  category: Object;
  maincategory: any[];
  constructor(private route: Router,private api: ApiService,public navCtrl: NavController) {}

  ngOnInit(){
    this.getcategory_data();
  }

  gotToCat(){
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     category: JSON.stringify(this.maincategory)
    //   }
    // };
    this.route.navigate(['/category']);//, navigationExtras
  }
 
  getcategory_data(){
    this.api.getcategory_data().subscribe(
      (data :any[] )=> {
        console.log(data);
        this.category = data;
        var count = data.length;
        for(let i=0;i<count;i++){
          var get_name = this.category[i]['name'].split('&');
          this.category[i]['name'] = get_name[0]; 
          var get_name1 = this.category[i]['name'].split('-');
          this.category[i]['name'] = get_name1[0]; 
          var get_name2 = this.category[i]['name'].split(',');
          this.category[i]['name'] = get_name2[0]; 
          var get_name3 = this.category[i]['name'].split(' ');
          this.category[i]['name'] = get_name3[0];
        }
      })
  }

  gotosubcat(name,sub_cat){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          category: JSON.stringify(sub_cat),
          name:name
      }
  };
  this.navCtrl.navigateForward(['sub-cat'],navigationExtras);
  }

  gotToUser(){
    this.route.navigate(['/user-profile']);//, navigationExtras
  }
}
