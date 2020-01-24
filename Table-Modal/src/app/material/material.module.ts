import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material';
const Materilacomponets=[
  MatButtonModule,MatTableModule,MatToolbarModule,MatIconModule,
  MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule
];
@NgModule({
  
  imports:[Materilacomponets],
  exports:[Materilacomponets]
})
export class MaterialModule { }
