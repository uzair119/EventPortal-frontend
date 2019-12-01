import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitioncardComponent } from './competitioncard/competitioncard.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { XhrInterceptor } from './xhr-interceptor.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CompetitionRegisterComponent } from './competition-register/competition-register.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    CompetitioncardComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    CompetitionRegisterComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
