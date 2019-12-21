import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../services/competition.service';
import { Competition } from '../model/competition';

@Component({
  selector: 'app-dashboard-competitions',
  templateUrl: './dashboard-competitions.component.html',
  styleUrls: ['./dashboard-competitions.component.scss']
})
export class DashboardCompetitionsComponent implements OnInit {
  competitions: Array<Competition>;


  remove(id: any) {
    this.competitionService.deleteCompetition(id).subscribe(_ => { this.loadCompetitions(); });
    // this.awaitingPersonList.push(this.personList[id]);
    // this.personList.splice(id, 1);
  }

  edit(id: any) {
    this.router.navigate([`/editcompetition/${id}`]);
  }

  add() {
    this.router.navigate(['/addcompetition']);
    // if (this.awaitingPersonList.length > 0) {
    //   const person = this.awaitingPersonList[0];
    //   this.personList.push(person);
    //   this.awaitingPersonList.splice(0, 1);
    // }
  }

  loadCompetitions() {
    this.competitionService.getDashboardCompetitions().subscribe(data => { this.competitions = data; console.log(data); });
  }

  constructor(private router: Router, private competitionService: CompetitionService) { }

  ngOnInit() {
    this.loadCompetitions();
  }

}
