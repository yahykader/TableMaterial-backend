import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeService } from 'src/app/service/employe.service';
import {MatTableDataSource, MatSort, MatPaginator,MatDialog,MatDialogConfig} from '@angular/material';
import { Employe } from 'src/app/model/employe.model';
import { from } from 'rxjs';
import { EmployeComponent } from '../employe/employe.component';
import { NotificationService } from 'src/app/service/notification.service';
import { DialogConfirmService } from 'src/app/service/dialog-confirm.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  listEmployes:Employe [];
  array = [];
  searchkey:string;  

  listData : MatTableDataSource<any>;
  displayedColumns: string[] = ['id','firstName', 'lastName','departement','email', 'age','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(public employeService: EmployeService,public dialog: MatDialog,
              public notificationService: NotificationService,private confirmService:DialogConfirmService) { }

  ngOnInit() {
    this.getListEmployes();
  }
  
  public getListEmployes(){
    this.employeService.getEmployes()
      .subscribe(
        list => {
          this.listEmployes= list;
         // this.employeeList.snapshotChanges();
         // let array=list.map(item=>{
           /* return {
              $id: item.id,
              //departmentName,
               ...item.;
            };
          });*/
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
    this.showDialog();
  }
  showDialog(){
    const dialogConfig = new MatDialogConfig; 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeComponent,dialogConfig);
  }


  public onDeleteEmploye(id){
    this.confirmService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.employeService.onDeleteEmploye(id)
      .subscribe(data => {
        console.log(data);
        this.notificationService.warn('! Deleted successfully');
        this.getListEmployes();
      }, err => {
        console.log(err);
      });
      }
    });
    /*
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    this.employeService.onDeleteEmploye(id)
      .subscribe(data => {
        console.log(data);
        this.notificationService.warn('! Deleted successfully');
        this.getListEmployes();
      }, err => {
        console.log(err);
      });*/
  }
  currentEmploye;
  
  public  onEditEmploye(id){
  // this.employeService.populateForm(row);
   //this.showDialog();
    this.employeService.getEmploye(id).subscribe(data=>{
      this.currentEmploye=id;  
      console.log(this.currentEmploye);    
      this.showDialog();
    },err=>{
      console.log(err);
    });


  }

}
