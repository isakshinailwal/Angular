import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-cinema',
  templateUrl: './new-cinema.component.html',
  styleUrls: ['./new-cinema.component.less']
})
export class NewCinemaComponent implements OnInit {


  Cinema = { cinemaName: "", city: "", screens: [] };
  Screens: any = [];

  constructor(private http: HttpClient) { }
  CinemaForm = new FormGroup(
    {
      "cinemaName": new FormControl(),
      "city": new FormControl()

    });

  ngOnInit(): void {


  }


  Add(Screen: String) {

    if (!this.Screens.includes(Screen)) { this.Screens.push(Screen); }
    
  }
  Delete(Screen: String) {
    if (this.Screens.includes(Screen)) { this.Screens.splice(this.Screens.indexOf(Screen), 1); }
  }


  Save() {


    if (this.Screens.length==0) { alert("Ad atleast 1 screen"); return; }

    this.Cinema = Object.assign(this.Cinema,this.CinemaForm.value);
    this.Cinema.screens = this.Screens;
    console.log(JSON.stringify(this.Cinema));


    

    this.http.post<any>('http://localhost:5000/cinemas/create/', this.Cinema).subscribe(data => {


      //alert(JSON.stringify(data));
      if (data) {
        alert('Record Created..');
        location.assign("/cinemas");

      }

    });
    //



  }

}
