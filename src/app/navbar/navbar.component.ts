import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  IsLoggedIn:boolean=false;
  IsAdmin:boolean=false;
  IsUser:boolean=false;
  constructor() { }
  User:any
  ngOnInit(): void {

    var x = localStorage.getItem("User");
    if (x != null) 
    {this.User =JSON.parse(x);
      this.IsAdmin = this.User.userName == 'Admin';
      this.IsUser = this.User.userName != 'Admin';
      this.IsLoggedIn=true;
    }
  }
  Logout(){

    localStorage.removeItem("User");
    localStorage.removeItem("Student");
    location.href = "/search";
    
  }

}
