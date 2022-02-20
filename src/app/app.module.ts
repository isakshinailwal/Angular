import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';

import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { RFormsComponent } from './rforms/rforms.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { NewCinemaComponent } from './new-cinema/new-cinema.component';
import { SlotsComponent } from './slots/slots.component';
import { NewSlotComponent } from './new-slot/new-slot.component';

//import { GetRequestComponent, GetRequestTypedComponent, GetRequestErrorHandlingComponent, GetRequestHeadersComponent } from './components';



@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    SearchPageComponent,
    
    TestComponent,
    RFormsComponent,
    
    
    BookingPageComponent,
    ConfirmationComponent,
    LoginComponent,
    SignupComponent,
    BookingHistoryComponent,
    CinemasComponent,
    NewCinemaComponent,
    SlotsComponent,
    NewSlotComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
