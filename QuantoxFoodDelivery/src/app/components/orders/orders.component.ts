import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, Input, Output } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Output() menu: {};
  displayedColumns = ['name', 'weight', 'price'];
  dataSource = new MatTableDataSource();
  id;
  constructor(
    private restaurantService: RestaurantService
    ) { }

  ngOnInit() {
    this.restaurantService.getMenu().subscribe(menu => {
      this.menu = menu.map(id => {
        this.id = id;
        return id;
      });
      this.dataSource.data = this.id;
      console.log(this.id);
    });
  }

}
