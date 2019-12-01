import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication-service.service';
import { first, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { User } from '../user';

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
  http: any;
  url: string;
  currentUserSubject: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
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

  onSubmit(): User {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      console.log(this.f);
      var formData: any = new FormData();
            formData.append("username", this.f.username.value);
            formData.append("password", this.f.password.value) ;
            formData.append("email", this.f.email.value) ;
            formData.append("firstname", this.f.firstname.value) ;
            formData.append("lastname", this.f.lastname.value) ;
            formData.append("cnic", this.f.cnic.value) ;
            formData.append("contactNum", this.f.contact.value) ;
          
            return this.http.post(this.url + '/register', formData, {observe: 'response' as 'body'})
            .pipe(map(user => {
              console.log(user);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                //this.currentUserSubject.next(user);
                return user;
            }));
             
         
  }

}
