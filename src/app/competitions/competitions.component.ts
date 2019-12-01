import { Component, OnInit } from '@angular/core';

import { Competition } from '../competition';
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  competitions: Competition[];

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions(): void {
    this.competitionService.getCompetitions()
    .subscribe(competitions => {this.competitions = competitions; console.log(this.competitions); });
  }

}
