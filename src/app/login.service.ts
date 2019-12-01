import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private url = 'http://localhost:8080/auth/user';  // URL to web api

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  // constructor(private http: HttpClient) { }

  // getLoggedInUser (): Observable<User> {
  //   return this.http.get<User>(this.url);
  //   }

  //   addHero (hero: Hero): Observable<Hero> {
  //     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //       tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //       catchError(this.handleError<Hero>('addHero'))
  //     );
  //   }
  
  // login(user: User): Observable<boolean>{
  //   return this.http.post<>
  // }
}
