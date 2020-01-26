import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { from } from 'rxjs';
import { MatConfirmDialogComponent } from '../employees/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(msg){
    return this.dialog.open(MatConfirmDialogComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "10px" },
       data :{
         message : msg
       }
     });
   }



}
