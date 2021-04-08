import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
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
  saveproductArray: any;
  index: number;
  qtyindex: any;
  show:boolean = false;
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
    this.userid = localStorage.getItem('user_id');
    this.product = JSON.parse(localStorage.getItem('product'));
    this.saveproductArray = JSON.parse(localStorage.getItem('saveproduct'));
    console.log(this.saveproductArray);
    if(this.saveproductArray !== null ){
      console.log("here");
      if(this.saveproductArray.length > 0){
        this.show = true;
      }
    }

    if(this.product && this.product.length >0){
    for(let i=0; i< this.product.length;i++){
      this.total = this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    this.total = parseFloat(this.total).toFixed(2);
    console.log(this.total);
  }
  
}
  private decrement (index) {
    this.total = 0;
    if(this.product[index]['qty'] == 1){
      this.product[index]['qty'] = 1;
    }
    else{
      
      this.product[index]['qty']--;
      
    }
    for(let i=0; i< this.product.length;i++){
      this.total =this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    this.total = parseFloat(this.total).toFixed(2);
    localStorage.setItem('product', JSON.stringify(this.product)); 
    
  }
  private increment (index) {
    this.total = 0;
   
    this.product[index]['qty']++;
    
    for(let i=0; i< this.product.length;i++){
      this.total = this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    this.total = parseFloat(this.total).toFixed(2);
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
     if(data[0]['status'] == 1){
       localStorage.setItem('product','');
       alert("Add To cart Successfully");
       this.router.navigate(['/congratulations']);
     }
     else{
       alert("Add to cart failed");
     }
    });
      
  }
  deleteitem(index){
    this.total = 0;
    this.product=JSON.parse(localStorage.getItem('product'));
    this.product.splice(index, 1);
    for(let i=0; i< this.product.length;i++){
      this.total = this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    this.total = parseFloat(this.total).toFixed(2);
    localStorage.setItem('product', JSON.stringify(this.product));
  }

  savelater(index){
    this.total = 0;
    this.product=JSON.parse(localStorage.getItem('product'));

    //save for later
    if(localStorage.getItem('saveproduct')!== null){
      this.saveproductArray = JSON.parse(localStorage.getItem('saveproduct'));
      console.log(this.saveproductArray);
      for(let i=0; i < this.saveproductArray.length;i++){
        if(this.saveproductArray && this.saveproductArray.length > 0 && this.saveproductArray[i]['id'] == this.product[index]['id']){
          this.index = i;
          this.qtyindex = this.saveproductArray[i]['qty'];
        }
      }
      if(this.index >= 0){
      this.saveproductArray[this.index]['qty'] = this.saveproductArray[this.index]['qty'] + parseInt(this.qtyindex);
      }
      else{
      this.saveproductArray.push({"id":this.product[index]['id'],"name": this.product[index]['name'],"price":this.product[index]['price'], "qty":this.product[index]['qty'],'img':this.product[index]['img']}); 
      }
      localStorage.setItem('saveproduct', JSON.stringify(this.saveproductArray));  
      console.log(this.saveproductArray);
    }
    else{
      this.saveproductArray = [];
      this.saveproductArray.push({"id":this.product[index]['id'],"name": this.product[index]['name'],"price":this.product[index]['price'], "qty":this.product[index]['qty'],'img':this.product[index]['img']});  
      console.log(this.saveproductArray);
      localStorage.setItem('saveproduct', JSON.stringify(this.saveproductArray));  
    }
    this.product.splice(index, 1);
    for(let i=0; i< this.product.length;i++){
      this.total =this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    this.total = parseFloat(this.total).toFixed(2);
    localStorage.setItem('product', JSON.stringify(this.product));
   
  }
  movetocart(index){
    this.total = 0;
    this.product=JSON.parse(localStorage.getItem('product'));

    //move to cart
    if(localStorage.getItem('saveproduct')!== null){
      this.saveproductArray = JSON.parse(localStorage.getItem('saveproduct'));
      console.log(this.saveproductArray);
      for(let i=0; i < this.saveproductArray.length;i++){
        if(this.product && this.product.length >0 && this.saveproductArray[i]['id'] == this.product[index]['id']){
          this.index = i;
          this.qtyindex = this.product[i]['qty'];
        }
      }
      if(this.index >= 0){
      this.product[this.index]['qty'] = this.product[this.index]['qty'] + parseInt(this.qtyindex);
      }
      else{
      this.product.push({"id":this.saveproductArray[index]['id'],"name": this.saveproductArray[index]['name'],"price":this.saveproductArray[index]['price'], "qty":this.saveproductArray[index]['qty'],'img':this.saveproductArray[index]['img']}); 
      }
      localStorage.setItem('product', JSON.stringify(this.product));  
      console.log(this.product);
    }
    else{
      this.product = [];
      this.product.push({"id":this.saveproductArray[index]['id'],"name": this.saveproductArray[index]['name'],"price":this.saveproductArray[index]['price'], "qty":this.saveproductArray[index]['qty'],'img':this.saveproductArray[index]['img']});  
      console.log(this.product);
      localStorage.setItem('product', JSON.stringify(this.product));  
    }
    this.saveproductArray.splice(index, 1);
    console.log(this.product);
    this.total =0 ;
    for(let i=0; i< this.product.length;i++){
      this.total =this.total+(this.product[i]['qty']* this.product[i]['price']);
    }
    this.total = parseFloat(this.total).toFixed(2);
    localStorage.setItem('product', JSON.stringify(this.product));
    localStorage.setItem('saveproduct', JSON.stringify(this.saveproductArray))
  }
  deletelater(index){
    this.total = 0;
    this.saveproductArray=JSON.parse(localStorage.getItem('saveproduct'));
    this.saveproductArray.splice(index, 1);
    // for(let i=0; i< this.saveproductArray.length;i++){
    //   this.total = parseFloat(this.total+(this.saveproductArray[i]['qty']* this.saveproductArray[i]['price'])).toFixed(2);
    // }
    localStorage.setItem('saveproduct', JSON.stringify(this.saveproductArray));
  }
  gotToBack(){
    history.go(-1);
  }
}
