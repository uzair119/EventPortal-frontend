import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Team } from '../model/team';
import { TeamFormService } from '../services/team-form.service';
import { Subscription } from 'rxjs';
import { TeamService } from '../services/team.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  // addTeamForm: FormGroup;
  // loading = false;
  submitted = false;
  // returnUrl: string;


  teamForm: FormGroup;
  teamFormSub: Subscription;
  teamMemberList: FormArray;

  constructor(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
    private teamFormService: TeamFormService,
    private teamService: TeamService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
    // private competitionService: CompetitionService,
    // private dashboardService: DashboardService
    ) {
    // this.dashboardService.setDisableDashboard();
    // redirect to home if already logged in

  }

  ngOnInit() {

    this.teamForm = this.formBuilder.group({
      name: '',
      email: '',
      teamLead: {
        'id': this.authenticationService.currentUserValue.id
      },
      teamMemberList: this.formBuilder.array([])
    });


//     this.teamFormSub = this.teamFormService.teamForm$
//     .subscribe(team => {
//       this.teamForm = team;
//       this.players = this.teamForm.get('players') as FormArray;
// });
    // this.addTeamForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    //   maxTeamSize: ['', Validators.required]
    // });

    // // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  createMember(): FormGroup {
    return this.formBuilder.group({
      firstname: '',
      lastname: '',
      cnic: ''
    });
  }

  addMember(): void {
    this.teamMemberList = this.teamForm.get('teamMemberList') as FormArray;
    this.teamMemberList.push(this.createMember());
  }

  // convenience getter for easy access to form fields
  get f() { return this.teamForm.controls; }

  onSubmit() {
    console.log('submit');
    this.submitted = true;

    if (this.teamForm.invalid) {
      return;
    }

    this.teamService.registerTeam(this.teamForm).subscribe(team => console.log(team));
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
