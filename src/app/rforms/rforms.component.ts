import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.less']
})
export class RFormsComponent implements OnInit {
  User = {Email:"admin@gmail.com",PWD:'aa'}
  constructor() { }
  myRForms:any
  ngOnInit(): void {
    this.myRForms=new FormGroup(
{
  "Email":new FormControl(this.User.Email),
  "PWD":new FormControl(this.User.PWD)
  
}
    );
  }
  onSubmit(){
    console.log(this.myRForms.value);
    
  }

}
