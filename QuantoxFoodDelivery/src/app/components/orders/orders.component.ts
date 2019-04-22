import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  menu: {};
  displayedColumns = ['name', 'weight', 'price'];
  dataSource = new MatTableDataSource();

  constructor(
    private restaurantService: RestaurantService
    ) { }

  ngOnInit() {
    this.restaurantService.getMenu().subscribe(menu => {
      this.menu = menu;
      this.dataSource.data = menu;
    });
  }
}
