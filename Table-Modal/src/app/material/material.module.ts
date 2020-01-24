import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,MatFormFieldControl} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
const Materilacomponets=[
  MatButtonModule,MatTableModule,MatToolbarModule,MatIconModule,MatDialogModule,
  MatGridListModule,MatDatepickerModule,MatCheckboxModule,MatNativeDateModule,
  MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule
];
@NgModule({
  
  imports:[Materilacomponets],
  exports:[Materilacomponets]
})
export class MaterialModule { }
