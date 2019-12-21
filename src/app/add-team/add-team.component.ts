import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from '../services/competition.service';
import { DashboardService } from '../services/dashboard.service';
import { Team } from '../model/team';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  addTeamForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private competitionService: CompetitionService,
    private dashboardService: DashboardService) {
    this.dashboardService.setDisableDashboard();
    // redirect to home if already logged in

  }

  ngOnInit() {
    this.addTeamForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      maxTeamSize: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.addTeamForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.addTeamForm.invalid) {
      return;
    }

    const team: Team = new Team();
    // competition.name = this.f.name.value;
    // competition.description = this.f.description.value;
    // competition.maxTeamSize = this.f.maxTeamSize.value;
    // stop here if form is invalid

    // this.loading = true;
    // this.competitionService.createCompetition(competition)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //       this.router.navigate(['/teams']);
    //     },
    //     error => {
    //       console.log(error);
    //       this.loading = false;
    //     });
  }
}
