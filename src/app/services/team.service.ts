import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Team } from '../model/team';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }

    getTeamsByLeadID (id: any): Observable<Team[]> {
      return this.http.get<Team[]>(`${environment.apiUrl}/auth/team/lead/${id}`);
        // .pipe(
        //   tap(_ => this.log('fetched heroes')),
        //   catchError(this.handleError<Hero[]>('getHeroes', []))
        // );
    }

    registerTeam(teamForm: FormGroup): Observable<Team>
    {
      return this.http.post<Team>(`${environment.apiUrl}/auth/team/register`, JSON.stringify(teamForm.value), this.httpOptions);
    }

    deleteTeam(id: any): Observable<any> {
      return this.http.delete(`${environment.apiUrl}/auth/team/${id}`);
    }
}
