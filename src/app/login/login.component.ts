import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { XhrInterceptor } from '../xhr-interceptor.service';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { DashboardService } from '../services/dashboard.service';

@Component({ templateUrl: 'login.component.html', styleUrls: ['./login.component.scss'] })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private dashboardService: DashboardService) {
        this.dashboardService.setDisableDashboard();
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/home']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        const formData: FormData = new FormData();
        formData.append('username', this.f.username.value);
        formData.append('password', this.f.password.value);
        this.loading = true;
        this.authenticationService.login(formData)
            .pipe(first())
            .subscribe(
                (data: HttpResponse<any>) => {
                    console.log(data);
                    this.router.navigate(['/home']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }
}
