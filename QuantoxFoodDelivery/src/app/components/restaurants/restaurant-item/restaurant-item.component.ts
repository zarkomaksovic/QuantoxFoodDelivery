import { RestaurantService } from './../../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';


@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getItems().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }

}
