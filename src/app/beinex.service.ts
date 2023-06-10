import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeinexService {
  constructor() {}
  private pageViewsData = [
    { Month: 'Jan', pageView: 10000 },
    { Month: 'Feb', pageView: 9230 },
    { Month: 'March', pageView: 20050 },
    { Month: 'April', pageView: 21000 },
    { Month: 'May', pageView: 183000 },
    { Month: 'June', pageView: 170600 },
  ];
  private clicksData = [
    { Month: 'Jan', clicks: 150220 },
    { Month: 'Feb', clicks: 123110 },
    { Month: 'March', clicks: 20050 },
    { Month: 'April', clicks: 201033 },
    { Month: 'May', clicks: 10054 },
    { Month: 'June', clicks: 107011 },
  ];
  getPageViews() {
    return of(this.pageViewsData);
  }
  getClicks() {
    return of(this.clicksData);
  }
}
