import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeService } from 'src/app/service/employe.service';
import {MatTableDataSource, MatSort, MatPaginator,MatDialog,MatDialogConfig} from '@angular/material';
import { Employe } from 'src/app/model/employe.model';
import { from } from 'rxjs';
import { EmployeComponent } from '../employe/employe.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  listEmployes:Employe [];
  searchkey:string;  

  listData : MatTableDataSource<any>;
  displayedColumns: string[] = ['id','firstName', 'lastName', 'departement','email', 'age','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(public employeService: EmployeService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmployes();
  }
  public getEmployes(){
    this.employeService.getEmployes()
      .subscribe(list => {
          this.listEmployes= list;
          console.log(this.listEmployes);


          this.listData=new MatTableDataSource(this.listEmployes);
          this.listData.sort=this.sort;
          this.listData.paginator=this.paginator;
          this.listData.filterPredicate = (data: any, filter) => { 
            const dataStr =JSON.stringify(data).toLowerCase(); 
             return this.displayedColumns.some(element=>{
                return element !='actions' && dataStr.indexOf(filter) != -1;
            });
             
              };
          /*this.listData.filterPredicate = (data,filter)=>{
            console.log(data);
              return this.displayedColumns.some(element=>{
                return element != 'actions' && this.listData.data[element].indexOf(filter) != -1;
              });
          };*/
          console.log(this.listData);
    },err=>{
      console.log(err);
    });
  }

  onSearchClear(){
    this.searchkey="";
    this.applyFilter();
  }
  applyFilter(){
    this.listData.filter=this.searchkey.trim().toLowerCase();
  }
  onCreate(){
    this.employeService.initializeFromGroup();
    const dialogConfig = new MatDialogConfig; 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeComponent,dialogConfig);
  }


}
