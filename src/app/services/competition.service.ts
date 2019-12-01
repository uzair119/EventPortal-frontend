import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Competition } from '../competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private url = 'http://localhost:8080/competition';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }

    getCompetitions (): Observable<Competition[]> {
      return this.http.get<Competition[]>(this.url);
        // .pipe(
        //   tap(_ => this.log('fetched heroes')),
        //   catchError(this.handleError<Hero[]>('getHeroes', []))
        // );
    }
}
