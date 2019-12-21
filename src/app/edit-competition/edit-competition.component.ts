import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CompetitionService } from '../services/competition.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Competition } from '../model/competition';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-competition',
  templateUrl: './edit-competition.component.html',
  styleUrls: ['./edit-competition.component.scss']
})
export class EditCompetitionComponent implements OnInit {
  editCompetitionForm: FormGroup;
  loading = false;
  submitted = false;
  competition: Competition;

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private competitionService: CompetitionService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.getCompetitionDetails(params.id));
    this.editCompetitionForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      maxTeamSize: ['', Validators.required]
    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.editCompetitionForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.editCompetitionForm.invalid) {
      return;
    }

    const competition: Competition = new Competition();
    competition.id = this.competition.id;
    competition.name = this.f.name.value;
    competition.description = this.f.description.value;
    competition.maxTeamSize = this.f.maxTeamSize.value;
    // stop here if form is invalid

    this.loading = true;
    this.competitionService.updateCompetition(competition)
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

  getCompetitionDetails(id: any) {
    this.competitionService.getCompetition(id).subscribe(competition => {
      console.log(competition);
      this.f.id.setValue(competition.id);
      this.f.name.setValue(competition.name);
      this.f.description.setValue(competition.description);
      this.f.maxTeamSize.setValue(competition.maxTeamSize);
      this.competition = competition;
    });
  }

}
