import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router,ActivatedRoute, NavigationExtras} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.page.html',
  styleUrls: ['./favourite-list.page.scss'],
})
export class FavouriteListPage implements OnInit {
  products: any[];

  constructor(private api:ApiService,public navCtrl: NavController) { }

  ngOnInit() {
    this.getfavourite_prod();
  }

  getfavourite_prod(){
    var user_id = localStorage.getItem('user_id');
    this.api.getfavourite_prod(user_id).subscribe(
      (data :any[] )=> {
        this.products = data;
        console.log(data,'getfavourite_prod data');
        var count =  data.length;
        for(let i = 0;i<count;i++){
        if(this.products[i]['like'] == '1'){
        this.products[i]['active'] = true;
        }
        else{
        this.products[i]['active'] = false;
        }
        }
        console.log(this.products);
      });
  }  

  public getproductbyprod_id(id){
    console.log("here",id);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          prod_id: id,
      }
  };
  this.navCtrl.navigateForward(['product-details'],navigationExtras);
  }

}
