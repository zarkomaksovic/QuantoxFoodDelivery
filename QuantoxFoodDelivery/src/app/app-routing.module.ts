import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HistoryComponent } from './components/history/history.component';
import { MenuComponent } from './components/restaurants/restaurant-item/menu/menu.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: RestaurantsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [
  RestaurantsComponent,
  OrdersComponent,
  HistoryComponent,
  MenuComponent,
  SignUpComponent,
  LoginComponent
];
