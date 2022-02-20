import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.less']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  MyBookings: any;
  User:any
  ngOnInit(): void {
    var x = localStorage.getItem("User");
    if (x == null) { location.href="/login";return; }
    else {this.User =JSON.parse(x);}

    this.GetMyBookings();

  }
  GetMyBookings() {
    this.http.get("http://localhost:5000/bookings/getMyBookings/"+this.User._id).subscribe(data => {


      //alert(JSON.stringify(data));
      if (data == null) { alert("Invalid Credentials"); }
      else {
        this.MyBookings = data;

      }


    });
  }
  DeleteBooking(id: string) {

    this.http.delete("http://localhost:5000/bookings/" + id).subscribe(data => {


      this.GetMyBookings();



    });

  }

}
