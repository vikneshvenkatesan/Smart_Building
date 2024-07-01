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
  display: any;
  country: Country | undefined;
  zoom = 4;

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


  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };

 
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
