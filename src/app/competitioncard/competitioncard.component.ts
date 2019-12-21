import { Component, OnInit, Input } from '@angular/core';
import { Competition } from '../model/competition';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-competitioncard',
  templateUrl: './competitioncard.component.html',
  styleUrls: ['./competitioncard.component.scss']
})
export class CompetitioncardComponent implements OnInit {

  @Input() competition: Competition;
  constructor(private dashboardService: DashboardService,
    private router: Router
    ) {
    this.dashboardService.setDisableDashboard();
  }

  ngOnInit() {
  }

  register(id: any) {
    this.router.navigate([`/competition/${id}`]);
  }
}
