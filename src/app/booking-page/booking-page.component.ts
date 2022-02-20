import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
//import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.less']
})
export class BookingPageComponent implements OnInit {
  @Input() id: any

  BookedSeats: string[] = [];
  AllSeats = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"];


  SelectedCity :any= null;
  Slots: any = []
  SelectedSlot:any=null;
  FilteredSlots:any=[]
  Cities: any = [];
  SelectedSeats: any = null;
  SelectedDate: any = null;
  User:any=null
  Cinemas: any
  Movie: any = {};
  MovieID: any;
  FilteredCinema: any = []
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  CinemaList: any = [];
  ngOnInit(): void {
    var x = localStorage.getItem("User");
    if (x == null) { location.href="/login";return; }
    else {this.User =JSON.parse(x);}

    this.activatedRoute.paramMap.subscribe(res => {

    this.MovieID = res.get("id");


      this.http.get<any>('https://api.themoviedb.org/3/movie/' + this.MovieID + '?api_key=d4dbcce6840ad31ea6bf30dc2821772d').subscribe(data => {
        this.Movie = data;
        this.http.get<any>('http://localhost:5000/cinemas/getCinemasByMovieID/' + this.MovieID).subscribe(data => {
          this.Cinemas = data;

          this.http.get<any>('http://localhost:5000/slots/getSlotsByMovieID/' + this.MovieID).subscribe(data => {
            this.Slots = data;
            this.Slots.forEach((Slot: any) => {
              
              if (!this.Cities.includes(Slot.cinema.city)) this.Cities.push(Slot.cinema.city);
            
            });
          });


        });
      });



    });

  }

  GetCinemaListFromCity(City: string) {
  this.Clear();


    this.SelectedCity =  City ;
    this.FilteredCinema = [];
    this.Cinemas.forEach((element: any) => {
      if (element.city == City) this.FilteredCinema.push(element);

    });
    
  }

  GetSlotListFromCinema(cinemaID: any) {

    
    
    this.SelectedDate=null;
    this.SelectedCinemaID = null;
    this.SelectedSlot=null;
    this.FilteredSlots=[];
    this.SelectedSeats = [];
    this.SelectedDate=null;
    this.SelectedCinemaID = cinemaID;
    this.FilteredCinema.forEach((element: any) => {
      if (element._id == cinemaID) { this.FilteredSlots = element.slots; }
    });

  }
  GetSlotFromFilteredSlots(SelectedSlot: any) {

    if(SelectedSlot=='Select Slot')
    {
      this.SelectedDate=null;
    
    this.SelectedSlot=null;
    
    this.SelectedSeats = [];
    }
    else this.SelectedSlot = SelectedSlot;

  }


  SelectedCinemaID: any
  GetBookedTickets(Date: any) {


    

   // alert(JSON.stringify(booking));return;




    this.AllSeats.forEach(element => {
      var ob = document.getElementById(element);
      if (ob) ob.style.backgroundColor = "White";
    });


    this.SelectedDate = Date;
    this.BookedSeats = [];
    
    this.http.get<any>('http://localhost:5000/cinemas/GetBookedSeats/'+this.SelectedCinemaID+'/'+this.SelectedSlot+'/' +this.SelectedDate).subscribe(data => {
      this.BookedSeats = data;
      if (this.BookedSeats.length == 25) alert("HouseFull movie .. No Seat Available");
      this.BookedSeats.forEach(element => {
        var ob = document.getElementById(element);
        if (ob) ob.style.backgroundColor = "Gray";

      });


    });

  }


  SelectSeat(ob: HTMLTableCellElement): void {


    if (!ob || this.BookedSeats.includes(ob.id)) return;

    if (!this.SelectedSeats.includes(ob.id)) {
      ob.style.backgroundColor = "LightGreen";
      this.SelectedSeats.push(ob.id);

    }
    else {
      ob.style.backgroundColor = "White";
      this.SelectedSeats.splice(this.SelectedSeats.indexOf(ob.id), 1);
    }
    this.x = this.SelectedSeats.join(',');

  }
  Clear() {


    this.SelectedCity=null;
    this.SelectedDate=null;
    this.SelectedCinemaID = null;
    this.SelectedSlot=null;
    this.FilteredSlots=[];
    this.SelectedSeats = [];
    

  }
  x: any
  Book(temp: any) {

    var BookingObj={
      cinema:this.SelectedCinemaID,
      date:this.SelectedDate,
      slot:this.SelectedSlot,
      seats:this.SelectedSeats,
      movieID:this.MovieID,
      user:this.User._id
    };
     //alert(JSON.stringify(this.User));return;
    
    


    this.http.post<any>('http://localhost:5000/bookings/create/', BookingObj).subscribe(data => {
      this.BookedSeats = data;

      if (data._id) {


        location.assign("/confirmation/" + data._id);
      }


    });



    //
    //alert(JSON.stringify(BookingObj));
  }
}


