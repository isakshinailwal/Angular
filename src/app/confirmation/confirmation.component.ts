import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.less']
})
export class ConfirmationComponent implements OnInit {

@Input() BookingID:any;

Booking:any;
  constructor( private http: HttpClient,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {//="61d68207c2de7fb4851792ec"

    
    this.activatedRoute.paramMap.subscribe(res=>{

      
       this.BookingID = res.get("BookingID");

      
      this.http.get<any>('http://localhost:5000/bookings/'+this.BookingID).subscribe(data => {
          this.Booking = data;
          
      });
    });

  }

}
