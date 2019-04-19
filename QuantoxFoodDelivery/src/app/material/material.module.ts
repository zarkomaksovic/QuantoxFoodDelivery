import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule, MatTableModule, MatCheckboxModule } from '@angular/material';

<<<<<<< HEAD
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
=======
>>>>>>> ae1e95e8be2a2b902615d6f01eff90106a838c14

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
<<<<<<< HEAD
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule
=======
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule
>>>>>>> ae1e95e8be2a2b902615d6f01eff90106a838c14
  ]
})
export class MaterialModule { }
