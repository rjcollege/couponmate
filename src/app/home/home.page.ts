import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './../api.service';

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
  constructor(private route: Router,private api: ApiService) {}

  ngOnInit(){
    this.getcategory_data();
  }

  gotToCat(){
    this.route.navigate(['/category']);
  }
 
  gotoBeauty(){
    this.route.navigate(['/beauty']);
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
        }
      })
  }
}
