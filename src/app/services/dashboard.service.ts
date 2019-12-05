import { Injectable } from '@angular/core';
import { Observer, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardEnableSubject: BehaviorSubject<Boolean>;
  public dashboardEnableObserver: Observable<Boolean>;

  public setEnableDashboard() {
    this.dashboardEnableSubject.next(true);
  }

  public setDisableDashboard() {
    this.dashboardEnableSubject.next(false);
  }
  constructor() {
    this.dashboardEnableSubject = new BehaviorSubject(false);
    this.dashboardEnableObserver = this.dashboardEnableSubject.asObservable();
  }
}
