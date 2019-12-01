import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompetitionRegisterComponent } from './competition-register/competition-register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'competitionregister', component: CompetitionRegisterComponent},
  { path: 'register', component: SignupComponent},
  { path: '**', redirectTo: ''}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
