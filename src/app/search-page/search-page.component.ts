import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHandler } from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less']
})
export class SearchPageComponent implements OnInit {
  totalAngularPackages:any;
  Movies:any;
  Keyword:string='';
    constructor(private http: HttpClient) { }
    SearchForm:any
    ngOnInit() :void{
      this.SearchForm=new FormGroup({
        "Keyword":new FormControl('')
      });
    
        this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=d4dbcce6840ad31ea6bf30dc2821772d').subscribe(data => {
            this.Movies = data.results;

        });       
    }
   
   
  Search(Keyword:any)
  {
    this.Movies=[];
      this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=d4dbcce6840ad31ea6bf30dc2821772d&query='+Keyword).subscribe(data => {
          this.Movies = data.results;
          //  alert(data.results);
      });
  }
  SelectMovie(MovieID:any){

      location.assign('Booking');
  }
}
 