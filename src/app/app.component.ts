import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './model/user';
import { Router } from '@angular/router';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  dashboardEnabled: Boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private dashboardService: DashboardService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.dashboardService.dashboardEnableObserver.subscribe(x => {this.dashboardEnabled = x; });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
