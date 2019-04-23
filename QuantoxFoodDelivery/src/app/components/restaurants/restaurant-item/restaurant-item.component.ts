import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.restaurantService.getItems().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
  showMenu(){
    this.router.navigate(['/menu']);
  }

}
