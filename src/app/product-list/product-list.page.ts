import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, NavigationExtras} from '@angular/router';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  cat_id: any;
  products: any[];
  isClick: boolean=false;

  constructor(private route:Router,private activatedRoute:ActivatedRoute, private api:ApiService,public navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.cat_id = params['cat_id'];
  });
  this.getproductbycat_id();
  }
  public getproductbyprod_id(id){
    console.log("here");
    let navigationExtras: NavigationExtras = {
      queryParams: {
          prod_id: id,
      }
  };
  this.navCtrl.navigateForward(['product-details'],navigationExtras);
  }
  gotoBack(){
    this.route.navigate(['/home']);
  }
  getproductbycat_id(){
    this.api.getproductbycat_id(this.cat_id).subscribe(
      (data :any[] )=> {
        this.products = data;
        var count =  data.length;
        for(let i = 0;i<count;i++){
        this.products[i][0]['active'] = false;
        }
        console.log(this.products);
      });
    }    
      addToFav(product){
      product['active']=!product['active'];
     }
   
}
