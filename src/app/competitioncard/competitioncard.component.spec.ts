import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitioncardComponent } from './competitioncard.component';

describe('CompetitioncardComponent', () => {
  let component: CompetitioncardComponent;
  let fixture: ComponentFixture<CompetitioncardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitioncardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
