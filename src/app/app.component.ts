import { Component } from '@angular/core';
import { AuthenticationService } from './authentication-service.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authenticationService: AuthenticationService) {  }

  authenticatedUser: any;
  logout(){
    console.log("click");
    this.authenticationService.logout().subscribe(any => console.log(any));
  }
  ngOnInit(): void {
    //console.log(this.authenticatedUser);
      this.authenticationService.currentUserSubject.subscribe(currentUser => {this.authenticatedUser = currentUser; console.log(this.authenticatedUser);});
      //console.log(this.authenticationService.currentUserValue);
      //console.log(this.authenticatedUser);
  }
}
