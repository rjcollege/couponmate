import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login(email,password){
   // console.log(email,password);
    return this.http.get(environment.apiURL+'loginapp.php?username='+email+'&password='+password);
  }

  public getcategory_data(){
    return this.http.get(environment.apiURL+'getcategory_data.php');
  }
  public getproductbycat_id(id){
    return this.http.get(environment.apiURL+'getproductbycat_id.php?cat_id='+id);
  }
  public getproductbyprod_id(id){
    return this.http.get(environment.apiURL+'getproductbyprod_id.php?prod_id='+id);
  }
}
