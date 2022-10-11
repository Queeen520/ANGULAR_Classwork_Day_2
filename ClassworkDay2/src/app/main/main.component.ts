import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cars: Array<{name: string, price: number, img: string}> = [
    { 
      name: "Mercedes-Benz, SUV", 
      price: 550000,
      img: "https://www.frontrunneroutfitters.com/media/catalog/product/cache/11f448c2736cb138681faf0ba59260e1/k/r/krmg009t.1.jpg"
    },
    {
      name: "Seat Ibiza Xcellence",
      price: 25000,
      img: "https://i.pinimg.com/736x/d4/3e/7e/d43e7ec0e89f6507cffc0e506394aa85.jpg"
 
    },
    {
      name:"Jeep Grand Cherokee 2022",
      price: 160000,
      img: "https://images.hgmsites.net/hug/2022-jeep-grand-cherokee_100814952_h.jpg"
    },
    { 
      name: "Porsche Cayenne", 
      price: 320000,
      img: "https://cdn.euroncap.com/media/31910/porsche-cayenne-359-235.jpg"
    },
    {
      name: "Lamborghini Aventador",
      price: 440000,
      img: "https://carwow-de-wp-1.imgix.net/lamborghini-aventador-replacement-front-blue-1.jpeg"
 
    },
    {
      name:"Audi Q5",
      price: 65000,
      img: "https://storage.carsmile.pl/uploads/2020/12/thumb_audi-q5.jpg"
    }
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
