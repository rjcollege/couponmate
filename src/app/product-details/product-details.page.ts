import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  prod_id: any;
  product: any[];
  title: any;
  price: any;
  desc: any;
  url: any;
  id: any;
  productArray: any = [];
  private currentNumber = 1;
  index: number;
  qtyindex: any;
  userid: string;
  
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private api: ApiService) { }
  private increment() {
    this.currentNumber++;
  }
  
  private decrement() {
    if (this.currentNumber == 1) {
      this.currentNumber = 1
    }
    else {
      this.currentNumber--;
    }
  }

  ngOnInit() {
    this.userid = localStorage.getItem('user_id');
    this.activatedRoute.queryParams.subscribe(params => {
      this.prod_id = params['prod_id'];
    });
    this.getproductbyprod_id()
  }
  getproductbyprod_id() {
    this.api.getproductbyprod_id(this.prod_id).subscribe(
      (data: any[]) => {
        this.product = data;
        this.id = this.product[0]['id'];
        this.title = this.product[0]['title'];
        this.price = this.product[0]['price'];
        this.desc = this.product[0]['content'];
        this.url = this.product[0]['image_url'];
        console.log(this.product, this.product[0]['title'], this.desc);
      });
  }
  gotoList() {
    this.route.navigate(['/product-list']);
  }
  gotobasket() {
    if (localStorage.getItem('product') !== null) {
      this.productArray = JSON.parse(localStorage.getItem('product'));
      if (this.productArray.length > 0) {
        console.log(this.productArray);
        for (let i = 0; i < this.productArray.length; i++) {
          if (this.productArray[i]['id'] == this.id) {
            this.index = i;
            this.qtyindex = this.productArray[i]['qty'];
          }
        }
        if (this.index >= 0) {
          this.productArray[this.index]['qty'] = this.currentNumber + parseInt(this.qtyindex);
        }
        else {
          this.productArray.push({ "id": this.id, "name": this.title, "price": this.price, "qty": this.currentNumber, 'img': this.url });
        }
        localStorage.setItem('product', JSON.stringify(this.productArray));
        console.log(this.productArray);
      }
      else{
        this.productArray.push({ "id": this.id, "name": this.title, "price": this.price, "qty": this.currentNumber, 'img': this.url });
        localStorage.setItem('product', JSON.stringify(this.productArray));
      }
    }
    else {
      this.productArray.push({ "id": this.id, "name": this.title, "price": this.price, "qty": this.currentNumber, 'img': this.url });
      localStorage.setItem('product', JSON.stringify(this.productArray));
    }
    this.route.navigate(['/basket']);
  }

  buynow(){
    let postData =  {
      user: this.userid,
      product: ({ "id": this.id, "name": this.title, "price": this.price, "qty": this.currentNumber, 'img': this.url }),
      totalAmount:this.price
      }
      this.api.buynow(postData).subscribe(
      (data :any[] )=> {
       if(data[0]['status'] == 1){
         alert("Add To cart Successfully");
         this.route.navigate(['/home']);
       }
       else{
         alert("Add to cart failed");
       }
      });
  }

}
