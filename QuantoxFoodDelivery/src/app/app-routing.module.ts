import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantItemComponent } from './components/restaurants/restaurant-item/restaurant-item.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HistoryComponent } from './components/history/history.component';
import { MenuComponent } from './components/restaurants/menu/menu.component';

const routes: Routes = [
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    children: [
      {
        path: 'menu',
        component: MenuComponent
      }]
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'history', component: HistoryComponent },
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  RestaurantsComponent,
  OrdersComponent,
  HistoryComponent,
  MenuComponent
];
