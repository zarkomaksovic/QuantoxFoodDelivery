import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurants: Observable<Restaurant[]>;
  restaurantDoc: AngularFirestoreDocument<Restaurant>;

  constructor(
    public afs: AngularFirestore
  ) {
    this.restaurantsCollection = this.afs.collection('restorani');
    this.restaurants = this.restaurantsCollection
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Restaurant;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
   }
   getItems() {
    return this.restaurants;
  }
}


