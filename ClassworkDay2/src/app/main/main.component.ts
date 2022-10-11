import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cars: Array<{name: string, price: number, img: string}> = [
    { 
      name: "David", 
      price: 32,
      img: ""
    },
    {
      name: "jime",
      price: 28,
      img: ""
 
    },
    {
      name:"sabrina",
      price: 26,
      img: ""
    },
    { 
      name: "David", 
      price: 32,
      img: ""
    },
    {
      name: "jime",
      price: 28,
      img: ""
 
    },
    {
      name:"sabrina",
      price: 26,
      img: ""
    }
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
