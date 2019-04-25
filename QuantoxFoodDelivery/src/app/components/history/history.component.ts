import { RestaurantService } from './../../services/restaurant.service';
import { OrdersComponent } from './../orders/orders.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
  constructor(private menuService: RestaurantService) { }

  menu: any;

  ngOnInit() {
    this.menu = this.menuService.getMenu()
    .subscribe(menu => {
      this.menu = menu;
      console.log(menu);
    });
  }

}
