  import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { first, map } from 'rxjs/operators';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private dashboardService: DashboardService
  ) {
      this.dashboardService.setDisableDashboard();
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) {
      //     this.router.navigate(['/login']);
      // }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
          email: ['', Validators.required],
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          cnic: ['', Validators.required],
          contact: ['', Validators.required],
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      console.log(this.f);
      const json = {
        'username': this.f.username.value,
        'password': this.f.password.value,
        'email': this.f.email.value,
        'firstname': this.f.firstname.value,
        'lastname': this.f.lastname.value,
        'cnic': this.f.cnic.value,
        'contactNum': this.f.contact.value
      };
            this.authenticationService.signup(json)
            .pipe(first())
            .subscribe(
              (data: HttpResponse<any>) => {
                console.log(data);
                this.router.navigate(['/login']);
              },
                error => {
                    console.log(error);
                    this.loading = false;
                });


  }

}
