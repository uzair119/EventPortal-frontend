import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Competition } from '../model/competition';
import { environment } from 'src/environments/environment';

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
      return this.http.get<Competition[]>(`${environment.apiUrl}/competition`);
        // .pipe(
        //   tap(_ => this.log('fetched heroes')),
        //   catchError(this.handleError<Hero[]>('getHeroes', []))
        // );
    }

    getDashboardCompetitions(): Observable<Competition[]>{
      return this.http.get<Competition[]>(`${environment.apiUrl}/auth/admin/competition`);
    }

    createCompetition(competition: Competition): Observable<Competition> {
      return this.http.post<Competition>(`${environment.apiUrl}/auth/admin/competition/create`, competition);
    }

    updateCompetition(competition: Competition): Observable<Competition> {
      return this.http.put<Competition>(`${environment.apiUrl}/auth/admin/competition/${competition.id}`, competition);
    }

    deleteCompetition(id: Number) {
      this.http.delete(`${environment.apiUrl}/auth/admin/competition/${id}`);
    }

}
