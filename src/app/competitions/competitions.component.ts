import { Component, OnInit } from '@angular/core';

import { Competition } from '../model/competition';
import { CompetitionService } from '../services/competition.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {


  competitions: Competition[];
  loader: boolean;

  ngOnInit(): void {
    this.loader = true;
    this.getCompetitions();
  }
  constructor(private competitionService: CompetitionService,
    private dashboardService: DashboardService) {
    this.dashboardService.setDisableDashboard();
  }


  getCompetitions(): void {
    this.competitionService.getCompetitions()
      .subscribe(competitions => { this.competitions = competitions; console.log(this.competitions); this.loader = false; });
  }

}
