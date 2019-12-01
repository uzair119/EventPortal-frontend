import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionRegisterComponent } from './competition-register.component';

describe('CompetitionRegisterComponent', () => {
  let component: CompetitionRegisterComponent;
  let fixture: ComponentFixture<CompetitionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
