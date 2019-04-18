import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  restaurants: Restaurant[] = [
    new Restaurant('DoJaja', './../../../assets/images/do_jaja.png', 'Kneza Milosa bb', 331588, 'fast food')
  ];
  constructor() { }

  ngOnInit() {
  }

}
