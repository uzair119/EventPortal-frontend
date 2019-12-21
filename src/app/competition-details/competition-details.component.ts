import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '../model/competition';
import { CompetitionService } from '../services/competition.service';


@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})
export class CompetitionDetailsComponent implements OnInit {

  private competition: Competition;

  constructor(
    private activatedRoute: ActivatedRoute,
    private competitionService: CompetitionService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.getCompetition(params.id));
  }

  getCompetition(id: any) {
    this.competitionService.getCompetition(id).subscribe(competition => this.competition = competition);
  }

}
