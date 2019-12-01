import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { User } from './user';
import { XhrInterceptor } from './xhr-interceptor.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private url = 'http://localhost:8080'
    public currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,
              private xhr: XhrInterceptor
      ) {
        this.getLoggedInUser().subscribe(user => {
          this.currentUserSubject = new BehaviorSubject<User>(user);
          this.currentUser = this.currentUserSubject.asObservable(); 
        });
         this.currentUserSubject = new BehaviorSubject<User>(null);
         this.currentUser = this.currentUserSubject.asObservable();
    }

    public currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login (username, password) {
      console.log(username,password);
      var formData: any = new FormData();
      formData.append("username", username);
      formData.append("password", password) ;
        return this.http.post<any>(this.url + '/login', formData, {observe: 'response' as 'body'})
            .pipe(map(user => {
              console.log(user);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    logout() {
      return this.http.post<any>(this.url + '/logout', new FormData())
            .pipe(map(user => {
              console.log(user);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(null);
                this.getLoggedInUser();
            }));
          }



    public getLoggedInUser (): Observable<User> {
      return this.http.get<User>(this.url + '/auth/user/me')
         .pipe(
           map(_ => {this.currentUserSubject.next(_);}),
           catchError(err => of(null))
         );
    }
}
