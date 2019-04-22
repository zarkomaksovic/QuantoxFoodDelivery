import { Component, OnInit, Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  price:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pljeskavica', weight: ' 100g',price:'200din'},
  {position: 2, name: 'Cevapi', weight: ' 100g',price:'200din'},
  {position: 3, name: 'Piletina', weight:' 100g',price:'200din'},
  {position: 4, name: 'Batak', weight:' 100g',price:'200din'},
  {position: 5, name: 'Kobasica', weight:' 100g',price:'200din'},
  {position: 6, name: 'Pica', weight: ' 100g',price:'200din'},
  {position: 7, name: 'Sendvic', weight: ' 100g',price:'200din'},
  {position: 7, name: 'Buranija', weight:' 100g',price:'200din'},
  {position: 8, name: 'Giros', weight: ' 100g',price:'200din'},
  {position: 9, name: 'Burger', weight: ' 100g',price:'200din'},
  {position: 10, name: 'Pomfrit', weight: ' 100g',price:'200din'},
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['position', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export class Orders{
  @Input() orders:{name:string,weight:string,price:number}
     
}