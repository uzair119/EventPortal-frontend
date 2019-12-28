import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TeamForm } from '../model/team-form';
import { Team } from '../model/team';
import { PlayerForm } from '../model/player-form';
import { TeamMember } from '../model/teamMember';

@Injectable({
  providedIn: 'root'
})
export class TeamFormService {
  private teamForm: BehaviorSubject<FormGroup | undefined> =
    new BehaviorSubject(this.fb.group(
      new TeamForm(new Team('MyTeam'))
    ));
  teamForm$: Observable<FormGroup> = this.teamForm.asObservable();
  constructor(private fb: FormBuilder) {}

  addPlayer() {
    console.log("clicked addplayer");
    const currentTeam = this.teamForm.getValue();
    const currentPlayers = currentTeam.get('players') as FormArray;
    currentPlayers.push(
      this.fb.group(
        new PlayerForm(new TeamMember('', '', ''))
      )
    );
    this.teamForm.next(currentTeam);
    console.log(currentTeam);
  }

  deletePlayer(i: number) {
    const currentTeam = this.teamForm.getValue();
    const currentPlayers = currentTeam.get('players') as FormArray;
    currentPlayers.removeAt(i);
    this.teamForm.next(currentTeam);
  }
} // end class
