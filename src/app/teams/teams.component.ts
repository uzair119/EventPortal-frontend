import { Component, OnInit } from '@angular/core';
import { Competition } from '../model/competition';
import { Router } from '@angular/router';
import { CompetitionService } from '../services/competition.service';
import { TeamService } from '../services/team.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';
import { Team } from '../model/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Array<Team>;
  user: User;

  remove(id: any) {
    this.teamService.deleteTeam(id).subscribe(_ => { this.loadTeams(); });
    // this.awaitingPersonList.push(this.personList[id]);
    // this.personList.splice(id, 1);
  }

  // edit(id: any) {
  //   this.router.navigate([`/editcompetition/${id}`]);
  // }

  add() {
    this.router.navigate(['/addteam']);
    // if (this.awaitingPersonList.length > 0) {
    //   const person = this.awaitingPersonList[0];
    //   this.personList.push(person);
    //   this.awaitingPersonList.splice(0, 1);
    // }
  }

  loadTeams() {
    this.teamService.getTeamsByLeadID(this.user.id).subscribe(data => { this.teams = data; console.log(data); });
  }

  getUser() {
    this.user = this.authenticationService.currentUserValue;
    this.loadTeams();
  }

  constructor(private router: Router, private teamService: TeamService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.getUser();
  }


}
