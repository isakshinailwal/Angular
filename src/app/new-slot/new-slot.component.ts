import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-slot',
  templateUrl: './new-slot.component.html',
  styleUrls: ['./new-slot.component.less']
})
export class NewSlotComponent implements OnInit {
  @Input() CinemaID: any
  Cinema:any
  Slot = { slotTime: "", movieID: "", screen: "", cinemaID: "" };
  Screens: any = ["asd","fdvdfg"];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  SlotForm = new FormGroup(
    {
      "slotTime": new FormControl(),
      "movieID": new FormControl(),
      "screen": new FormControl(),
      "cinemaID": new FormControl()
    });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      this.CinemaID = res.get("CinemaID");
        //alert(this.CinemaID);
    });

    this.http.get<any>('http://localhost:5000/cinemas/'+this.CinemaID ).subscribe(data => {


      //alert(this.Screens.length);return;
      if (data) {

        this.Screens = data.screens;
      }
    });


  }


  Save() {
    
    
    Object.assign(this.Slot,this.SlotForm.value);

    if(this.SlotForm.value.screen==null) this.Slot.screen=this.Screens[0];
    if(this.SlotForm.value.movieID==null || this.SlotForm.value.slotTime==null) return;
    this.Slot.cinemaID = this.CinemaID;
    //alert(JSON.stringify(this.Slot));//return;

    this.http.post<any>('http://localhost:5000/slots/create/', this.Slot).subscribe(data => {


      //alert(JSON.stringify(data));
      if (data) {
        alert('Record Created..');
        location.assign("/slots/"+this.CinemaID);
      }

    });
    //



  }

}
