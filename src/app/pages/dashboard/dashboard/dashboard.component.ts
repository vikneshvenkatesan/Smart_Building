import { Component } from '@angular/core';


interface Country {
  value: string;
  viewValue: string
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  country: Country | undefined;


  countrys: Country[] = [
    {
      value: 'india',
      viewValue: 'India'
    },
    {
      value: 'usa',
      viewValue: 'USA'
    },
    {
      value: 'uk',
      viewValue: 'UK'
    }
  ];

  constructor() {

  }
  trackByFn(index: number, item: Country): string {
    return item.value;
  }
}
