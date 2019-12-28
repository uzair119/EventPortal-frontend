import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './model/user';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardService } from './services/dashboard.service';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  currentUser: User;
  dashboardEnabled: Boolean;
  isAdmin: Boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private dashboardService: DashboardService
  ) {
    this.isAdmin = false;
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x; console.log(x);
      if (this.currentUser != null && this.currentUser.role.name === 'ADMIN') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
    this.dashboardService.dashboardEnableObserver.subscribe(x => { this.dashboardEnabled = x; });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
