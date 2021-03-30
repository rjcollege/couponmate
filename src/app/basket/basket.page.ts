import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  product: any;
  id: any;
  name: any;
  qty: any;
  price: any;
  total :any =0;
  userid: string;
  constructor(private api:ApiService) { }

  ngOnInit() {
     this.userid = localStorage.getItem('user_id');
    this.product = JSON.parse(localStorage.getItem('product'));
    console.log(this.product);
    for(let i=0; i< this.product.length;i++){
      this.total = this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    console.log(this.total)
  }
  private decrement (index) {
    if(this.product[index]['qty'] == this.product[index]['qty']){
      this.product[index]['qty'] = 1;
    }
    else{
      this.product[index]['qty']--;
    }
    for(let i=0; i< this.product.length;i++){
      this.total = this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    localStorage.setItem('product', JSON.stringify(this.product)); 
    
  }
  private increment (index) {
    this.product[index]['qty']++;
    for(let i=0; i< this.product.length;i++){
      this.total = this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    localStorage.setItem('product', JSON.stringify(this.product)); 
  }
  SendData(){
    let postData =  {
    user: this.userid,
    product: JSON.parse(localStorage.getItem('product')),
    totalAmount:this.total
    }
    this.api.buynow(postData).subscribe(
    (data :any[] )=> {
      console.log("hi");
    });
      
  }
}
