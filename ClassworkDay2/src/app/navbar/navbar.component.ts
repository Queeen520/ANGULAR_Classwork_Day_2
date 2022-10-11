import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clickDonate: number = 0;

  constructor() { }

  countDonate(){
  this.clickDonate +10;
  }

  ngOnInit(): void {
  }

}
