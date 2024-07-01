import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive:boolean=false;
  showFirstIcon = true;
  constructor(){
this.isActive=true;
  }
  ngOnInit(): void {
    setInterval(() => {
      this.showFirstIcon = !this.showFirstIcon;
    }, 2000);
}

}
