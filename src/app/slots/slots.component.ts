import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.less']
})
export class SlotsComponent implements OnInit {
  @Input() CinemaID: any
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  Slots: any=null;
  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe(res => {
      this.CinemaID = res.get("CinemaID");
        //alert(this.CinemaID);
    });


    if (localStorage.getItem("User") == null) { }
    var User = localStorage.getItem("User");

    this.Load();

  }
  Load() {
    
    this.http.get("http://localhost:5000/slots/getSlotsByCinemaID/" + this.CinemaID).subscribe(data => {


      
      if (data == null) { alert("No Data to display"); }
      else {
        this.Slots = data;

      }


    });
  }
  Delete(id: string) {

    //alert(id);
    this.http.delete("http://localhost:5000/slots/" + id).subscribe(data => {

      var a = data;
      this.Load();

    });

  }


}
