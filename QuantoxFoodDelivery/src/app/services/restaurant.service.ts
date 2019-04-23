import {
  AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    public afs: AngularFirestore
  ) {}

   getItems() {
    return this.afs.collection('restorani')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Restaurant;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }
  getMenu() {
    return this.afs.collection('menu')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

  }
}


