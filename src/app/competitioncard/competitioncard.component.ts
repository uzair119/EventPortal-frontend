import { Component, OnInit, Input } from '@angular/core';
import { Competition } from '../model/competition';

@Component({
  selector: 'app-competitioncard',
  templateUrl: './competitioncard.component.html',
  styleUrls: ['./competitioncard.component.scss']
})
export class CompetitioncardComponent implements OnInit {

  @Input() competition: Competition;
  constructor() { }

  ngOnInit() {
  }

}
