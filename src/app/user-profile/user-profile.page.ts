import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  user_data: any[];
  name: any;
  email: any;
  type:boolean=true;
  src: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
  this.getuserdetails();
  }

  getuserdetails(){
    var id = localStorage.getItem('user_id');
    this.api.getuser_data(id).subscribe(
      (data :any[] )=> {
        console.log(data);
        this.user_data = data;
        this.name = this.user_data[0]['display_name'];
        this.email = this.user_data[0]['email'];
        this.src = this.user_data[0]['user_photo_url'];
      })
  }
}
