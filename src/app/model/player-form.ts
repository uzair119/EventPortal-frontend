// player-form.model.ts
import { FormControl, Validators } from '@angular/forms';
import { TeamMember } from './teamMember';

export class PlayerForm {
  firstName = new FormControl();
  lastName = new FormControl();
  cnic = new FormControl();
constructor(
  player: TeamMember
) {
    this.firstName.setValue(player.firstname);
    this.firstName.setValidators([Validators.required]);
    this.lastName.setValue(player.lastname);
    this.cnic.setValue(player.cnic);
    this.cnic.setValidators([Validators.required]);
  }
}