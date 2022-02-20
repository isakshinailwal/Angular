import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { NewCinemaComponent } from './new-cinema/new-cinema.component';
import { NewSlotComponent } from './new-slot/new-slot.component';

import { RFormsComponent } from './rforms/rforms.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SignupComponent } from './signup/signup.component';
import { SlotsComponent } from './slots/slots.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"bookinghistory",component:BookingHistoryComponent},
  {path:"search",component:SearchPageComponent},
  {path:"",component:SearchPageComponent},
  
  {path:"booking/:id",component:BookingPageComponent},
  {path:"confirmation/:BookingID",component:ConfirmationComponent},
  {path:"cinemas",component:CinemasComponent},
  {path:"newcinema",component:NewCinemaComponent},
  
  {path:"slots/:CinemaID",component:SlotsComponent},
  {path:"newslot/",component:NewSlotComponent},
  {path:"newslot/:CinemaID",component:NewSlotComponent},
  

  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
