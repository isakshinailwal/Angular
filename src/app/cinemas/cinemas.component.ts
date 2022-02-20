import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.less']
})
export class CinemasComponent implements OnInit {

  constructor(private http: HttpClient) { }
  Cinemas: any;
  User:any
  ngOnInit(): void {

    var x = localStorage.getItem("User");
    if (x == null) { location.href="/login";return; }
    else {this.User =JSON.parse(x);
      if (this.User.userName != 'Admin') { location.href="/login";return; }
    }

    if (localStorage.getItem("User") == null) { }
    var User = localStorage.getItem("User");

    this.GetCinemas();

  }
  GetCinemas() {
    this.http.get("http://localhost:5000/cinemas/").subscribe(data => {


     
      if (data == null) { alert("Invalid Credentials"); }
      else {
        this.Cinemas = data;

        this.Cinemas.forEach((element: any) => {
          this.http.get("http://localhost:5000/slots/getSlotsByCinemaID/"+element._id).subscribe(data => {
            element.slots=data;

        });
  
});
//alert(JSON.stringify(this.Cinemas));
      } 


    });
  }
  Delete(id: string) {

    this.http.delete("http://localhost:5000/cinemas/" + id).subscribe(data => {

      this.GetCinemas();

    });

  }

}