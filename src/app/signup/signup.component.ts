import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Error: string = '';
  User = { userName: "", mobile: "", email: "", pwd: '', REPWD: '' }
  constructor(private http: HttpClient) { }
  SignUpForm: any
  ngOnInit(): void {
    this.SignUpForm = new FormGroup(
      {
        "email": new FormControl(this.User.email),
        "pwd": new FormControl(this.User.pwd),
        "userName": new FormControl(this.User.userName),
        "mobile": new FormControl(this.User.mobile),
        "REPWD": new FormControl(this.User.REPWD)


      });
  }
  onSubmit() {
    this.Error = '';
    if (this.SignUpForm.value.pwd != this.SignUpForm.value.REPWD) { this.Error = "Password MisMatch"; return; }


    this.http.post<any>('http://localhost:5000/users/create/', this.SignUpForm.value).subscribe(data => {


      //alert(JSON.stringify(data));
      if (data) {
        alert('Profile Created.. Proceed to Login');
        location.assign("/login");

      }

    });
    //





  }
}
