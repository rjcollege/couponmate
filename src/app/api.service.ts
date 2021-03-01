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
    return this.http.get(environment.apiURL+'login.php?username='+email+'&password='+password);
  }

}
