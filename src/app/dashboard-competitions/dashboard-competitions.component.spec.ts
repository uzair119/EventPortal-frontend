import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompetitionsComponent } from './dashboard-competitions.component';

describe('DashboardCompetitionsComponent', () => {
  let component: DashboardCompetitionsComponent;
  let fixture: ComponentFixture<DashboardCompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
