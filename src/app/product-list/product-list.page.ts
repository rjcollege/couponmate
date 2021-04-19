import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, NavigationExtras} from '@angular/router';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  cat_id: any;
  products: any[];
  isClick: boolean=false;

  constructor(private route:Router,private activatedRoute:ActivatedRoute, private api:ApiService,public navCtrl: NavController, private ngxService: NgxUiLoaderService) { }

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
    this.ngxService.start();
    var user_id = localStorage.getItem('user_id');
    this.api.getproductbycat_id(this.cat_id,user_id).subscribe(
      (data :any[] )=> {
        this.products = data;
        this.ngxService.stop(); 
        var count =  data.length;
        for(let i = 0;i<count;i++){
        if(this.products[i][0]['like'] == '1'){
        this.products[i][0]['active'] = true;
        }
        else{
        this.products[i][0]['active'] = false;
        }
        }
        console.log(this.products);
      });
  }    
  
  addToFav(product){
      console.log(product);
      product['active']=!product['active'];
      var user_id = localStorage.getItem('user_id');
      this.api.favourite(product['id'],product['active'],user_id).subscribe(
        data => {
          console.log(data);
        })
  }
   
}
