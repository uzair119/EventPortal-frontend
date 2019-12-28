import { FormControl, FormArray } from '@angular/forms';

import { Team } from './team';

export class TeamForm {
    name = new FormControl();
    players = new FormArray([]);

    constructor(team: Team) {
      if (team.name) {
        this.name.setValue(team.name);
      }
      if (team.teamMemberList) {
        this.players.setValue([team.teamMemberList]);
      }
    }
  }
