import { HttpClient } from '@angular/common/http';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:string='Email';
  PWD:string='pwd';
  User:any

  constructor(private http: HttpClient) { }

 
  ngOnInit(): void {

    var x = localStorage.getItem("User");
    if (x != null) {
      this.User =JSON.parse(x);
      
    }
  }
  Login(Email:string,PWD:string):any  {
   
   
    var param = {email:Email,pwd:PWD}; 
    //alert(JSON.stringify(param));a
    this.http.post<any>('http://localhost:5000/users/login',param).subscribe(data => {
       
    
     //alert(JSON.stringify(data));
      if(data==null) { alert("Invalid Credentials");}
        else{
          localStorage.setItem("User",JSON.stringify(data));
          window.location.href="/search";
         
        }
        
    
      });
 return false;

  }

}
function go(arg0: string) {
  throw new Error('Function not implemented.');
}

