import { AuthGuard } from './services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantItemComponent } from './components/restaurants/restaurant-item/restaurant-item.component';
import { DisplayComponent } from './components/display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MenuComponent } from './components/restaurants/restaurant-item/menu/menu.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    routingComponents,
    DisplayComponent,
    NavBarComponent,
    MenuComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'QuantoxFoodDelivery'),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
