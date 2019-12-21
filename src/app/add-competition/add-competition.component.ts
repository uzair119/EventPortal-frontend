import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { DashboardService } from '../services/dashboard.service';
import { first } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { CompetitionService } from '../services/competition.service';
import { Competition } from '../model/competition';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.scss']
})
export class AddCompetitionComponent implements OnInit {
  addCompetitionForm: FormGroup;
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
    this.addCompetitionForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      maxTeamSize: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  // convenience getter for easy access to form fields
  get f() { return this.addCompetitionForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.addCompetitionForm.invalid) {
      return;
    }

    const competition: Competition = new Competition();
    competition.name = this.f.name.value;
    competition.description = this.f.description.value;
    competition.maxTeamSize = this.f.maxTeamSize.value;
    // stop here if form is invalid

    this.loading = true;
    this.competitionService.createCompetition(competition)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/competitionsdashboard']);
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }
}
