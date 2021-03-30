import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'; 
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login(email,password){
    return this.http.get(environment.apiURL+'loginapp.php?username='+email+'&password='+password);
  }
  public register(dname,uname,email,password,confirm,secret){
    return this.http.get(environment.apiURL+'register.php?dname='+dname+'&uname='+uname+'&email='+email+'&password='+password+'&confirm='+confirm+'&secret='+secret);
  }
  public forgot(email){
    return this.http.get(environment.apiURL+'forgot.php?email='+email);
  }
  public getuser_data(userid){
    console.log(userid);
    return this.http.get(environment.apiURL+'getuserdetailsbyid.php?userid='+userid);  
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
  public buynow(param){
    console.log(param);
    return this.http.post(environment.apiURL+'buynow.php', param);   
  }
}
