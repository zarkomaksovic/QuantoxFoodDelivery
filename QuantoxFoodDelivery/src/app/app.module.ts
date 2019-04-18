import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantItemComponent } from './components/restaurants/restaurant-item/restaurant-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantsComponent,
    RestaurantItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
