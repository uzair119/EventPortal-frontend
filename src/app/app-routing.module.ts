import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompetitionRegisterComponent } from './competition-register/competition-register.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCompetitionsComponent } from './dashboard-competitions/dashboard-competitions.component';
import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { EditCompetitionComponent } from './edit-competition/edit-competition.component';
import { CompetitionDetailsComponent } from './competition-details/competition-details.component';
import { TeamsComponent } from './teams/teams.component';
import { AddTeamComponent } from './add-team/add-team.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'competitionsdashboard', component: DashboardCompetitionsComponent },
  { path: 'editcompetition/:id', component: EditCompetitionComponent },
  { path: 'addcompetition', component: AddCompetitionComponent },
  { path: 'competitions', component: CompetitionsComponent, data: {animation: 'AboutPage'} },
  { path: 'competition/:id', component: CompetitionDetailsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'addteam', component: AddTeamComponent },
  { path: 'login', component: LoginComponent },
  { path: 'competitionregister', component: CompetitionRegisterComponent },
  { path: 'register', component: SignupComponent },
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: '**', redirectTo: '' }

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
